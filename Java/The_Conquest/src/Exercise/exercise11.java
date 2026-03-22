package Exercise;

import java.util.Scanner;

class invalidageexception extends Exception{
    public invalidageexception(){

    }
}

class agevalidator{
    void checkage(int age){
        try{

            if(age>340 || age<150){
                throw new invalidageexception ();
            }
        }
        catch(Exception e){
            System.out.println (e);
        }
    }
}

public class exercise11 {
    public static void main(String[] args) {
        Scanner scan1 = new Scanner ( System.in );
        int age = scan1.nextInt();
        agevalidator av = new agevalidator ();
        av.checkage ( 34 );
    }
}
