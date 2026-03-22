package day_11_15;

public class string {
    public static void main(String[] args) {
        // create a string
        String name = "Ratheesh";
        System.out.println (name);
        // or
        String city = new String("Chennai");
        System.out.println (city);


        //String Traversal
        for(int i = 0; i < name.length(); i++) {
            System.out.print(name.charAt(i) + " ");
        }


        // String Length
        System.out.println (name.length ());


        //Access Characters (Indexing)
        System.out.println (name.charAt ( 2 ));


        // concatenation strings
        System.out.println ("Hello"  + name);


        //string methods
        System.out.println (name.toUpperCase());
        System.out.println (name.toLowerCase());
        System.out.println (name.substring(0, 4));
        System.out.println (name.contains("Rat"));
        System.out.println (name.replace("R", "r"));

    }
}
