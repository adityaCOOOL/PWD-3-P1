<!DOCTYPE html>
<html>
<head>
    <title>Data Hewan</title>
</head>
<body>

    <h2>Data Hewan</h2>

    <?php include 'tg7.php'; ?>

    <?php
    $kucing = new Kucing();
    $kucing->setNama("Mimi");
    $kucing->setUmur(2);

    $anjing = new Anjing();
    $anjing->setNama("Max");
    $anjing->setUmur(3);
    ?>

    <h3>Hewan 1</h3>
    Nama: <?php echo $kucing->getNama(); ?><br>
    Umur: <?php echo $kucing->getUmur(); ?> tahun<br>
    Jenis: Kucing<br>
    Suara: <?php echo $kucing->getSuara(); ?><br>

    <h3>Hewan 2</h3>
    Nama: <?php echo $anjing->getNama(); ?><br>
    Umur: <?php echo $anjing->getUmur(); ?> tahun<br>
    Jenis: Anjing<br>
    Suara: <?php echo $anjing->getSuara(); ?>

</body>
</html>