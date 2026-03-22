package OOPS_JAVA.keyword.S.this_keyword;

public class this_keyword {

    String name;
    int no;
    int marks;

    this_keyword(String name , int no ,int marks){
        name=name;          //Ratheesh = Ratheesh                        //null
        no=no;              //122=122                                    //0
        marks=marks;        //89=89                                    //0
        // problem enna same value poduradhu mari iruku
        // . for example name la "Ratheesh" store panrom na ratheesh = ratheesh idhu declare avala namba mela ulla nu podurom aana idhu constructor kulla pakudu

        // idhuku solution enna na,this. na adhu instance aah koopudum.
        this.name = name;    // name = Ratheesh
        this.no=no;         // 122
        this.marks=marks;   // 89

    }
    public static void main(String[] args) {

        this_keyword tk = new this_keyword ( "Ratheesh" , 122 , 89 );
        System.out.println (tk.name);
        System.out.println (tk.no);
        System.out.println (tk.marks);
    }
}
