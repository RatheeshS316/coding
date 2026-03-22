package day_21_30.Arrays.PrefixSum;

import java.util.Arrays;

public class pratice {
    public static void main(String[] args) {
        int[] arr = {2, 4, 6, 8, 10};

        // Range sum queries
//        int L=1;
//        int R=3;
//        int sum = 0;
//        for(int i=L;i<=R;i++){
//            sum += arr[i];
//        }
//        System.out.println (sum);

       //  Running Sum of Array
// int[] arr1 = {10,20,30,40};
// int[] prefixSum = new int[arr.length];
// prefixSum[0] = arr1[0];
//    for(int i=1 ; i<arr1.length;i++){
//         prefixSum[i] = prefixSum[i-1] + arr1[i];
//    }
//        System.out.println ( Arrays.toString (prefixSum));


    // Maximum Sum Subarray of Size K
      int[] array = {2,4,5,6,7,8};
      int k=3,n=array.length,windowsum=0 , maxsum=0;
      for(int i=0;i<k;i++){
         windowsum += array[i];
      }
      maxsum = windowsum;
      for(int i=k;i<n;i++){
          windowsum += array[i] - array[i-k];
          maxsum = Math.max ( maxsum , windowsum );
      }
        System.out.println (maxsum);

    }
}


// Template
//int n = arr.length;
//int[] prefix = new int[n];
//
//prefix[0] = arr[0];
//        for(int i = 1; i < n; i++){
//prefix[i] = prefix[i - 1] + arr[i];
//        }
