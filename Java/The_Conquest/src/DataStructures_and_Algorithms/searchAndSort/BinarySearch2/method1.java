
//   The output is:
//                Enter Array Elements:100
//                        20
//                        230
//                        0
//                        150
//
//                Enter elements to search:230
//                Elements found in the position:3



package DataStructures_and_Algorithms.BinarySearch2;

import java.util.Scanner;

public class method1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print ("Enter Array Elements:");
        int[] arr = {100,20,230,0,150};
        for(int i=0;i<arr.length;i++){
            System.out.println (arr[i] + " ");
        }
        System.out.println ();
        System.out.print ("Enter elements to search:");
        int target = sc.nextInt();
        int result = binarySearch( arr , target );
        if( result == -1){
            System.out.println ("Elements not found");
        }
        else{
            System.out.println ("Elements found in the position:" +(result+1));
        }
    }
    static int binarySearch(int[] arr, int target){
        int low=0;
        int mid;
        int high=arr.length-1;
        while(low<=high){
            mid=(low +high)/2;
            if(arr[mid]==target){
                return mid;
            }
            else if(arr[mid] < target){
                low = mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return-1;
    }
}
