
// n to 1 print,

let n = parseInt(prompt("enter n :"));

function printNumber(n)
{
     if(n<1)
     {
             return;
     }

     document.write(n);
     printNumber(n-1);
}
printNumber(n);