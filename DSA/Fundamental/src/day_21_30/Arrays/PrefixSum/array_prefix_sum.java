package day_21_30.Arrays.PrefixSum;

public class array_prefix_sum {
    public static void main(String[] args) {
        // Array prefix sum
        int[] arr = {10,20,30,40,50};
        int[] prefix = new int[arr.length];
        prefix[0] = arr[0];
        for(int i=1;i<arr.length ;i++){
            prefix[i] = prefix[i-1] + arr[i];
        }
        for (int i=0 ;i<arr.length;i++){
            System.out.println (prefix[i] + "");
        }
    }
}


//arr[10,20,30,40,50]  --> prefix[10,30,60,100,150]
//
//⏰ Time Complexity
//
//Build prefix array → O(n)
//
//Range sum query → O(1)
//
//💾 Space Complexity
//
//Extra prefix array → O(n)