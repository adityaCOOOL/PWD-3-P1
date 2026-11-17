
function bulatkan(nilai) {
  return Number(nilai.toFixed(2));
}


function hitungSegitiga(s) {
  const hasilLuas = (Math.sqrt(3) * s * s) / 4;
  const hasilKeliling = s * 3;

  console.group("SEGITIGA");
  console.log("Sisi               :", s);
  console.log("Luas               :", bulatkan(hasilLuas));
  console.log("Keliling           :", bulatkan(hasilKeliling));
  console.groupEnd();

  return {
    Bangun: "Segitiga",
    Luas: bulatkan(hasilLuas),
    Keliling: bulatkan(hasilKeliling),
    Volume: "-"
  };
}


function hitungPersegi(p, l) {
  const hasilLuas = p * l;
  const hasilKeliling = (p + l) * 2;

  console.group("PERSEGI PANJANG");
  console.log("Panjang            :", p);
  console.log("Lebar              :", l);
  console.log("Luas               :", bulatkan(hasilLuas));
  console.log("Keliling           :", bulatkan(hasilKeliling));
  console.groupEnd();

  return {
    Bangun: "Persegi Panjang",
    Luas: bulatkan(hasilLuas),
    Keliling: bulatkan(hasilKeliling),
    Volume: "-"
  };
}


function hitungPrisma(sisiA, sisiB, sisiC, t) {
  const kelilingAlas = sisiA + sisiB + sisiC;
  const setengahK = kelilingAlas / 2;

  const alas = Math.sqrt(
    setengahK *
    (setengahK - sisiA) *
    (setengahK - sisiB) *
    (setengahK - sisiC)
  );

  const permukaan = (2 * alas) + (kelilingAlas * t);
  const isi = alas * t;
  const panjangRusuk = (2 * kelilingAlas) + (3 * t);

  console.group("PRISMA");
  console.log("Rusuk alas (a,b,c) :", sisiA, sisiB, sisiC);
  console.log("Tinggi prisma      :", t);
  console.log("Luas alas          :", bulatkan(alas));
  console.log("Luas permukaan     :", bulatkan(permukaan));
  console.log("Volume             :", bulatkan(isi));
  console.log("Total panjang rusuk:", bulatkan(panjangRusuk));
  console.groupEnd();

  return {
    Bangun: "Prisma Segitiga",
    Luas: bulatkan(permukaan),
    Keliling: bulatkan(panjangRusuk),
    Volume: bulatkan(isi)
  };
}


function hitungLimas(s, t) {
  const alas = s * s;
  const tinggiSisi = Math.sqrt((t * t) + ((s / 2) ** 2));
  const selimut = 4 * (s * tinggiSisi / 2);
  const permukaan = alas + selimut;
  const isi = (alas * t) / 3;

  const rusukSamping = Math.sqrt(
    (t * t) + ((s * Math.SQRT2 / 2) ** 2)
  );

  const totalRusuk = (4 * s) + (4 * rusukSamping);

  console.group("LIMAS");
  console.log("Sisi alas          :", s);
  console.log("Tinggi limas       :", t);
  console.log("Luas alas          :", bulatkan(alas));
  console.log("Tinggi sisi tegak  :", bulatkan(tinggiSisi));
  console.log("Luas permukaan     :", bulatkan(permukaan));
  console.log("Volume             :", bulatkan(isi));
  console.log("Total panjang rusuk:", bulatkan(totalRusuk));
  console.groupEnd();

  return {
    Bangun: "Limas Persegi",
    Luas: bulatkan(permukaan),
    Keliling: bulatkan(totalRusuk),
    Volume: bulatkan(isi)
  };
}

function hitungSegitigaBebas(a, b, c) {
  const keliling = a + b + c;
  const setengah = keliling / 2;

  const luas = Math.sqrt(
    setengah * (setengah - a) *
    (setengah - b) * (setengah - c)
  );

  console.group("SEGITIGA SEMBARANG");
  console.log("Sisi a             :", a);
  console.log("Sisi b             :", b);
  console.log("Sisi c             :", c);
  console.log("Luas               :", bulatkan(luas));
  console.log("Keliling           :", bulatkan(keliling));
  console.groupEnd();

  return {
    Bangun: "Segitiga Sembarang",
    Luas: bulatkan(luas),
    Keliling: bulatkan(keliling),
    Volume: "-"
  };
}


function mulaiKalkulator() {
  console.clear();
  console.log("KALKULATOR BANGUN DATAR & BANGUN RUANG");

  const daftarHasil = [
    hitungSegitiga(18),
    hitungPersegi(7, 6),
    hitungPrisma(6, 6, 8, 7),
    hitungLimas(7, 9),
    hitungSegitigaBebas(10, 10, 5)
  ];

  console.table(daftarHasil);
}

mulaiKalkulator();
