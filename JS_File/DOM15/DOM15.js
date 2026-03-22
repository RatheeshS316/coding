                        //DOM(Document Object Model)



            // if you want to see the linked html file use this.                     
            console.log(document);                       



            //                 //document.title()

            // andha document oda web page title pakanum na apa use this.
            console.log(document.title);      // DOM




            
            //                 //document.getElementById()
                           
            // // oru value oda element kandupidika use panradhu tha this.
              console.log(document.getElementById("one"));           /* <h1 id="one">
                                                                        <div class="one">Lorem ipsum dolor sit.</div> 
                                                                        </h1>
                                                                                    */  
                                                                                   
                                                                        

            //                // .textContent

            // // namba oru tag la ulladula value change or update pannalam nu papom.
            let element = document.getElementById("one");
            element.textContent = "Ratheesh";        // old output : Lorem ipsum dolor sit.
            console.log(element.textContent);       // new output : Ratheesh


            // // indha text la epdi add aagi wrtite pannalam nu papom
            let element1 = document.getElementById("two");
            element1.textContent+="Ratheesh";         // old output : Nihil mollitia aspernatur ut.
            console.log(element1.textContent);      
            // //new output: Nihil mollitia aspernatur ut. Ratheesh




            //               // .innerHTML
            // let element2 = document.getElementById("onn1");
            // element2.innerHTML = "<Rath>one</Rath>";          // idhula namba tag create pannikalam
                     
            
            
            //             // .className
            //  let element3 = document.getElementById("three");
            // element2.className = "3Three";                 // class name add pannikalam
            
            
            //                 // style change pannalam
            // element2.style.color="red";                            
            // element2.style.backgroundColor="green";



            //                 //getElementByTagName()
            // let element4 = document.getElementsByTagName("h1");
            // console.log(element4);              //HTMLCollection(5) [h1#one, h1#two, h1#three, h1#onn1.3Three, h1#onnn.onnnn, one: h1#one, two: h1#two, three: h1#three, onn1: h1#onn1.3Three, onnn: h1#onnn.onnnn]
            

            //                 //getElementByClassName()
            // let element5 =  document.getElementsByClassName("one");
            // console.log(element5);



            //                 //.querySelector();
            // let element6 = document.querySelector(".one");                      // idhula tag na normal la podanum or class na . vachi write or id na # pothu write pannanum
            // console.log(element6);         // <div class="one">Facilis ut maiores delectus?</div>\



            //                 // .createElement()
            // let element7 = document.getElementById("hd")
            // let para = document.createElement("p");
            // para.id="para";
            // para.textContent="he doesnt finish JS";
            // console.log(para);
            // element.append(para); 
            // element.prepend(para);        