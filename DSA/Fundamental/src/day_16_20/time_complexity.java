package day_16_20;

public class time_complexity {
    public static void main(String[] args) {

        int[] array ={0,20,30,40};

        // Common time complexities

//            1.  Constant Time - O(1)
        int[] arr = {0,1,2};
        System.out.println (arr[2]);
//👉 1 element access
//👉 n = 1 or 1,00,000 → time same
//   Input size evlo perusa irundhaalum, same time dhaan



//          2️⃣.  O(n) – Linear Time 🟡
        for(int i=0;i<=array.length-1;i++){
            System.out.println (array[i]);
        }
        //Input size increase aagumbodhu
        //time direct-aa increase aagum
        //👉 10 elements → 10 steps
        //👉 100 elements → 100 steps


    //     3️⃣ O(n²) – Quadratic Time 🔴 (SLOW)
        int[][] twoArr = {{10,20,30},{40,50,60}};
        for(int one = 0 ; one<twoArr.length;one++){
            for(int two = 0 ; two <twoArr[one].length ;two++){
                System.out.println (twoArr[one][two]);
            }
        }
    //        Loop-kulla loop
    //            👉 n = 10 → 100 operations
    //            👉 n = 100 → 10,000 operations 😵
    //      📌 Real life: Everyone shake hands with everyone 🤝



     //       4️.O(log n) – Logarithmic Time 🟢🔥 (VERY FAST)
    //        Example:Binary Search
    //        Input half half-aa reduce pannum
    //        100 → 50 → 25 → 12 → 6 → 3 → 1
    //    📌 Real life:Dictionary-la word thedradhu 📖


    //        5️⃣ O(n log n) 🟡🔥
    //        Sorting algorithms
    //        Merge Sort, Quick Sort
    //        📌 Example:sorted(arr)
    }
}
