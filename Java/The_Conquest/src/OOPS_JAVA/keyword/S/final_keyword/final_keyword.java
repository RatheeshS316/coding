package OOPS_JAVA.keyword.S.final_keyword;
// final keyword , javascript la vara const mari oru declare pantingana change panna mudiyadhu.
public class final_keyword {

    class father{
        final int age = 55;
        final void func(){
            System.out.println ("Function");
        }
//       int  age = 23;    // it throws a error
    }


    class son {
        int age = 22;
        void func(){
            System.out.println ("Function");     // it throws a error
        }
    }
    public static void main(String[] args) {
        final_keyword fk = new final_keyword ();
        son s = fk.new son();
        s.func();


    }
}
