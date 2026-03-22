//public class pratice {
//    public static void main(String[] args) {
//        int[] arr = {10,20,30,40,50};
//        int left = 0;
//        int right = arr.length;
//        int target = 50;
//        while(left < right){
//            int sum = arr[left] + arr[right];
//            if(sum == target){
//                System.out.println ("Pair is found in the target");
//                return;
//            }
//            else if(sum < target){
//                left++;
//            }
//            else{
//                right--;
//            }
//        }
//        System.out.println ("Pair is not found");
//    }
//}

class practice {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40, 50};
        int left = 0;
        int right = arr.length - 1;   // FIX 1
        int target = 50;

        while (left < right) {

            int sum = arr[left] + arr[right];

            if (sum == target) {
                System.out.println("Pair found is found in the array: " + arr[left] + " + " + arr[right]);
                return;
            }
            else if (sum < target) {
                left++;
            }
            else {
                right--;   // FIX 2
            }
        }

        System.out.println("No pair found");
    }
}
