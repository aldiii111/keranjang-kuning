const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");

function hover() {
  overlay.style.display = "flex";
  popup.style.display = "flex";
}

function out() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

const produk = [
  {
    nama: "laptop",
    harga: "Rp9.000.000",
    daerah: "Jawa Barat",
  },
  {
    nama: "Kemeja",
    harga: "Rp90.000",
    daerah: "Maluku",
  },
  {
    nama: "Ipad",
    harga: "Rp5.000.000",
    daerah: "Jakarta Pusat",
  },
  {
    nama: "Kipas",
    harga: "Rp70.000",
    daerah: "Jakarta Pusat",
  },
  {
    nama: "Charger type C",
    harga: "Rp56.000",
    daerah: "Semarang",
  },
  {
    nama: "Kursi gaming",
    harga: "Rp750.000",
    daerah: "Jawa Barat",
  },
  {
    nama: "Meja belajar",
    harga: "Rp44.000",
    daerah: "Jawa Tengah",
  },
  {
    nama: "Iphone 17 promex",
    harga: "Rp50.000.000",
    daerah: "Jakarta Timur",
  },
  {
    nama: "Tas sekolah",
    harga: "Rp250.000",
    daerah: "Jawa Timur",
  },
  {
    nama: "Buku sejarah indo",
    harga: "Rp50.000",
    daerah: "Jakarta Pusat",
  },
  {
    nama: "lampu belajar",
    harga: "Rp90.000",
    daerah: "Jawa Barat",
  },
  {
    nama: "laptop lenovo",
    harga: "Rp12.000.000",
    daerah: "Jogja",
  },
  {
    nama: "Sepeda",
    harga: "Rp900.000",
    daerah: "Banten",
  },
  {
    nama: "Samsung smartphone",
    harga: "Rp4.000.000",
    daerah: "Riau",
  },
];

const keranjang = [];

const preview = document.getElementById("preview");

function addCard(data) {
  const div = document.createElement("div");
  div.className = "div1";

  const img = document.createElement("img");
  img.src = "assets/images/hihi.avif";

  const p = document.createElement("p");
  const h3 = document.createElement("h3");
  const pp = document.createElement("p");

  p.innerHTML = data.nama;
  h3.innerHTML = data.harga;
  pp.innerHTML = data.daerah;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "add keranjang";

  btn.addEventListener("click", function () {
    masukKeranjang(data)
  })

  div.append(img, p, h3, pp, btn);
  preview.append(div);
}

function showCard(datas) {
  const divv = document.createElement("div");
  divv.style.boxShadow = "0 2px 5px 2px rgb(0, 0, 0, 0.2)";
  divv.style.display = "flex";
  divv.style.padding = "8px";
  divv.style.flexDirection = "column";

  const p = document.createElement("p");
  p.innerHTML = datas.nama + "<br>" + datas.harga + "<br>" + datas.daerah

  divv.append(p)
  popup.append(divv)
}

function masukKeranjang(barangnya) {
  keranjang.push(barangnya)
  keranjang.forEach((values) => {
    showCard(values)
  })
}


produk.forEach((values) => {
  addCard(values)
});

console.log(keranjang)
