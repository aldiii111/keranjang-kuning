/**
 * ══════════════════════════════════════════════════════
 * maduraShop Bento Dashboard - Main JavaScript
 * ══════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
    // ═══════════════════════════════════════════════════
    // DATA INITIALIZATION
    // ═══════════════════════════════════════════════════

    const initialProduk = [
        { id: 1, nama: "Laptop", harga: "Rp9.000.000", daerah: "Jawa Barat", img: "assets/images/hihi.avif" },
        { id: 2, nama: "Kemeja", harga: "Rp90.000", daerah: "Maluku", img: "assets/images/hihi.avif" },
        { id: 3, nama: "Ipad", harga: "Rp5.000.000", daerah: "Jakarta Pusat", img: "assets/images/hihi.avif" },
        { id: 4, nama: "Kipas", harga: "Rp70.000", daerah: "Jakarta Pusat", img: "assets/images/hihi.avif" },
        { id: 5, nama: "Charger type C", harga: "Rp56.000", daerah: "Semarang", img: "assets/images/hihi.avif" },
        { id: 6, nama: "Kursi gaming", harga: "Rp750.000", daerah: "Jawa Barat", img: "assets/images/hihi.avif" },
        { id: 7, nama: "Meja belajar", harga: "Rp44.000", daerah: "Jawa Tengah", img: "assets/images/hihi.avif" },
        { id: 8, nama: "Iphone 17 promex", harga: "Rp50.000.000", daerah: "Jakarta Timur", img: "assets/images/hihi.avif" },
        { id: 9, nama: "Tas sekolah", harga: "Rp250.000", daerah: "Jawa Timur", img: "assets/images/hihi.avif" },
        { id: 10, nama: "Buku sejarah indo", harga: "Rp50.000", daerah: "Jakarta Pusat", img: "assets/images/hihi.avif" }
    ];

    // Load from LocalStorage or use initial
    let produk = JSON.parse(localStorage.getItem('madura_produk')) || initialProduk;
    let keranjang = JSON.parse(localStorage.getItem('madura_cart')) || [];

    const preview = document.getElementById("preview");
    const cartItemsContainer = document.getElementById("cart-items");
    const inventoryList = document.getElementById("inventory-list");

    // ═══════════════════════════════════════════════════
    // PAGE SWITCHING LOGIC
    // ═══════════════════════════════════════════════════

    window.switchPage = function(pageName) {
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.querySelector(`[data-page="${pageName}"]`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }

        // Update sidebar active state
        document.querySelectorAll('.sidebar-btn, .mobile-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.nav === pageName);
        });

        // Specific page renders
        if (pageName === 'shop') renderShop();
        if (pageName === 'dashboard') updateDashboardStats();
        if (pageName === 'cart') renderCart();
        if (pageName === 'settings') renderInventory();

        // Refresh AOS & Lucide
        setTimeout(() => {
            AOS.refresh();
            lucide.createIcons();
        }, 100);

        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMobileSidebar();
    };

    // Mobile Sidebar Toggles
    const mobileBurger = document.getElementById('mobile-burger');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileClose = document.getElementById('mobile-close');

    function openMobileSidebar() {
        mobileOverlay.classList.remove('hidden');
        mobileSidebar.classList.remove('-translate-x-full');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (!mobileSidebar) return;
        mobileOverlay.classList.add('hidden');
        mobileSidebar.classList.add('-translate-x-full');
        document.body.style.overflow = '';
    }

    mobileBurger?.addEventListener('click', openMobileSidebar);
    mobileClose?.addEventListener('click', closeMobileSidebar);
    mobileOverlay?.addEventListener('click', closeMobileSidebar);

    // Sidebar button events
    document.querySelectorAll('.sidebar-btn, .mobile-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.nav));
    });

    // ═══════════════════════════════════════════════════
    // RENDERING FUNCTIONS
    // ═══════════════════════════════════════════════════

    function renderShop() {
        preview.innerHTML = produk.map((item, index) => `
            <div class="card bg-cream border border-border-custom rounded-[30px] p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover group flex flex-col h-full" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-bg flex items-center justify-center">
                    <img src="${item.img || 'assets/images/hihi.avif'}" alt="${item.nama}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute top-3 left-3 px-3 py-1 bg-sage/80 backdrop-blur-md text-white text-[0.6rem] font-bold uppercase rounded-full tracking-wider">${item.daerah}</div>
                </div>
                <h3 class="font-fraunces font-semibold text-[1.2rem] mb-1">${item.nama}</h3>
                <p class="text-accent font-bold mb-4">${item.harga}</p>
                <div class="mt-auto">
                    <button onclick="addToCart(${item.id})" class="w-full bg-sage text-white py-3 rounded-2xl text-sm font-medium transition-all hover:bg-sage/90 active:scale-95 flex items-center justify-center gap-2">
                        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    function renderCart() {
        const emptyMsg = document.getElementById('empty-cart-msg');
        if (keranjang.length === 0) {
            cartItemsContainer.innerHTML = '';
            emptyMsg.classList.remove('hidden');
            return;
        }
        emptyMsg.classList.add('hidden');

        cartItemsContainer.innerHTML = keranjang.map((item, index) => `
            <div class="card bg-white/60 backdrop-blur-xl border border-white/30 rounded-[30px] p-6 shadow-glass flex gap-4 items-center" data-aos="fade-up">
                <div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src="${item.img || 'assets/images/hihi.avif'}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold text-sm">${item.nama}</h4>
                    <p class="text-accent text-xs font-bold">${item.harga}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="w-10 h-10 rounded-xl bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-all">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        lucide.createIcons();
    }

    function renderInventory() {
        inventoryList.innerHTML = produk.map((item, index) => `
            <div class="flex items-center justify-between bg-white/50 rounded-2xl px-5 py-4 border border-border-custom">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-lg bg-bg overflow-hidden"><img src="${item.img}" class="w-full h-full object-cover"></div>
                    <div>
                        <div class="font-medium text-[0.9rem]">${item.nama}</div>
                        <div class="text-[0.75rem] opacity-50">${item.daerah} · ${item.harga}</div>
                    </div>
                </div>
                <button onclick="deleteProduct(${index})" class="w-9 h-9 rounded-xl flex items-center justify-center text-red-400 hover:bg-red-50 transition-all">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        lucide.createIcons();
    }

    // ═══════════════════════════════════════════════════
    // CORE FUNCTIONALITY
    // ═══════════════════════════════════════════════════

    window.addToCart = function(id) {
        const item = produk.find(p => p.id === id);
        if (item) {
            keranjang.push(item);
            localStorage.setItem('madura_cart', JSON.stringify(keranjang));
            updateDashboardStats();
            
            // Show a simple toast or feedback
            const btn = event.currentTarget;
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i> Added!';
            btn.classList.replace('bg-sage', 'bg-accent');
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.replace('bg-accent', 'bg-sage');
                lucide.createIcons();
            }, 1000);
        }
    };

    window.removeFromCart = function(index) {
        keranjang.splice(index, 1);
        localStorage.setItem('madura_cart', JSON.stringify(keranjang));
        renderCart();
        updateDashboardStats();
    };

    window.deleteProduct = function(index) {
        produk.splice(index, 1);
        localStorage.setItem('madura_produk', JSON.stringify(produk));
        renderInventory();
        updateDashboardStats();
    };

    function updateDashboardStats() {
        const totalProdElem = document.getElementById('total-products');
        const cartCountElem = document.getElementById('cart-count');
        
        if (totalProdElem) totalProdElem.textContent = produk.length;
        if (cartCountElem) cartCountElem.textContent = keranjang.length;
    }

    // Add Product Form
    document.getElementById('product-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('prod-name').value;
        const harga = document.getElementById('prod-price').value;
        const daerah = document.getElementById('prod-region').value;

        produk.push({
            id: Date.now(),
            nama,
            harga,
            daerah,
            img: "assets/images/hihi.avif"
        });

        localStorage.setItem('madura_produk', JSON.stringify(produk));
        e.target.reset();
        renderInventory();
        updateDashboardStats();
    });

    // ═══════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════

    renderShop();
    updateDashboardStats();
});