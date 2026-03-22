package day_21_30.Arrays.TwoPointer;

public class trails {
    public static void main(String[] args) {
        // reverse the number
//        int[] arr={1,2,3,4,5,6};
//        int left=0;
//        int right = arr.length-1;
//        while(left < right){
//            int temp = arr[left];
//            arr[left] = arr[right];
//            arr[right] = temp;
//            left++;
//            right--;
//        }
//        for(int num : arr){
//            System.out.println (num);
//        }
//
//
//        //reverse the string
//        String name = "Ratheesh";
//        char[] array= name.toCharArray ();
//        int lefft = 0;
//        int rigght = array.length-1;
//        while(lefft < rigght){
//            int temmp = array[ lefft ];
//            array[lefft] = array[rigght];
//            array[rigght] = (char) temmp;
//            lefft++;
//            rigght--;
//        }
//        String reverse = new String(array);
//        System.out.println (reverse);
//
//
//        // palindrome
//        String occupation = "MaM";
//        char[] ar = occupation.toCharArray ();
//        int first =0, last = ar.length-1;
//        while(first < last){
//            if(ar[first] == ar[last]){
//                System.out.println (occupation + " is palindrome");
//            }
//            else{
//                System.out.println (occupation + "is not a palindrome");
//            }
//            first++;
//            last--;
//        }
//
//
//        // pair sum
//        int[] arrr = {10,30,40,20,50,60};
//        int target = 90, fir=0,las = arrr.length-1,sum=0;
//        while(fir < las){
//            sum = arrr[fir] + arrr[las];
//            if(sum == target){
//                System.out.println (arrr[fir]  + " + " + arrr[las] + " : Pair is Found ");
//                return;
//            } else if (sum < target) {
//                fir++;
//            }
//            else{
//                las--;
//            }
//        }


        // duplicates the numbers in the array
        int[] aray = {1,1,2,3,4,4,5,5};
        int j=0;
        for(int  i=1;i<aray.length;i++) {
            if (aray[ j ] != aray[ i ]) {
                j++;
                aray[ j ] = aray[ i ];
            }
        }
            for (int i=0;i<j;i++){
                System.out.println (aray[i]);

        }
    }
}
