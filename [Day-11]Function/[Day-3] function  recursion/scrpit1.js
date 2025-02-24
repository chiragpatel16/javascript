
// 1 to n sum,

let n = parseInt(prompt("enter n:"));

function sum (n){

    if(n>1)
    {
        return n + sum(n-1);
    }
    else{
        return 1;
    }
}
   let ans = sum(n);
   document.write(ans);