package The_Conquest.User_Input7;                                      // Namba value input answer vanguradhu.

import java.lang.System;
import java.util.Scanner;

class User_Input{
    public static void main(String[] args) {
    Scanner Sum = new Scanner(System.in);    //System.in mukkiyam en na idhu input namba type panrdhuku help pannudu
    int A = Sum.nextInt();
        System.out.println (A);          // input value 12 koodutha answer 12 varum . number na nextInt() nu podanum .

    Scanner Details = new Scanner(System.in);    //System.in mukkiyam en na idhu input namba type panrdhuku help pannudu
    String name = Details.nextLine ();
        System.out.println (name);      // input value Ratheesh nu koodutha answer Ratheesh varum . string na nextLine() nu podanum .



    // nambalae input value kooduthu addition of two numbers print panrom
        Scanner Addition = new Scanner(System.in);    //System.in mukkiyam en na idhu input namba type panrdhuku help pannudu
        int a = Addition.nextInt();
        int b = Addition.nextInt();
        int c = a + b;
        System.out.println (c);

        /*
        The Output is
                432
                12
                444
        */


    }
}