package day_21_30.Arrays.Traversal;

public class trial {
    public static void main(String[] args) {

                  // example sums

//              1. print all the elements
        int[] arr = {1,2,3,4,5};
        int n=arr.length;
        for(int num:arr){
            System.out.println (num);
        }



//            2.  count odd or even
        int odd=0,even=0;
          for(int num:arr){
             if(num % 2 == 0){
                 even++;
             }
             else{
                 odd++;
             }
          }
        System.out.println ("odd: " + odd);
        System.out.println ("even: " + even);



//      find the largest and smallest element in the array
        int maxValue = arr[0],minValue = arr[0];
        for(int num:arr){
            if(num > arr[0]){
                maxValue = num;
            }
            if(num < arr[0]){
                minValue = num;
            }
        }
        System.out.println ("maxValue: " + maxValue);
        System.out.println ("minValue: " + minValue);


// count the element which is greater than x
        float x =2.9f;
        int count = 0;
        for(int num:arr){
            if(num > x){
                count++;
            }
        }
        System.out.println ("count the element whic is greater than x is : " + count);

// checking the marks in the student list
    int[] marks={88,45,66,44,90};
    for(int i=0;i<marks.length;i++){
        System.out.println ("student " + (i+1) + " : " + marks[i]);
    }
    }
}
