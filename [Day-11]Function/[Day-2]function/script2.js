// wap to check passed number in udf prime or not.

function prime(n)
{
    let a = 0;

    for(let i=1; i<=n; i++)
    {
        if(n%i==0)
        {
            a++;
        }
    }

    if(a==2)
    {
        document.write(n + " is a prime number");   
    }
    else
    {
        document.write(n + " is not a prime number");   
    }

}

let b = prompt("Enter any number : ");
let n = parseInt(b);

prime(n);