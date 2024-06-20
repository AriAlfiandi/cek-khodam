const namaKodam = [
    "Kepala Charger",
    "Ayam Potong",
    "Indomaret",
    "Sujatmiko Arafuru",
    "PSHT",
    "Ambatron",
    "Ikan Sapu-Sapu",
    "Laba-Laba Sunda",
    "Kuda Lumping Asli Mojokerto",
    "Becak Hotwil",
    "Risol Ayam",
    "Power F",
    "Asbak Rokok",
    "SIGMA🧢🧏‍♂",
    "Kucing Anggora",
    "Rusdi Ngawi",
    "Jomok Alam Semesta"

];

function cekKodam() {
    const randomIndex = Math.floor(Math.random() * namaKodam.length);
    const randomNamaKodam = namaKodam[randomIndex];

    const nama = document.getElementById('nama').value.trim();

    if (nama === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }

    const hasil = document.getElementById('hasil-kodam');
    hasil.innerHTML = `<p class="text-2xl text-green-800 font-bold text-center">${randomNamaKodam} </p>`;

    const inputNama = document.getElementById('nama');
    inputNama.value = '';
}

document.getElementById('kodam-form').addEventListener('submit', function(event){
    event.preventDefault();
    cekKodam();
});
