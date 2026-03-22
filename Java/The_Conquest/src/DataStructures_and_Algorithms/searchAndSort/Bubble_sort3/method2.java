package DataStructures_and_Algorithms.Bubble_sort3;

public class method2 {
    public static void main(String[] args) {
    int[] arr= {21,1,-2,34,2};
    int size= arr.length;
        System.out.print ("Enter Array Elements:");
    for(int i=0;i<size;i++){
        System.out.print (arr[i] + " ");
    }
        System.out.println ();
    // bubble sort
        for(int i=0;i<size-1;i++){
            boolean swapped = false;
            for(int j=0 ; j<size-i-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1] = temp;
                    swapped =true;
                }
            }
            if(!swapped)
                break;
        }
        // print sorted Array
        System.out.print ("Sorted array:");
        for(int i=0 ;i<size;i++){
            System.out.print (arr[i] + " ");
        }
    }
}

//  The Output :
//        Enter Array Elements:21 1 -2 34 2
//        Sorted array:-2 1 2 21 34