let n = parseInt(prompt("enter number :"));
                         
function table (n)
{
     for(let i=1;i<=10;i++){
       document.write( n + "x" + i + "=" + n*i + "<br>"); 
     }
}
table(n);