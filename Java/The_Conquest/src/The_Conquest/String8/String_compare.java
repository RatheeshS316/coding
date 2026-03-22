package The_Conquest.String8;

public class String_compare {
    public static void main(String[] args) {
        String a= "Ratheesh";
        String b = "Ratheesh";
        System.out.println (a==b);       // true

        String f1 = new String("Ratheesh");
        String f2 = new String("Ratheesh");
        System.out.println (f1 == f2);   // false

        System.out.println (a == f1);  // false

        String c = b;
        System.out.println (c == a);   // true

        String f3 = f2;
        System.out.println (f3 == f1);   // false

    }
}


/*
       1) String a= "Ratheesh";
        String b = "Ratheesh";
        System.out.println (a==b);

       reason: idhu value check pannadhu idhu reference address sollum
       a--------------"Ratheesh"  (10008)<--reference address
       b----------------|
       a and b same reference address ku pogum
       a,b ---> 10008 reference    (10008 == 10008) true




        2)String f1 = new String("Ratheesh");
        String f2 = new String("Ratheesh");
        System.out.println (f1 == f2);   // false
       reason: idhu value check pannadhu idhu reference address sollum
       idhu new aah create aagum.
       f1----------------"Ratheesh"(1001)
       f2----------------"Ratheesh"(1008)

       a(1001)
       b(1008)
       (1001 == 1008) false


       3)   System.out.println (a == f1);  // false
       (10008 == 1001)  // different reference address



        4)String c = b;
        System.out.println (c == a);   // true
        (10008 == 10008)  // same references address.


        5)String f3 = f2;
        System.out.println (f3 == f1);   // false
        (1012 == 1001)  different reference address.
 */