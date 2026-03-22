package day_21_30.Arrays.Traversal;

import java.util.Arrays;

public class praticeSums {
    public static void main(String[] args) {

        int[] arr = {20,30,10,22,3};

//       //print all element
        for(int i=0;i<arr.length;i++){
            System.out.println (arr[i]);
        }


        //count odd or even
        int oddcount=0;
        int evencount=0;
        for(int i=0;i<arr.length;i++){
            if(i%2==0){
                System.out.println ( " even");
                evencount++;
            }
            else{
                System.out.println ( " odd");
                oddcount++;
            }
        }
        System.out.println ("Odd number count is " + oddcount + " and the even number count is " + evencount);


        // find the largest element in the array
        int maxnum = 0;
        for (int i=0;i< arr.length;i++){
            if(arr[i] > maxnum ){
                maxnum = arr[i];
            }
        }
        System.out.println ("largest number in the array:" + maxnum);


        // find the minimum element in the array
        int minnum = arr[0];
        for(int i=0 ;i<arr.length ;i++){
            if(arr[i] < minnum){
                minnum = arr[i];
            }
        }
        System.out.println ("Smallest number:" + minnum);



        //sum of all elements in the array
        int sum =0;
        for(int i=0;i<arr.length ;i++){
            sum += arr[i];
        }
        System.out.println ("Sum of the array element : "+ sum);


        // count the elements which is greater than x
        int x= 19;
        int count=0;
        for(int i=0;i< arr.length;i++){
            if(arr[i] > x){
                count++;
            }
        }
        System.out.println (count);


        // reverse the array in the element
        int left =0;
        int right = arr.length-1;
        while(left<right) {
            int temp = arr[ left ];
            arr[ left ] = arr[ right ];
            arr[ right ] = temp;

            left++;
            right--;
        }
        System.out.println ( Arrays.toString (arr));
//


        // Imagine you are checking marks of students in a list.

      int[]  Marks = {78, 90, 65, 88, 92};
      int n= Marks.length;
      int j=0;
      for(int i=0;i<n;i++){
          System.out.println ("Students " + (i+1)  + "  : " + Marks[i]);
      }
    }
}
