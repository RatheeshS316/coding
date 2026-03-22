package OOPS_JAVA.FileHandling.read1;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileNotFoundException;

// Helloworld
public class Bufferedread1 {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader ( "Output.txt" );
            BufferedReader br = new BufferedReader ( fr );
            String letters = br.readLine();
            System.out.println (letters);
            br.close();
        }
        catch(Exception e){
            System.out.println ("error has show");
        }
      //  Helloworld
    }
}
