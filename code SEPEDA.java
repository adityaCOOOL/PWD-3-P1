package belajar.tugasjava;
import java.util.Scanner;

public class Sepeda {
    private String merk;
    private int jarakTempuh;
    
    public Sepeda(String merk) {
        this.merk = merk;
        this.jarakTempuh = 0;
        System.out.println("-   Object " + this.merk + " dibuat, jarak tmpuh awal "
                + this.jarakTempuh + " km");
    }
    public void melaju() {
        this.jarakTempuh += 10;
        System.out.println("-   Bergerak Maju 10 Km");
        System.out.println("-   Object Sepeda " + this.merk + ", Jarak tempuh " 
                + this.jarakTempuh + " Km");
    }
    public void mundur() {
        this.jarakTempuh -= 5;
        System.out.println("-   Bergerak Mundur 5 Km");
        System.out.println("-   Object Sepeda " + this.merk + ", Jarak tempuh " 
                + this.jarakTempuh + " Km");
    }
    public void berhenti() {
        System.out.println("-   Sepeda Berhenti");
        System.out.println("-   Object Sepeda " + this.merk + ", Jarak tempuh akhir " 
                + this.jarakTempuh + " Km");
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Masukan Object Merk Sepeda: ");
        String merk = scanner.nextLine();

        Sepeda sepeda = new Sepeda(merk);

        int pilihan = -1;

        while (pilihan != 0) {
            System.out.println("\nMenu:");
            System.out.println("Bergerak Maju (1)");
            System.out.println("Bergerak Mundur (2)");
            System.out.println("Berhenti (3)");
            System.out.println("Exit (0)");
            System.out.print("Pilihan : ");
            
            pilihan = scanner.nextInt();

            switch (pilihan) {
                case 1:
                    sepeda.melaju();
                    break;
                case 2:
                    sepeda.mundur();
                    break;
                case 3:
                    sepeda.berhenti();
                    break;
                case 0:
                    System.out.println("-   Keluar Program ..");
                    System.out.println("-   Terimakasih sudah menggunakan program ini.");
                    break;
                default:
                    System.out.println("Pilihan tidak valid!");
                    break;
            }
        }

        scanner.close();
    }
}