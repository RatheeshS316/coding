public class sort_colors {
    public static void main(String[] args) {
        int[] nums = {11, 2, 1, 22, 42};
        SortColors sc = new SortColors ();
        int[] result = sc.main ( nums );
    }
}
    class SortColors{
    public int[] main(int[] nums ) {
        for(int i=0;i<nums.length;i++){
            for(int j=0;j<nums.length-1-i;j++){
                if(nums[j] > nums[j+1]){
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
            }
        }
        for (int i=0;i<nums.length;i++){
            System.out.print (nums[i] + " ");
        }
        return nums;
    }
}
