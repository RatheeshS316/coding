package Exercise;

public class exercise3 {
    int evenOrodd(int num){
        if(num%2==0){
            System.out.println (num+ " is Even");
        }
        else{
            System.out.println (num+ " is Odd");
        }
        return num;
    }

    int passorfail(int marks){
        if(marks>60){
            System.out.println ("pass");
        }
        else{
            System.out.println ("fail");
        }
        return marks;
    }
    public static void main(String[] args) {


        exercise3 number = new exercise3 ();
        number.evenOrodd ( 89 );
        number.evenOrodd ( 80 );

        exercise3 student = new exercise3();
        student.passorfail ( 56 );
        student.passorfail ( 61 );

    }
}
