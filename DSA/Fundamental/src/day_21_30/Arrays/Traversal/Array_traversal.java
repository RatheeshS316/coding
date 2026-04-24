package day_21_30.Arrays.Traversal;

import java.util.Arrays;

public class Array_traversal {
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50,60};

        // print all elements
        for(int i =0 ;i<arr.length;i++){
            System.out.println (arr[i]);
        }


        // search the elements in the array
        int key = 30;
        for (int i =0 ; i<arr.length;i++){
            if(arr[i] == key){
                System.out.println (arr[i] + " is the key Element.");
            }
            else{
                System.out.println ("key element is not found");
            }
        }


        //Update values in the array
        arr[2] = 22;
        for(int i =0 ;i<arr.length;i++){
            System.out.println (arr[i]);
        }


        //Calculate sum / average
         int sum = 0;
        for (int i=0 ;i<arr.length;i++){
            sum += arr[i];
        }
        System.out.println (sum);

        int avg =0 ;
        for(int i=0;i<arr.length;i++){
            avg =sum/arr.length;
        }
        System.out.println (avg);



//Perform sorting
        //insertion sort
     int pos = 2;
     int values = 25;
     for(int i = arr.length-1 ; i>pos ;i--){
         arr[i] = arr[i-1];
     }
     arr[pos] = values;
        System.out.println ( Arrays.toString (arr));


      // deletion
      for(int i=pos ; i<arr.length-1;i++){
          arr[i] = arr[i+1];
      }
      arr[arr.length-1] = 0;
        System.out.println (Arrays.toString ( arr ));
    }
}
