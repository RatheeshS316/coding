package The_Conquest.Jump_Statement5;

public class Break_Statement
{
    public static void main(String[] args)
    {
      for(int j=0;j<=5;j++){                  //correct
          if(j==5)
           break;
          System.out.println(j);
          }

        // output is 0 1 2 3 4 idhu nextline printae irukum



     for(int i=0;i<=10;i++){                //wrong
         System.out.println(i);
         if(i==5)
          break;
     }                                  //idhu next line print aaitae irukum  0 1 2 3 4 5 but this step is wrong because we should write before the print statement
    }
}
