
/* oru example solra oru new hotel ku porom anga food rate theriyadhu adhuku namba waiter use panni rate kekurom
   idhula
      hotel=class
      object = server
      rate = value*/

package OOPS_JAVA.Classes_Objects.classes_object;

public class hotel {

    int meals = 100;
    int parotta = 15;
    int juice = 30;

    public static void main(String[] args) {

        hotel server1 = new hotel();                    // hotel la oru server call panrom.
        System.out.println (server1.meals);             // hotel server1 kitta meals rate kekurom adha avaru solraru

        hotel server2 = new hotel();                     // hotel la oru server call panrom.
        System.out.println (server2.juice);               // hotel server2 kitta juice rate kekurom adha avaru solraru

        hotel server3 = new hotel();                      // hotel la oru server call panrom.
        System.out.println (server3.parotta*3);            // hotel server3 kitta parotta rate kekurom adha avaru solraru
    }
}


