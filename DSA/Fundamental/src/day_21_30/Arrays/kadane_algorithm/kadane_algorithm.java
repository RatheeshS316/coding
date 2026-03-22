package day_21_30.Arrays.kadane_algorithm;

public class kadane_algorithm {
    public static void main(String[] args) {
//        int[] arr={10,20,-2,22,-32,5,22,11,222,-1111};
//        int n= arr.length;
//        int currentValue =0 ;
//        int maxValue = Integer.MIN_VALUE;
//        for(int i=0;i<n;i++){
//            currentValue = currentValue + arr[i];
//            if(currentValue > maxValue){
//                maxValue = currentValue;
//            }
//            if(currentValue < 0){
//                currentValue = 0;
//            }
//        }
//        System.out.println (maxValue);




        //Find the maximum sum of a continuous subarray.
        int[] arr1 = {1, -2, 3, 4, -1};
        int curval=0;
        int maxval = 0;
        for(int i=0;i<arr1.length;i++){
            curval += arr1[i];
            if(curval > maxval){
                maxval = curval;
            }
            if(curval < 0){
                curval = 0;
            }
        }
        System.out.println (maxval);
    }
}
