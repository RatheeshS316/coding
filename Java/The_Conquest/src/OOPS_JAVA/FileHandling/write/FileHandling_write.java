package OOPS_JAVA.FileHandling.write;


import java.io.FileWriter;

public class FileHandling_write {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter ( "Output.txt" );

            fw.write("Helloworld");
            fw.close ();
            System.out.println("Success");

            // file la Helloworld
            // success

            //or

            // FileWriter fw = new FileWriter ( "Output.txt" );
            //
            //            fw.write("Heyy");
            //            fw.close ();
            //            System.out.println("Success");    // file:Heyy and output : Success


            // FileWriter fw = new FileWriter ( "Output.txt" );
            //
            //            fw.append("Mann");
            //            fw.close ();
            //            System.out.println("Success");   // file: Heyy Mann
        }
        catch(Exception e){
            System.out.println ("Something error has occured");
        }
    }
}
