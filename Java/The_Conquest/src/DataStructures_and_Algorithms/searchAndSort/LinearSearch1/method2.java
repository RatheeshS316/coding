package DataStructures_and_Algorithms.LinearSearch1;
import java.util.Scanner;

public class method2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println ("Enter Array size:");
        int size = sc.nextInt();
        int[] arr =  new int[size];
        System.out.println ("Enter Array Elements:");
        for(int i=0;i<size;i++){
            arr[i]=sc.nextInt();
        }
        System.out.print ("Enter elements to search:");
        int target = sc.nextInt();
        int result = linearSearch(arr,target);
        if(result == -1){
            System.out.println ("Element not found");
        }
        else{
            System.out.println ("Element not found at index:" +(result+1));
        }
    }
    static int linearSearch(int[] arr , int target){
        for(int i=0 ; i<arr.length; i++){
        if(arr[i] == target) {
            return i;
        }
    }
    return -1;
}
}

// array value namba input kooduthu output koodukura method

//    The Output :
//                Enter Array size:4
//                Enter Array Elements:
//                                        12
//                                        1
//                                        33
//                                        2
//                Enter elements to search:33
//                Element not found at index:3
