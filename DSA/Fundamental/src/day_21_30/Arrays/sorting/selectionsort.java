package day_21_30.Arrays.sorting;


public class selectionsort  {
    public static void main(String[] args) {
        int[] arr = {22,3,1,19,12};
        int n = arr.length;
        for(int i=0;i< n-1;i++){
            int minIndex = i;
            for(int j=i+1;j<n ; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        for(int i=0;i<n;i++){
            System.out.print (arr[i] + " ");
        }
    }
}
