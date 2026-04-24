package day_21_30.Arrays.Search;

public class linear_search {
    public static int LinearSea(int[] arr , int target){
        for(int i=0;i<arr.length;i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5,6,7,8};
        int target = 7;
        int result = LinearSea(numbers,target);
        if(result != -1){
            System.out.println ("Element is found at the index : " + (result + 1));
        }
        else{
            System.out.println ("Element is Not found");
        }
    }
}
