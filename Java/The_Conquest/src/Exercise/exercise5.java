package Exercise;

class counter{
    static int count=0;
    int instancevariable=0;

    counter(){
        count+=1;
        instancevariable+=1;
    }
    void function(){
        System.out.println ("count:" +count);
        System.out.println ("instancevariable:" +instancevariable);
    }


}

public class exercise5 {
    public static void main(String[] args) {

        counter c = new counter ();
        counter c1 = new counter ();
        counter c2 = new counter ();
        c.function();
        c1.function();
        c2.function();

//        count:3
//        instancevariable:1
//        count:3
//        instancevariable:1
//        count:3
//        instancevariable:1


        counter c3 = new counter ();
        c3.function();
        counter c4 = new counter ();
        c4.function();
        counter c5 = new counter ();
        c5.function();
//
//        count:1
//        instancevariable:1
//        count:2
//        instancevariable:1
//        count:3
//        instancevariable:1

    }
}
