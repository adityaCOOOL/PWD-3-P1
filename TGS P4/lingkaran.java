package belajar.tes;
import java.util.Scanner;
public class lingkaran {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double phi = 3.14;

        System.out.print("Masukkan jari-jari lingkaran: ");
        double jari = input.nextDouble();

        double luas = phi * jari * jari;
        double keliling = 2 * phi * jari;
        System.out.println();
        System.out.println("Luas lingkaran: " + luas);
        System.out.println("Keliling lingkaran: " + keliling);

        input.close();
    }
}