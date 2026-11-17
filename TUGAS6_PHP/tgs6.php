<!DOCTYPE html>
<html>
<head>
    <title>Hasil Latihan PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<?php

$soal = $_GET['soal'] ?? '';
if ($soal == 1) {
    echo "<h1>Angka Genap 1 - 10</h1>";
    echo "<div class='hasil'>";
    for ($i = 1; $i <= 10; $i++) {
        if ($i % 2 == 0) {
            echo "<span>$i</span>";
        }
    }
    echo "</div>";
    echo "<a href='tgs6.php' class='kembali'>";
    echo "Kembali ke halaman awal";
    echo "</a>";

} else if ($soal == 2) {
    echo "<h1>Tabel Perkalian 1 - 10</h1>";
    echo "<table>";
    echo "<tr>";
    echo "<th>Bilangan</th>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<th>$i</th>";
    }
    echo "</tr>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<tr>";
        echo "<th>$i</th>";
        for ($j = 1; $j <= 10; $j++) {
            $hasil = $i * $j;
            if ($hasil % 2 == 0) {
                echo "<td class='genap'>$hasil</td>";
            } else {
                echo "<td class='ganjil'>$hasil</td>";
            }
        }
        echo "</tr>";
    }
    echo "</table>";
    echo "<a href='tgs6.php' class='kembali'>";
    echo "Kembali ke Menu";
    echo "</a>";
} else {
    include "index.html";
}
?>

</div>
</body>
</html>
