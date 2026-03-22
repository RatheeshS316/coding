package p1;

public class TwoSum {
    public static void main(String[] args) {
        int[] arr={10,20,30,40,50};
        int target = 70;
        int left = 0 ;
        int right = arr.length-1;
        int sum = arr[left] + arr[right];
        while(left < right ){
            if(sum == target){
                System.out.println ("Pair is found in the array:" + arr[left] + " + " + arr[right]);
                System.out.println ("True");
                return;
            }
            else if(sum < target){
                left++;
            }
            else{
                right--;
            }
        }
        System.out.println ("pair is not found in the array !=" + target);
    }
}



//Time complexity : O(n)
//Space complexity : O(1)