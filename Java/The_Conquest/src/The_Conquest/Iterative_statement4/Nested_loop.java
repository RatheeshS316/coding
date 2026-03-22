package The_Conquest.Iterative_statement4;

public class Nested_loop {
    public static void main(String[] args) {

        // nested for-loop
        for(int i = 1;i<=3;i++){
            for(int j= 1;j<=5;j++){
                System.out.println("* ");
            }
            System.out.println();
        }
            /* the output is
                            *
                            *
                            *
                            *
                            *

                            *
                            *
                            *
                            *
                            *

                            *
                            *
                            *
                            *
                            *
                                  */



                        // nested while-loop
                        int k=1;
                        while(k<=3){
                            int r = 1;
                            while(r<=4)
                            {
                                System.out.println("# ");
                                r++;
                            }
                            System.out.println();
                            k++;
                        }
                        /* the output is
                                        #
                                        #
                                        #
                                        #

                                        #
                                        #
                                        #
                                        #

                                        #
                                        #
                                        #
                                        #
                                    */

        for(int i=0 ;i<=2;i++){
            for(int count =1; count<=2;count++){
                System.out.println ("Ratheesh is printed");

// The output :
//                Ratheesh is printed
//                Ratheesh is printed
//                Ratheesh is printed
//                Ratheesh is printed
//                Ratheesh is printed
//                Ratheesh is printed
            }
        }
    }
}
