package OOPS_JAVA.Functions;

import java.sql.SQLOutput;

public class return_keyword {
    int catering1(int total) {
        int naresh = 30;
        int remaining = total - naresh;
        return remaining;        // inga return panra value integer nala code4 la namba int nu podurom
    }

    String name() {
        return "Ratheesh";
    }


    String details(String name) {
        return name;
    }

    public static void main(String[] args) {

        return_keyword ret = new return_keyword ();
        int catering_money = ret.catering1 ( 500 );
        System.out.println ( catering_money );

        return_keyword rett = new return_keyword ();
        System.out.println ( rett.name () );

        return_keyword rettt = new return_keyword ();
        System.out.println ( rettt.details ( "Ratheesh" ) );

    }
}
// The output
//        470
//        Ratheesh
//        Ratheesh
