

// 1 to n, 

  let n =  parseInt(prompt("enter n:"));


// function printNumber(n, i=1){

//       if(i>n)
//       {
//           return;
//       }

//       document.write(i);
//       printNumber(n,i+1);
// }
//  printNumber(n);
   
function printNumber(n,i=1)
{
       if(i>n)
       {
        return;
       }
       document.write(i);
       printNumber(n,i+1);
}
printNumber(n);