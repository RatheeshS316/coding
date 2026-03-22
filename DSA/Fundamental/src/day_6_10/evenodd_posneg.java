package day_6_10;

public class evenodd_posneg {
    public static void main(String[] args) {
        // even/odd values
        int value1 = 33;
        if(value1 % 2 == 0){
            System.out.println ("it is an even value.");
        }
        else{
            System.out.println ("It is an odd value");
        }


        // find the positive and negative values
        int guessno = 0;
        if(guessno > 0){
            System.out.println ("value is +ves");
        }
        else if(guessno == 0){
            System.out.println ("value is zero");
        }
        else{
            System.out.println ("value is -ve");
        }
    }
}
