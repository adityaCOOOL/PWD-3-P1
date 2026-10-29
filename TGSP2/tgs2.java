package belajar.tes;

import java.util.Scanner;

public class tgs2 {

    public static void main(String[] args) {
        // 1. Menghitung luas persegi panjang
        try (Scanner scan = new Scanner(System.in)) {
            // 1. Menghitung luas persegi panjang
            System.out.println("1. Luas persegi panjang");
            
            int p = 2;
            int l = 5;
            int hasilLuas = p * l;
            
            System.out.println("Luas : " + hasilLuas);
            
            // 2. Menghitung luas dan keliling lingkaran
            System.out.println();
            System.out.println("2. Luas dan keliling lingkaran");
            
            float phi = 3.14f;
            
            System.out.print("Masukkan jari-jari : ");
            float r = scan.nextFloat();
            
            float area = phi * r * r;
            float kel = 2 * phi * r;
            
            System.out.println("Luas lingkaran : " + area);
            System.out.println("Keliling lingkaran : " + kel);
            
            // 3. Menghitung total detik
            System.out.println();
            System.out.println("3. Total detik");
            
            System.out.print("Masukkan jam : ");
            int h = scan.nextInt();
            
            System.out.print("Masukkan menit : ");
            int m = scan.nextInt();
            
            System.out.print("Masukkan detik : ");
            int d = scan.nextInt();
            
            int total = (h * 3600) + (m * 60) + d;
            
            System.out.println("Total detik : " + total);
        }
    }
}