import java.util.Scanner;
public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int num1,num2,sum;

        System.out.println("Enter the first integer");
        num1 = input.nextInt();

        System.out.println("Enter the second integer");
        num2 = input.nextInt();

        sum = num1 + num2;

        System.out.println(sum);
    }
}