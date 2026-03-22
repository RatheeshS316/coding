package The_Conquest.Array6;

public class OneDimensionArray {
    public static void main(String[] args) {

                //Arrays

                /*
                Syntax
                datatype[] arrayName = new dataType[size];
                 */

        int[] marks = new int[20];    // create an array to store 30 integers.
        marks[1] = 34;

        //Accessing Array Element
        System.out.println(marks[1]);           //34
//-------------------------------------------------------------------------------------------------------------------
        // int marks[10] = { 23,22,34,44,0,455,89,0,0,0};
                //(OR)
        int[] mark = new int[10];
        mark[0] = 23;
        mark[1] = 22;
        mark[2]= 34;
        mark[3]=44;
        mark[4]=55;
        mark[6]=455;
        mark[7]=89;

           // Traversing (looping Through) an Array
        for( int i=0;i <=mark.length;i++){
            System.out.println(mark[i]);
        }

               /* the output is
                                34
                                23
                                22
                                34
                                44
                                55
                                0
                                455
                                89
                                0
                                0

         */
//------------------------------------------------------------------------------------------------------------------------------

        //Modifying a Array Value
        int[] num = {0,1,2,3,4,5};
        num[2]=22;
        for (int i=0 ;i<num.length;i++){
            System.out.println(num[i]);
        }
// The output is
//               0
//               1
//              22
//              3
//              4
//              5
    }
}
