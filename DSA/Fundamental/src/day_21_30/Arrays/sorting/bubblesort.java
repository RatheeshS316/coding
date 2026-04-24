package day_21_30.Arrays.sorting;

public class bubblesort {
    public static void main(String[] args) {
        int arr[] = {3,1,322,22,11,222};
        int n = arr.length-1;
        for(int i=0 ; i<n ;i++){
            for(int j=0 ; j<n-1-i;j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.print ("Bubble sort : ");
        for(int i=0;i<=n ; i++){
            System.out.print (arr[i] + " ");
        }
    }
}
