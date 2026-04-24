package day_21_30.Arrays.Search;
class binary_search{
    public static int binarySea(int[] arr , int target){
        int left =0, right = arr.length-1;
        while(left <= right){
            int mid = left + (right -left)/2;
            if(arr[mid] == target){
                return mid;
            }
            else if (arr[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid -1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] numbers = {22,34,79,220,219,1029};
        int target = 219;
        int result = binarySea ( numbers , target);
        if(result != -1){
            System.out.println ("Element is found at the index:" + (result+1));
        }
        else{
            System.out.println ("Element is not found and it is -1");
        }
    }


}