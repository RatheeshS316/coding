package Exercise;

public class exercise6 {
  abstract   class animal{
       abstract void makesound();
    }

    class dog extends animal{
       void makesound(){
          System.out.println ("barking");
      }
    }

    class cat extends animal{
      void makesound(){
          System.out.println ("meow");
      }
    }
    public static void main(String[] args) {


      exercise6 ex6 = new exercise6 ();
      animal a = ex6.new cat ();
      animal a1= ex6.new dog();

      a.makesound ();       // meow
      a1.makesound();       // barking


 //     animal.makesound();  it makes a error
    }
}
