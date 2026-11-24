<?php

class Hewan {
    private $nama;
    private $umur;

    public function setNama($nama) {
        $this->nama = $nama;
    }

    public function getNama() {
        return $this->nama;
    }

    public function setUmur($umur) {
        $this->umur = $umur;
    }

    public function getUmur() {
        return $this->umur;
    }
}

class Kucing extends Hewan {
    public function getSuara() {
        return "Meong";
    }
}

class Anjing extends Hewan {
    public function getSuara() {
        return "Guk Guk";
    }
}
?>