        //Membuat object menggunakan object literal
const produk1 = {
    id: 1,
    nama: "Laptop",
    harga: 5000000,
    stok: 5
};
        //buat object menggunakan new Object()
const produk2 = new Object();
produk2.id = 2;
produk2.nama = "Mouse";
produk2.harga = 75000;
produk2.stok = 10;
        //Menyimpan 5 produk ke dalam array
const daftarProduk = [
    produk1,
    produk2,
    {
        id: 3,
        nama: "Keyboard",
        harga: 150000,
        stok: 8
    },
    {
        id: 4,
        nama: "Headphone",
        harga: 200000,
        stok: 6
    },
    {
        id: 5,
        nama: "Monitor",
        harga: 1500000,
        stok: 3
    }
];
        //Array buat nyimopak keranjang belanja
let keranjang = [];

        //Ngambil elemen HTML berdasarkan ID
const daftarProdukHTML = document.getElementById("product-list");
const daftarKeranjangHTML = document.getElementById("cart-list");
const jumlahItemHTML = document.getElementById("total-items");
const totalHargaHTML = document.getElementById("total-price");
const tombolKosongkan = document.getElementById("clear-cart");
const tombolBatalkan = document.getElementById("remove-last");
const tombolCheckout = document.getElementById("checkout");
const ringkasanHTML = document.getElementById("order-summary");

        //Mengambil elemen berdasarkan class
const bagianProduk = document.getElementsByClassName("product-section");
        // Mengambil elemen menggunakan querySelector
const judulToko = document.querySelector(".welcome h2");
        //Funsgi utama harga
function formatRupiah(harga) {
    return "Rp" + harga.toLocaleString("id-ID");
}
        //Nampilin daftar produk
function tampilkanProduk() {

        //Mengosongkan tampilan produk sebelumnya
    daftarProdukHTML.innerHTML = "";

        //Perulangan untuk membaca semua produk
    for (let i = 0; i < daftarProduk.length; i++) {
        const produk = daftarProduk[i];
        //Membuat elemen kartu produk
        const kartu = document.createElement("div");
        kartu.className = "product-card";
        //Membuat judul produk
        const nama = document.createElement("h3");
        nama.appendChild(document.createTextNode(produk.nama));
        //Membuat harga produk
        const harga = document.createElement("p");
        harga.className = "price";
        harga.appendChild(
            document.createTextNode(formatRupiah(produk.harga))
        );
        //Membuat informasi stok
        const stok = document.createElement("p");
        stok.className = "stock";
        stok.appendChild(
            document.createTextNode("Stok: " + produk.stok)
        );
        //Membuat tombol tambah
        const tombol = document.createElement("button");
        tombol.className = "btn-add";

        if (produk.stok > 0) {
            tombol.appendChild(
                document.createTextNode("Tambah ke Keranjang")
            );
        }else {
            tombol.appendChild(
                document.createTextNode("Stok Habis")
            );
        }
        //Ngejalanin fungsi ketika tombol diklik
        tombol.addEventListener("click", function () {
            tambahKeranjang(produk);
        });
        //Ngegabungin semua elemen ke kartu
        kartu.appendChild(nama);
        kartu.appendChild(harga);
        kartu.appendChild(stok);
        kartu.appendChild(tombol);
        //Memasukkan kartu ke halaman
        daftarProdukHTML.appendChild(kartu);
    }
        // Mengambil semua kartu produk berdasarkan class
    const semuaKartu = document.getElementsByClassName("product-card");
        // Mengubah style jika stok habis
    for (let i = 0; i < semuaKartu.length; i++) {
        if (daftarProduk[i].stok === 0) {
            semuaKartu[i].style.backgroundColor = "#39252b";
            semuaKartu[i].style.borderColor = "#dc3545";
        }
    }
}
        //Menambahkan produk ke kerangjang
function tambahKeranjang(produk) {
        //Memeriksa ada stok atau enggak
    if (produk.stok <= 0) {
        alert("Srry, Stock " + produk.nama + " Sudah Abis!");
        return;
    }
        //Menambahkan produk ke array keranjang
    keranjang.push(produk);
        //Mengurangi stok produk
    produk.stok--;
        //Memperbarui tampilan
    tampilkanProduk();
    tampilkanKeranjang();
        //Menghilangkan ringkasan checkout sebelumnya
    ringkasanHTML.style.display = "none";
}
        //Nampilin Keranjang Belanja
function tampilkanKeranjang() {
        //Menghapus isi daftar keranjang sebelumnya
    while (daftarKeranjangHTML.firstChild) {
        daftarKeranjangHTML.removeChild(
            daftarKeranjangHTML.firstChild
        );
    }
        //Hitung total harga
    let totalHarga = 0;
        //Membaca isi keranjang dengan perulangan
    for (let i = 0; i < keranjang.length; i++) {
        const produk = keranjang[i];
        totalHarga += produk.harga;
        //Membuat elemen list
        const item = document.createElement("li");
        item.className = "cart-item";
        //Membuat informasi produk
        const informasi = document.createElement("p");
        informasi.appendChild(
            document.createTextNode(
                produk.nama + " - " + formatRupiah(produk.harga)
            )
        );
        //Membuat tombol hapus
        const tombolHapus = document.createElement("button");
        tombolHapus.className = "btn-delete";
        tombolHapus.appendChild(
            document.createTextNode("Hapus")
        );
      //Menghapus produk tertentu dari keranjang
    tombolHapus.addEventListener("click", function () {
    if (confirm("Yakin mau hapus " + produk.nama + "?")) {
        //Menghapus elemen dari halaman menggunakan removeChild()
        daftarKeranjangHTML.removeChild(item);
        //Mengembalikan stok
        produk.stok++;
        //Menghapus produk dari array
        keranjang.splice(i, 1);
        //Memperbarui tampilan
        tampilkanProduk();
        tampilkanKeranjang();
        ringkasanHTML.style.display = "none";
    }
});
        //Menggabungkan elemen
        item.appendChild(informasi);
        item.appendChild(tombolHapus);
        //Memasukkan item ke daftar keranjang
        daftarKeranjangHTML.appendChild(item);
    }
    //Menampilkan jumlah item dan total harga
    jumlahItemHTML.innerHTML = keranjang.length;
    totalHargaHTML.innerHTML = formatRupiah(totalHarga);
}
//Ngebatalin item terakhir
tombolBatalkan.addEventListener("click", function () {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    if (confirm("Batalkan produk terakhir yang ditambahkan?")) {
        //Mengambil dan menghapus item terakhir
        const produk = keranjang.pop();
        //Mengembalikan stok produk
        produk.stok++;
        //Memperbarui tampilan
        tampilkanProduk();
        tampilkanKeranjang();
        ringkasanHTML.style.display = "none";
    }
});
            //kosongin seluruh keranjang
tombolKosongkan.addEventListener("click", function () {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    if (confirm("Apakah Anda yakin ingin mengosongkan keranjang?")) {
            //Menghapus item satu per satu
        while (keranjang.length > 0) {
            const produk = keranjang.pop();
            //Mengembalikan stok produk
            produk.stok++;
        }
            //Memperbarui tampilan
        tampilkanProduk();
        tampilkanKeranjang();
        ringkasanHTML.style.display = "none";
        alert("Keranjang berhasil dikosongkan!");
    }
});
    //proces checkout
tombolCheckout.addEventListener("click", function () {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    //Meminta nama pembeli
    const namaPembeli = prompt("Masukkan nama pembeli:");
    //Memeriksa nama yang dimasukkan
    if (namaPembeli === null || namaPembeli.trim() === "") {
        alert("Nama pembeli belum diisi!");
        return;
    }
    //Membuat daftar pesanan
    const daftarPesanan = [];
    for (let i = 0; i < keranjang.length; i++) {
        daftarPesanan.push(
            keranjang[i].nama + " - " +
            formatRupiah(keranjang[i].harga)
        );
    }
    //Menggabungkan daftar produk menggunakan join()
    const pesanan = daftarPesanan.join("\n");
    //Menghitung total harga
    let total = 0;
    for (let i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga;
    }
    //Membuat ringkasan pembelian
    const ringkasan =
        "RINGKASAN PESANAN\n\n" +
        "Nama Pembeli: " + namaPembeli +
        "\n\nDaftar Barang:\n" +
        pesanan +
        "\n\nTotal Harga: " + formatRupiah(total);
    //Menampilkan ringkasan di halaman
    ringkasanHTML.textContent = ringkasan;
    ringkasanHTML.style.display = "block";
    //Mengosongkan keranjang setelah pembelian selesai
    while (keranjang.length > 0) {
        keranjang.pop();
    }
    // Memperbarui tampilan keranjang
    tampilkanKeranjang();
    alert("Checkout berhasil! Terima kasih sudah berbelanja.");
});
//jalain website
//Mengubah judul halaman
judulToko.textContent = "SELAMAT DATANG DI MY TOKO ADIT";
//Memastikan bagian produk tersedia
console.log("Jumlah bagian produk: " + bagianProduk.length);
// Menampilkan produk dan keranjang saat website dibuka
tampilkanProduk();
tampilkanKeranjang();