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
let p;
let h3;
let pp;
let tombol;
function addCard() {
  const div = document.createElement("div");
  div.className = "div1";

  const img = document.createElement("img");
  img.src = "assets/images/hihi.avif";

  p = document.createElement("p");
  h3 = document.createElement("h3");
  pp = document.createElement("p");

  tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = "add keranjang";

  div.append(img, p, h3, pp, tombol);
  preview.append(div);
}

const datas = produk.map((values) => {
  addCard(), 
  p.innerHTML = values.nama;
  h3.innerHTML = values.harga;
  pp.innerHTML = values.daerah;
});

tombol.onclick = function () {
  barang(valuess);
   
};
