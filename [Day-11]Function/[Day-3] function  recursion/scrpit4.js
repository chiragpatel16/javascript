// n factorial,

let n =  parseInt(prompt("enter n:"));


function factorial(n){
      if(n>1)
      {
          return n * factorial(n-1);
      }
      else{
        return 1;
      }
}
   let ans = factorial(n);
   document.write(ans);
