
package belajar.tes;
import java.util.Scanner;

public class persegi {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan panjang sisi persegi: ");
        int sisi = input.nextInt();

        int luas = sisi * sisi;
        int keliling = 4 * sisi;

        System.out.println();
        System.out.println("Luas persegi: " + luas);
        System.out.println("Keliling persegi: " + keliling);

        input.close();
    }
}