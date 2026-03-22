package OOPS_JAVA.Classes_Objects.classes_object;

public class flour {
    String name = "";
    int price = 0;
    int calories = 0;
    int quantity =0;

    public static void main(String[] args) {

        flour food1 = new flour();
        food1.name="parotta";
        food1.price=15;
        food1.calories=270;
        food1.quantity=1;

        flour food2 = new flour();
        food2.name="chapatti";
        food2.price=20;
        food2.calories=80;
        food2.quantity=1;

        flour food3 = new flour();
        food3.name="poori";
        food3.price=25;
        food3.calories=200;
        food3.quantity=1;

        System.out.println (food1.name);
        System.out.println (food1.price);
        System.out.println (food1.calories);
        System.out.println (food1.quantity);

        System.out.println (food2.name);
        System.out.println (food2.price);
        System.out.println (food2.calories);
        System.out.println (food2.quantity);

        System.out.println (food3.name);
        System.out.println (food3.price);
        System.out.println (food3.calories);
        System.out.println (food3.quantity);


    }
}

//
//                    parotta
//                    15
//                    270
//                    1
//                    chapatti
//                    20
//                    80
//                    1
//                   poori
//                    25
//                    200
//                    1
