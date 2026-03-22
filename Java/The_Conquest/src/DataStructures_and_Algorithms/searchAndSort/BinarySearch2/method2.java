package DataStructures_and_Algorithms.BinarySearch2;

import java.util.Scanner;

public class method2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner ( System.in );
        System.out.print ( "Enter Array Size:" );
        int size = sc.nextInt ();

        System.out.print ( "Enter the array Elements:" );
        int[] arr = new int[ size ];
        for (int i = 0; i < size; i++) {
           arr[i] = sc.nextInt ();
       }
        System.out.println ();
        System.out.print ( "Enter elements to search:" );
        int target = sc.nextInt ();
        int result = binarySearch ( arr, target );
        if (result == -1) {
            System.out.println ( "Elements not found" );
        } else {
            System.out.println ( "Elements found in the position:" + (result + 1) );
        }
    }

    static int binarySearch(int[] arr, int target) {
        int low = 0, mid, high = arr.length - 1;
        while (low <= high) {
            mid = (high + low) / 2;
            if (arr[ mid ] == target) {
                return mid;
            } else if (arr[ mid ] < target) {
                low = mid + 1;

            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
}

