package day_21_30.Arrays.PrefixSum;

public class trials {
    public static void main(String[] args) {


        //Build prefix Array
        int[] array = {2, 4, 6, 7, 99};
        int n = array.length;
        int[] prefixsum = new int[ n ];
        prefixsum[ 0 ] = array[ 0 ];
        for (int i = 1; i < n; i++) {
            prefixsum[ i ] += prefixsum[ i - 1 ] + array[ i ];
        }
        for (int i = 0; i < n; i++) {
            System.out.println ( prefixsum[ i ] );
        }


        //Range Sum Query (Using Prefix)
        int[] arr = {2, 3, 4, 66, 532, 1};
        int m = arr.length;
        int[] rangesum = new int[ m ];
        rangesum[ 0 ] = arr[ 0 ];

        for (int i = 1; i < m; i++) {
            rangesum[ i ] += rangesum[ i - 1 ] + arr[ i ];
        }
        int L = 1, R = 3;
        int sum = 0;
        if (L == 0) {
            sum = rangesum[ R ];
        } else {
            sum = rangesum[ R ] - rangesum[ L - 1 ];
        }
        System.out.println ( sum );


        //Multiple range queries
        int[] arr1 = {22, 24, 22, 11, 222};
        int[][] queries = {{0, 2}, {1, 3}, {2, 4}};
        for (int[] query : queries) {
            int left = query[ 0 ];
            int right = query[ 1 ];
            int result = rangesum ( left, right, arr1 );
            System.out.println ( result + " " + left + " " + right );
        }
    }
 public static int rangesum(int left, int right, int[] arr1) {
        int sum = 0;
        for (int i = left; i <= right; i++) {
            sum += arr1[ i ];
        }
        return sum;
    }
}
