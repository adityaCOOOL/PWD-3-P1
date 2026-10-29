package belajar.tes;
public class Segitiga {
    public static void main(String[] args) {
        int alas = 8;
        int tinggi = 6;

        double miring = Math.sqrt(alas * alas + tinggi * tinggi);
        double keliling = alas + tinggi + miring;

        System.out.println("Alas = " + alas);
        System.out.println("Tinggi = " + tinggi);
        System.out.println("Sisi miring/ = " + miring);
        System.out.println("Keliling = " + keliling);
    }
}



