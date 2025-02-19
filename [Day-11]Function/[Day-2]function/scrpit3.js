// wap to print factorial of passed number in udf.

// function factorial(n)
// {
//     let a = n;
//     for(let i=(n-1); i>=1; i--)
//     {
//         n = n * (i);
//     }

//     document.write(n + " is the factorial of " + a);
// }

// let b = prompt("Enter any number : ");

// let n = parseInt(b);

// factorial(n);

//  wap to check given number is armstrong or not.

function twoas(n)
{
    let ld = n/10;

    n /= 10;

    document.write(ld,n);
}

let n = 45;

twoas(n);