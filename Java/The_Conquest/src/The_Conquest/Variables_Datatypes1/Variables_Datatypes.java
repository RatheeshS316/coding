package The_Conquest.Variables_Datatypes1;


public class Variables_Datatypes {
    public static void main(String[] args) {
        // int:datatype   age:identifier/variable   18:value

        // int datatype
                    int age = 18;              // Range [ -2B , 2B ]   idhu four bytes allocate pannum
                    System.out.println(age);     //18
                    System.out.println("age");   //age , because string mattum than namba double quotes la poduvom

                    // suppose the property value is more than 2billion or less than -2billion the output will come error
                    //byte property = 90000001233;         it will show error
                    //System.out.println(property);  // error will show because idhu range ku mela iruku




        //byte datatype
                        byte age1 = 12;             //Range [-128,127] idhu one bytes allocate pannum
                        System.out.println(age1);   //12

                      // suppose the age1 value is more than 127 or less than -128 the output will come error
                      //byte age2 = 1233;         it will show error
                      //System.out.println(age2);  // error will show because idhu range ku mela iruku


        // short datatype
                        short salary = 19000;    // Range [ -32k, 32k]  idhu two bytes store pannum
                        System.out.println(salary);  // 19000

                // suppose the age1 value is more than 32000 or less than -32000 the output will come error
                //byte salary1 = 91233;         it will show error
                //System.out.println(salary1);  // error will show because idhu range ku mela iruku


        //long datatype
                        long car = 9000000000000000000l;    //Range [-9quadrillion ,  9quadrillion ] idhu 8 bytes store pannum
                                    // idhula declare panum podhu 'l' mention pannanum illana error varum
                        System.out.println(car);       //9000000000000000000

                        // suppose the car value is more than 9qd or less than -9qd the output will come error
                        //byte car = 90000000000000000000l;         it will show error
                        //System.out.println(car);  // error will show because idhu range ku mela iruku


        // float datatype
                        float mark = 98.3f; //   idhu four bytes store pannum
                        // idhula declare pannum podhu 'f' podanum da illana error varum
                        System.out.println(mark);     //9 8.3


        //boolean datatype
                        boolean student1present = true;       // idhu 1bit store pannum
                        boolean student2present = false ;
                        System.out.println(student1present);      // true
                        System.out.println(student2present);      // false
        // char datatype
                        char gender1 = 'M';
                        char gender2 = 'F';
                        System.out.println(gender1);              // M
                        System.out.println(gender2);              // F


    }
}


