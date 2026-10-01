console.log("Praktikum Dimulai");

// Aktivitas 1: DOM Selection Seleksi DOM
// DOM Selection kita harus "Menangkap Elemen" sebelum kita memanipulasi HTML
// Ambil Elemen-> Simpan didalam variabel js

//1. Ambil Elemen bejudul berdasarlan id
//documentt.getElementById("...; // Ambil elemen html spesifik berdasarkan id
const judulUtama = document.getElementById("judul-utama");

// 2. querySelector("#...") -> Ambil ID berdasarkan id
// Tanda (#) menandakan bahwa kita menargetkan id , sedangkan tanda (.) menandakan kita menargetkan class
// Ambil elemen sub judul berdasarkan id
const subJudul = document.querySelector("#sub-judul");

//2. mengambil elemen pada kartu 1 (Kartu manipulasi teks & styles)
const TeksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. Mengambil tombol aksi pada kartu`
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil elemen pada kartu 2 (fitur catatan dinamis/to do list)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

//Aktivitas 2: Manipulasi Text dan Styles (pada Kartu 1)
//AddEvenListener("Click", function(){...}) -> tolong dengarkan dan tunggu
// Setiap kali tombol di klik, jalankan fungsi didalamnya
btnUbahTeks.addEventListener("click", function () {
    //.innerText -> untuk mengubah teks pada elemen html
    TeksPreview.innerText = "Teks telah berhasil diubah menjadi DOM!";

    // .styleColor -> untuk mengubah warna teks pada elemen html melalui javascript
    TeksPreview.style.color = "#57dc5e";

    // console.log -> untuk menampilkan pesan pada console browser
    console.log("DOM Teks Preview berhasil diubah!");
})

// B.. mengubah warna background box preview
btnToggleWarna.addEventListener("click", function () {
    // .classList.toggle("nama-class") -> untuk menambahkan atau menghapus class pada elemen html
    // Jika class tersebut belum ada, maka class akan ditambahkan. 
    // Jika class sudah ada, maka class akan dihapus
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Box Preview berhasil diubah!");
});

// C. Mengembalikan ke kondisi awal
btnReset.addEventListener("click", function () {
    // mengembalikan teks preview ke kondisi awal   
    TeksPreview.innerText = "hi! teks ini siap diubah oleh js";

    // Kosongkan warna teks preview
    TeksPreview.style.color = "";

    // Hapus class menggunakan .classList.remove("nama-class") -> untuk menghapus class pada elemen html
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM Box Preview dikembalikan ke default!");
});

// Aktivitas 3 & 4: Membuat Catatan Dinamis (To Do List) & menghitung jumlah catatan (pada Kartu 2)
//Dibagian ini kita belajar buat elemen html baru (<li>) secara dinamis menggunakan javascript
// Lalu mengisi teksnya, memberu tombol hapus, dan menambahkan ke dalam layar


// langkah 1 : membuat variabel untuk menampung data catatan    
// 'let' digunakan karena data catatan akan berubah-ubah (dinamis)
let totalCatatan = 0;


// langkah 2 : membuat fungsi untuk menambahkan catatan
// fungsi adlah kumpulan perintah yang diberi nama. kita bisa memanggil fungsi kapanpun kita mau
function perbaruiJumlah() {
    // masukan angka total catatan ke dalam html
    jumlahCatatan.innerText = totalCatatan;

    // Percabangan kondisi untuk: apakah catatan kosong atau tidak
    if (totalCatatan === 0) {
        // jika catatan kosong, maka hapus class "hidden" pada pesan "tidak ada catatan" tampil
        pesanKosong.classList.remove("hidden");
    } else {
        // jika catatan tidak kosong, tambahkan class "hidden" pada pesan "tidak ada catatan" agar tidak tampil
        pesanKosong.classList.add("hidden");
    }
}


// langkah 3: membuat fungsi untuk menambahkan catatan baru
function tambahCatatan() {
    // 3.1 ambil teks dari input catatan
    // .trim() -> menghapus spasi kosong di awal dan akhir teks
    const isiTeks = inputCatatan.value.trim();

    // 3.2 validasi input: jika teks kosong (" "), tampilkan alert dan hentikan fungsi
    if (isiTeks === "") {
        alert("Catatan tidak boleh kosong!");
        return; // hentikan fungsi jika input kosong
    }

    // 3.3 createElement("li") -> membuat elemen <li> baru hanya di javascript
    const liBaru = document.createElement("li");
    liBaru.className = "note-item"; // menambahkan class pada elemen <li> baru
    
    // 3.4 mengisi teks catatan baru dengan cara innerHTML mengisi <li> dengan teks dan tombol hapus
    // tanda Backtick (`) digunakan agar bisa menulis teks multi baris dan menyisipkan variabel di dalamnya menggunakan ${variabel}
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

    // 3.5 menambahkan event listener pada tombol hapus pada item <li>
    //querySelector(".btn-hapus") -> mengambil tombol hapus pada <li> baru
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function() {
        // menghapus elemen <li> dari daftar catatan
        liBaru.remove(); // mengurangi total catatan
        totalCatatan--; // memperbarui jumlah catatan di layar
        perbaruiJumlah();
        console.log('DOM Catatan "${isiTeks}" telah dihapus!');
    })

    //  3.6 .appendChild(liBaru) -> menempelkan elemen <li> baru ke dalam <ul> daftar catatan
    daftarCatatan.appendChild(liBaru);

    // 3.7 mengosongkan jumlah cattatan dan memperbarui jumlah catatan di layar
    inputCatatan.value = ""; // mengosongkan input catatan

    // 3.8 menambahkan total catatan dan memperbarui jumlah catatan di layar
    totalCatatan++;
    perbaruiJumlah();

    console.log('DOM Catatan baru ditambahkan : "${isiTeks}"');
}

// langkah 4: menambahkan event listener pada tombol tambah catatan
// ketika tombol tambah diklik, jalankan fungsi tambahCatatan()
btnTambah.addEventListener("click", function() {
    tambahCatatan();
});

// langkah 5: event listener untuk menambahkan catatan ketika menekan tombol "Enter" pada keyboard
inputCatatan.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahCatatan();
    }
});