package DataStructures_and_Algorithms.Bubble_sort3;

import java.util.Scanner;

public class method1 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print ("Enter array Size:");
        int size = sc.nextInt();
        int[] arr= new int[size];
        System.out.println ("Enter "+size+" elements:" );
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }

        //Bubble sort
        for(int i = 0; i<size-1;i++){
                boolean swapped=false;
            for(int j=0;j<size-i-1;i++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped = true;
                }
            }
            if(swapped){
                break;
            }
        }
        System.out.print ("Sorted Array:");
        for(int num:arr){
            System.out.println (num + "");
        }
        sc.close();
    }
}
     /*
            Enter array Size:5
            Enter 5 elements:
                    32
                    1
                    23
                    21
                    11
            Sorted Array:1
                    32
                    23
                    21
                    11
*/