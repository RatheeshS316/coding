package day_21_30.Arrays.SlidingWindow;

public class slidingwindow {
    public static void main(String[] args) {
        int[] idly = {4, 5, 3, 10, 22};
        int windowsize =0;
        int maxnum = 0;
        int k=3;
        for(int i = 0 ; i < k ;i++){
            windowsize = windowsize + idly[i];
        }
        maxnum = windowsize;
        for(int i = k ; i < idly.length ; i++ ){
            windowsize = windowsize - idly[i-k] + idly[i];
                if(maxnum < windowsize){
                    maxnum = windowsize;
                }
        }
        System.out.println (maxnum);

    }
}