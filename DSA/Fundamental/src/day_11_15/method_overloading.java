package day_11_15;

public class method_overloading {

    // method overloading
   static int add(){
        System.out.println ("added");
       return 0;
   }
   static int add(int a ,int  b){
       System.out.println ("a and b are added");
        return 0;
   }
    static int add(int a ,int  b , int c ){
        System.out.println ("a , b , and c are added");
        return 0;
    }

    public static void main(String[] args) {

       // method overloading
        add();
        add(11,32);
        add(244,44,22);
    }
}
