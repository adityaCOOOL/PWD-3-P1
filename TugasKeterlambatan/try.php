<?php
class Segitiga {
    public function luas() {
        return 0;
    }
    public function keliling() {
        return 0;
    }
}
class SegitigaSiku extends Segitiga {
    private $alas, $tinggi;
    public function __construct($alas, $tinggi) {
        $this->alas = $alas;
        $this->tinggi = $tinggi;
    }
    public function luas() {
        return 0.5 * $this->alas * $this->tinggi;
    }
    public function keliling() {
        $sisiMiring = sqrt(($this->alas * $this->alas) + ($this->tinggi * $this->tinggi));
        return $this->alas + $this->tinggi + $sisiMiring;
    }
}
class SegitigaKaki extends Segitiga {
    private $alas, $tinggi, $sisiKaki;
    public function __construct($alas, $tinggi, $sisiKaki) {
        $this->alas = $alas;
        $this->tinggi = $tinggi;
        $this->sisiKaki = $sisiKaki;
    }
    public function luas() {
        return 0.5 * $this->alas * $this->tinggi;
    }
    public function keliling() {
        return $this->alas + (2 * $this->sisiKaki);
    }
}
class SegitigaSisi extends Segitiga {
    private $sisi;
    public function __construct($sisi) {
        $this->sisi = $sisi;
    }
    public function luas() {
        return (sqrt(3) / 4) * ($this->sisi * $this->sisi);
    }
    public function keliling() {
        return 3 * $this->sisi;
    }
}
$siku = new SegitigaSiku(2, 3);
echo "Luas Segitiga Siku-Siku: " . $siku->luas() . "<br>";
echo "Keliling Segitiga Siku-Siku: " . $siku->keliling() . "<br>";

$samaKaki = new SegitigaKaki(7, 3, 6);
echo "Luas Segitiga Sama Kaki: " . $samaKaki->luas() . "<br>";
echo "Keliling Segitiga Sama Kaki: " . $samaKaki->keliling() . "<br>";

$samaSisi = new SegitigaSisi(9);
echo "Luas Segitiga Sama Sisi: " . $samaSisi->luas() . "<br>";
echo "Keliling Segitiga Sama Sisi: " . $samaSisi->keliling() . "<br>";
echo "aditya rahman tugas keterlambatan untuk absen<br>";