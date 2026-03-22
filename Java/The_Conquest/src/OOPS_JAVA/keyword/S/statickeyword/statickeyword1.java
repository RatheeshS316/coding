package OOPS_JAVA.keyword.S.statickeyword;


class
tudent{

    static int marks=60;
    static String name="john";     // ---3

}
class statickeyword{

 //   int a =10;
    static int a =10;   //----1


   static {
        System.out.println ();     //---2
    }   // ellathukam munadi first idhu than print aagum

    public static void main(String[] args) {

  //      System.out.println (a);    we cant use this because a=10 it is not a static keyword
        System.out.println (a);  //10




        student s = new student ();
        s.marks=12;
        student s1 = new student();
        s1.marks = 22;

        // before using static
        System.out.println (s.marks);        //12
        System.out.println (s1.marks);      //22

        // after using static
        System.out.println (s.marks);        //22
        System.out.println (s1.marks);      //22



        student name1 = new student ();
        name1.name= "ratheesh";
        student name2 = new student ();
        name2.name="kaakkaa";

        System.out.println (name1.name);
        System.out.println (name2.name);

        // expected output ratheesh kaakkaa but output is kaakkaa kaakkaa
    }
}

// oru vaati value change pannitana adu ellathukamae serum.