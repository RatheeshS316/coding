package OOPS_JAVA.FileHandling.read1;

import java.io.FileReader;

import java.io.FileNotFoundException;

public class Filehandling_read {
    public static void main(String[] args) {
                // Hello World
        try{
            FileReader fr = new FileReader ( "Output.txt" );
         int c= fr.read();
            System.out.println ((char)c);
            c=fr.read();
            System.out.println ((char)c);
           c=fr.read();
            System.out.println ((char)c);
            fr.close();
        }
        //H
        //e
        //l
        catch(Exception e){
            System.out.println ("error has taken");
        }
    }
}
