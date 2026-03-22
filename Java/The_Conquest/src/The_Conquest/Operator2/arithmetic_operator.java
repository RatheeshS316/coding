package The_Conquest.Operator2;

    public class arithmetic_operator {
        public static void main(String[] args) {
            int a=111,b=23;


        // arithmetic operator
        int c = a + b;
        int d = a - b;
        int e = a * b;
        int f = a % b ;
        int g = a / b ;         // these are arithmetic operator ,it is a mathemeatical operator like addition,subtraction ,multiplication , division ,modulus etccc

        System.out.println(c);          // 134
        System.out.println(d);          // 88
        System.out.println(e);          // 2553
        System.out.println(f);          // 19
        System.out.println(g);          // 4

        /* sila time value la decimal la varanum aana integer la iruku adu en na because variable int la iruku
        suppose variable float irundha apa decimal la varum

        float a = 5 ;
        float b = 2;
        float c = a/b;
        System.out.println(c);    // 2.5

        (or)

        int a = 5 ;
        int b = 2;
        float c = (float)a/(float)b;
        System.out.println(c);    // 2.5

        */


            // unary operator

     int a1 = 5;
     a1++;
     System.out.println(a1);            // 6
     a1--;
     System.out.println(a1);            // 5

           // post increment
    int a2 = 5;
    System.out.println(a2++);          // 5
    System.out.println(a2);            // 6
// ellarum think pannuviga double time 6 varum nu but why 5 vanduchi na it is post increment ,a2 print aanadhu kuaprm plus aagum aduku aprm print panna na plus aana value value varum

            //pre increment
      int a3 = 5 ;
      System.out.println(++a3);          // 6
      System.out.println(a3);            // 6
// why inga double 6 vandhuchi na because it is preincrement add pannadhukuaprm tha print aagum


         // post decrement
       int a4 = 5;
       System.out.println(a4--);          //5
       System.out.println(a4);            //4
// why 5 4 nu vandhuchi na because it is post decrement value print aanadhu kuaprm tha decrement aagum


         // pre decrement
       int a5 = 5;
       System.out.println(--a5);    //4
       System.out.println(a5);      //4

            //why both are 4 because idhu value munadiyae decrement pannitu aprm tha print panraga










    }
}
