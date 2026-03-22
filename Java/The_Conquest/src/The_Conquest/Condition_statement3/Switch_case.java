package The_Conquest.Condition_statement3;

public class Switch_case {
    public static void main(String[] args) {
       char attendance = 'A';
       switch(attendance){
           case 'A':
               System.out.println("Today , he is absent");
               break;

           case 'P':
               System.out.println("Today , he is present");
               break;

           case 'O':
               System.out.println("Today , he take On-duty");
               break;

           default:
               System.out.println("I dont know ");     // break; use pannalana condition nukum keela ulladula serthu print aagum
       }


       // switch case using ternary operator
        int attendancee = 'O';
        String percentage = (attendancee == 'P')?"Today,he is present":
                            (attendancee == 'A')?"Today,he is absent":
                            (attendancee == 'O')?"Today,he take On-Duty":" I Dont know";
        System.out.println(percentage);
        }
    }




