package day_21_30.Arrays.sorting;

public class insertionsort {
    public static void main(String[] args) {
        int[] arr = {10,2,22,112,21};
        int n = arr.length-1;
        for(int i=1;i<n;i++){
            int key = arr[i];
            int j=i-1;
            while(j>=0 && arr[j] > key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
    }
}
