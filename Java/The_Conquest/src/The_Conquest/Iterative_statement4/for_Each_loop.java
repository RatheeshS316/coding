package The_Conquest.Iterative_statement4;

public class for_Each_loop {
    public static void main(String[] args) {
        int[] stud = { 12,2334,222,21};
        for(int i=0;i<stud.length;i++){
            System.out.println (stud[i]);
        }
// the output is
//        12
//        2334
//        222
//        21




//          (OR)

         // enhanced for loop
        for(int num:stud)
        {
            System.out.println (num );
        }
// the output
//        12
//        2334
//        222
//        21
    }
}
