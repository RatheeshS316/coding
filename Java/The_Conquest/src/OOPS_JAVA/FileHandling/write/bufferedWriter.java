package OOPS_JAVA.FileHandling.write;

import java.io.FileWriter;
import java.io.BufferedWriter;


public class bufferedWriter {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter ( "Buffered.txt" );
            BufferedWriter bw = new BufferedWriter ( fw );
            bw.write ( "Hey Mann" );
            bw.newLine ();
            bw.write ( "i write a code" );
            bw.close ();
            System.out.println ("Success1");
        }
        catch(Exception e){
            System.out.println ("Something has happened");
        }
        //Hey Mann
        //i write a code
    }
}
