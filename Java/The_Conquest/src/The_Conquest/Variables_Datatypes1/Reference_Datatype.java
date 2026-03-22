package The_Conquest.Variables_Datatypes1;
import java.util.Date;
import java.awt.Point;
public class Reference_Datatype{
    public static void main(String[] args) {
        // primitive datatype
        int a = 10;
        int b= a ;
        a= 13;
        System.out.println(a);    //13
        System.out.println(b);    //10

        //Reference Datatype
        Date today = new Date();
        System.out.println(today);            //Sun Jul 06 16:26:52 IST 2025


        Point p1 = new Point(12,45);
        Point p2 = p1 ;
        System.out.println(p2);              //java.awt.Point[x=12,y=45]

        p1.x=34;
        System.out.println(p1);                  //java.awt.Point[x=34,y=45]
        System.out.println(p2);                  //java.awt.Point[x=34,y=45]


        // idhu tha difference between primitive datatype and reference datatype
        // references datatype just reference tha pannumae , onnu change panna fullah change aaidum
        // primitive value store pannudu , onnu change panna ,onnum mattum tha change aagum.
    }
}