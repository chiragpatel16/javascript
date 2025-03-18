
let count = 0;
const h1 = document.getElementById("user");

        document.getElementById("btn1").addEventListener("click", () => {
            count++;
            h1.innerHTML = count;
        });

        document.getElementById("btn2").addEventListener("click", () => {
            if(count>0){
                count--;
            }
            h1.innerHTML = count;
        });

        document.getElementById("btn3").addEventListener("click", () => {
             if(count==0){
                     document.writeln("it cant be multiply by zero");
                }
            else{
            count *= 2;
            }
            h1.innerHTML = count;
        });

        document.getElementById("btn4").addEventListener("click", () => {
            if(count <=1)
            {
                document.writeln("Value too small to divide further.");
            }    
              count /=2;
            h1.innerHTML = count;
        });