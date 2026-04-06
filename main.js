const overlay = document.querySelector(".overlay")
const popup = document.querySelector(".popup")

function hover() {
    overlay.style.display = "flex"
    popup.style.display = "flex"
}

function out() {
    overlay.style.display = "none"
    popup.style.display = "none"
}

const produk = [
    {
        nama: "laptop",
        harga: "Rp9.000.000",
        daerah: "Jawa Barat"
    },
    {
        nama: "Kemeja",
        harga: "Rp90.000",
        daerah: "Maluku"
    },
    {
        nama: "Ipad",
        harga: "Rp5.000.000",
        daerah: "Jakarta Pusat"
    },
    {
        nama: "Kipas",
        harga: "Rp70.000",
        daerah: "Jakarta Pusat"
    },
    {
        nama: "Charger type C",
        harga: "Rp56.000",
        daerah: "Semarang"
    },
    {
        nama: "Kursi gaming",
        harga: "Rp750.000",
        daerah: "Jawa Barat"
    },
    {
        nama: "Meja belajar",
        harga: "Rp44.000",
        daerah: "Jawa Tengah"
    },
    {
        nama: "Iphone 17 promex",
        harga: "Rp50.000.000",
        daerah: "Jakarta Timur"
    },
    {
        nama: "Tas sekolah",
        harga: "Rp250.000",
        daerah: "Jawa Timur"
    },
    {
        nama: "Buku sejarah indo",
        harga: "Rp50.000",
        daerah: "Jakarta Pusat"
    },
    {
        nama: "lampu belajar",
        harga: "Rp90.000",
        daerah: "Jawa Barat"
    },
    {
        nama: "laptop lenovo",
        harga: "Rp12.000.000",
        daerah: "Jogja"
    },
    {
        nama: "Sepeda",
        harga: "Rp900.000",
        daerah: "Banten"
    },
    {
        nama: "Samsung smartphone",
        harga: "Rp4.000.000",
        daerah: "Riau"
    },
]

const keranjang = []

function click() {
    const tombol1 = document.getElementById('tombol1')
    const tombol2 = document.getElementById('tombol2')
    const tombol3 = document.getElementById('tombol3')
    const tombol4 = document.getElementById('tombol4')
    const tombol5 = document.getElementById('tombol5')
    const tombol6 = document.getElementById('tombol6')
    const tombol7 = document.getElementById('tombol7')
    const tombol8 = document.getElementById('tombol8')
    const tombol9 = document.getElementById('tombol9')
    const tombol10 = document.getElementById('tombol10')
    const tombol11 = document.getElementById('tombol11')
    const tombol12 = document.getElementById('tombol12')
    const tombol13 = document.getElementById('tombol13')
    const tombol14 = document.getElementById('tombol14')

    const tombol = tombol1

    if(tombol.checked) {
        console.log('wkwk')
    }
}