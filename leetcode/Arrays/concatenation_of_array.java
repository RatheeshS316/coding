import java.util.*;
class concatenation_of_array{
    public static void main(String[] args) {
        int[] nums = {1,2,3};
        Question obj = new Question ();
        int[] result = obj.concat(nums);
        System.out.println (Arrays.toString(result));
    }
}


 class Question {
    public int[] concat(int[] nums){
        int n=nums.length;
        int[] ans = new int[n*2];
        for(int i=0;i<n;i++){
            ans[i] = nums[i];
            ans[n+i] = nums[i];
        }
        return ans;
    }
}
