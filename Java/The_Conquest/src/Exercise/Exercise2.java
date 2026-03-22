package Exercise;
import java.util.Scanner;

public class Exercise2 {
    public static void main(String[] args) {


//        //Create an Integer Array , get input for 5numbers and print their total or sum
//        int[] number = new int[5];
//        Scanner array = new Scanner(System.in);
//        number[0] = array.nextInt ();
//        number[1] = array.nextInt ();
//        number[2] = array.nextInt ();
//        number[3] = array.nextInt ();
//        number[4] = array.nextInt ();
//         int total = number[0] + number[1] +number[2] + number[3] + number[4];
//        System.out.println ("total for 5 numbers:"+total);


//       // get input for 5numbers using array and for loop
//       int[] number2 = new int[3];
//       Scanner Array = new Scanner(System.in);
//       number2[0]=Array.nextInt();
//       number2[1]=Array.nextInt();
//       number2[2]=Array.nextInt();
//       for(int i = 0;i<3;i++){
//           System.out.println (number2[i]);
//       }
////  the output      12
////                  58
////                  89



//        //print 10 numbers from an array using for loop
//
//        int  No[] = {12,32,121,31,123,44,33,223,123,23};
//         for(int i=0 ; i<10;i++){
//             System.out.println (No[i]);
//         }
        /* the output is
                        12
                        32
                        121
                        31
                        123
                        44
                        33
                        223
                        123
                        23

         */

     // Nested Loop
// example:nested loops
        // Teacher1:asked you to write the name "john" 5times one the board
        // Teacher2:asked you to write the name "john" 5times one the board
//        for(int board = 1 ; board <=5 ;board++){
//            for(int teacher =1 ; teacher <=2 ;teacher++){
//                System.out.println ("john");
//            }
//        }
//
//
//for(int star = 1 ; star<=3; star++)
//{
//    for( int count = 1;count<=3;count++){
//        System.out.print ("*");
//    }
//    System.out.println ();
//}

// the output is
//               ***
//               ***
//               ***


        for(int star =1 ;star<=3;star++){
            for(int count = 1 ; count<=star ; count++){
                System.out.print ("*");
            }
            System.out.println ();
        }
// The output is
//                   *
//                   **
//                   ***




    }
}
