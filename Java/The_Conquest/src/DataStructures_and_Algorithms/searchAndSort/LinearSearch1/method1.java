package DataStructures_and_Algorithms.LinearSearch1;

import java.util.Scanner;

public class method1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = {10,20,30,40,50};
        System.out.print ("Array elements are :");
        for (int i=0;i<arr.length;i++){
            System.out.print (arr[i] + " ");
        }
        System.out.println ();
        System.out.print("Enter the Element to Search:");
        int target = sc.nextInt();
        int result = linearsearch(arr ,target);

        System.out.println ();
        if(result == -1 ){
            System.out.println ("Element not found at index");
        }
        else{
            System.out.println ("Element found at index:" +(result+1));
        }
    }
    static int linearsearch(int arr[] , int target){

        for(int i = 0; i< arr.length; i++){
            if( arr[i] == target){
                return i;
            }
        }
        return -1;
    }
}

// Array direct aah declare panradhu



//   The output :
//        Array elements are :10 20 30 40 50
//        Enter the Element to Search:20
//        Element found at index:2

