document
.getElementById("messageForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let pesan = document.getElementById("pesan").value;

    let gender =
        document.querySelector(
            'input[name="gender"]:checked'
        )?.value || "-";

    let waktu = new Date();

    document.getElementById("outputBox").innerHTML = `
        <b>Current time :</b> ${waktu}<br><br>
        Nama : ${nama}<br>
        Tanggal Lahir : ${tgl}<br>
        Jenis Kelamin : ${gender}<br>
        Pesan : ${pesan}
    `;
});