import java.util.Arrays;

public class Running_sum_of_1D_array {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4};
        Solution obj = new Solution();
        int[] result = obj.runningSum ( nums );
        System.out.println ( Arrays.toString ( nums ) );
    }
}
class Solution {
    public int[] runningSum(int[] nums) {
        for(int i=1;i<nums.length;i++){
            nums[i] += nums[i-1];
        }
        return nums;
    }
}