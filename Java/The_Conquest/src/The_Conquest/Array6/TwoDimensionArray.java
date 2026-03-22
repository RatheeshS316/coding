package The_Conquest.Array6;

public class TwoDimensionArray {
    public static void main(String[] args) {

                // 2D Arrays.

        /*Syntax
            datatype[][] arrayName = new datatype[rows][columns];
             */

//        int[][] matrix = new int[ 3 ][ 2 ];
//        matrix[ 0 ][ 1 ] = 23;
//
//        System.out.println ( matrix[ 0 ][ 1 ] );            // 23
//
//        // three rows    two columns
//          //0               // 0   1
//          //1
//          //2
//   //-----------------------------------------------------------------------------------------------------------------------------
//      //   int[][] matrix1 = int { {2,11} , {121 , 211} , {131 , 2311}
//
//
//       int[][] matrix1 =new int[3][2];
//        matrix1[ 0 ][ 0 ] = 2;
//        matrix1[ 0 ][ 1 ] = 11;
//
//        matrix1[ 1 ][ 0 ] = 121;
//        matrix1[ 1 ][ 1 ] = 211;
//
//        matrix1[ 2 ][ 0 ] = 131;
//        matrix1[ 2 ][ 1 ] = 2311;
//
//
//            for(int i=0;i<=matrix1.length;i++){
//                for(int j=0; j < matrix1[i].length ; j++){
//                    System.out.println (matrix1[i][j] + "");
//                }
//            }
// /* The output is
//                    23
//                    2
//                    11
//                    121
//                    211
//                    131
//                    2311   */
//
//
//            // Modifying a 2D Array value.
        int[][]  no = new int[3][3];
        no[3][3] = 233;
        System.out.println (no[3][3]);

    }
}
