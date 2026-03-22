package day_11_15;

public class array_basics {
    public static void main(String[] args) {

    // array is a collection of simaliar elements that is used in the sequence of code.

//        // 1D
        int[] arr = {12,223,3332,323,22,222,11};
        arr[3] = 22;
        System.out.println (arr[2]);
        System.out.println (arr.length);


        int[] array = new int[4];
        array[0] = 22;
        array[3] = 222;
        array[2] = 2311;

        for (int i=0 ; i<array.length ; i++){
            System.out.println (array[i]);
        }

        // OR

        for(int x : array){
            System.out.println (x);
        }

        // 2D
        int[][] array2 = {{22,34,444,221,11},{22,222,222,11,1}};
        System.out.println (array2[0][1]);

        for(int i =0 ; i<=array2.length-1 ; i++){
            for(int j=0 ; j<=array2[i].length;j++){
                System.out.println (array2[i][j]);
            }
        }

        for(int[] num : array2) {
            for (int row : num) {
                System.out.println ( row );
            }
        }
    }
}
