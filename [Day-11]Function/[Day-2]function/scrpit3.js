// wap to print factorial of passed number in udf.

function factorial(n)
{
    let a = n;
    for(let i=(n-1); i>=1; i--)
    {
        n = n * (i);
    }

    document.write(n + " is the factorial of " + a);
}

let b = prompt("Enter any number : ");

let n = parseInt(b);

factorial(n);

