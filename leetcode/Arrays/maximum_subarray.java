public class maximum_subarray {
    public static void main(String[] args) {
        int[] nums = {12,33,22,1,32,9};
        Kadane kd = new Kadane ();
        int[] result = kd.kad(nums);
    }
}
class Kadane{
    public int[] kad(int[] nums){
        int currentSum = 0;
        int maxsum = nums[0];
        for(int i=0;i<nums.length;i++){
            currentSum += nums[i];
        }
        if(currentSum > maxsum){
            maxsum = currentSum;
        }
        if(currentSum < 0) {
            currentSum = 0;
        }
        return new int[]{maxsum};
    }
}
