package The_Conquest.Condition_statement3;


        // if statements
public class statement {
    public static void main(String[] args) {
        int mark = 65;

        if(mark>=60){
            System.out.println("congrats! you are pass.");
        }                                         // mark is greater than or equal to 60 the output is "congrats! you are pass" . otherwise the output has not printed.



        // if-else statements
        int year = 2004;

        if(year%4==0){
            System.out.println("its a leap year");
        }
        else{
            System.out.println("not a leap year");
        }


     //   else-if statement
         int marks = 88;
        if(mark>90){
            System.out.println("grade A");
        }
        else if (marks>80)
        {
            System.out.println("grade B");
        }
        else if(marks>60){
            System.out.println("grade C");
        }
        else{
            System.out.println("fail");
        }


        // nested-if statements

        int yearr = 2032;
        if(year % 2 == 0){
            if(year % 4 == 0){
                System.out.println("Its a leap year");
            }
        }




        // ternary operator use  if / if else / else if
        int years = 2036;
        String newyear = (years%4==0)?"Newyear":"not a New year";
        System.out.println(newyear);

        // syntax for ternary operator

      //  (condition)?"ifstatement":"elsestatement";   if else


      //  (conditon)?"ifstatement":(condition)?"elseifstatement":"elsestatement";
        int markss = 90;
        String grade =(marks>90)?"1st grade":(marks>80)?"2nd grade":(marks>60)?"3rd grade":"fail";
        System.out.println(grade);









    }
}
