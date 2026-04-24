package day_21_30.Arrays.sorting;

public class insertionsort {
    public static void main(String[] args) {
       int[] arr = {22,1,21,12};
       int n = arr.length;
       for(int i=1;i<n;i++){
           int key = arr[i] , leftValue = i-1;
           while(leftValue >=0 && arr[leftValue] > key){
               arr[leftValue + 1] = arr[leftValue];
               leftValue--;
           }
           arr[leftValue + 1 ] = key;
       }
       for (int num : arr){
           System.out.println (num);
       }
    }
}
