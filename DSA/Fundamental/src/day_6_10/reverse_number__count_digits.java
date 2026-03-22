package day_6_10;

public class reverse_number__count_digits {
    public static void main(String[] args) {
      // reverse the given number
        int number = 123;
        int reverse = 0;

        while(number!= 0){
           int  digits = number % 10;
           reverse = reverse *  10 + digits;
           number = number / 10;
        }
        System.out.println ("Reverse number:"+reverse);

        // count the numbers
        int num = 123457;
        int count = 0;
        while(num != 0){
            num = num/10;
            count ++;
        }
        System.out.println ("count is : " + count);
    }
}
