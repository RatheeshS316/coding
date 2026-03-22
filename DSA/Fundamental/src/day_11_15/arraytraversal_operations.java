package day_11_15;
import java.lang.reflect.Array;
import java.util.Arrays;

public class arraytraversal_operations {
    public static void main(String[] args) {

    //Accessing each element in an array one by one is called **array traversal**.
        int[] arr = {10,20,30,40,50};
        for(int i =0 ;i<arr.length;i++){
            System.out.println (arr[i]);
        }

    // array traversal - insertion
        int pos = 4;
        int values = 222;
        for (int j=arr.length - 1 ; j>pos ;j--){
            arr[j] = arr[j-1];
        }
        arr[pos]= values;
        System.out.println (Arrays.toString(arr));


    // array traversal - deletion
        int[] ex1 = {10, 20 , 30 , 40 ,50};
        int position1 = 3;
        for (int k = position1; k<ex1.length-1;k++){
            ex1[k] = ex1[k+1];
        }
        ex1[ ex1.length-1] =0;
        System.out.println ( Arrays.toString ( ex1 ) );


    // array traversal- searching
        int[] search = {22,24,26,28,30};
        int key = 26;
        for(int ser=0;ser<search.length;ser++){
            if(search[ser] == key){
                System.out.println ("element found at index:" + ser+1);
            }
        }
    }
}
