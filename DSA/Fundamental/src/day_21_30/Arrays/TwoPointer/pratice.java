package day_21_30.Arrays.TwoPointer;
import java.util.Arrays;
public class pratice {
    public static void main(String[] args) {

        String name = "Ratheesh";
        // reverse a string
//        char[] arr = name.toCharArray ();
//        int left = 0;
//        int right = arr.length-1;
//        while(left < right ){
//            char temp = arr[left];
//            arr[left] = arr[right];
//            arr[right] =  temp;
//
//            left++;
//            right--;
//        }
//        String reverse = new String (arr);
//        System.out.println (reverse);


        // palindrome
//      int left =0;
//      int right = name.length ()-1;
//
//          if(name.charAt ( left ) == name.charAt ( right )){
//              System.out.println ("It is a palindrome");
//          }
//          else{
//              System.out.println ("It is not a palindrome");
//          }



        // pair sum
        int[] arr ={1,2,3,4,5,6};
            int target =8;
            int left = 0;
            int sum=0;
            int right = arr.length-1;
            while(left < right){
                sum = arr[left] + arr[right];
                if(sum == target){
                    System.out.println ("pair found: "+ arr[left] + "+" + arr[right]);
                    return;
                }
                else if(sum < target) {
                   left++;
                }
                else{
                    right--;
                }
        }
        System.out.println ("pair not found");



    }
}

