// wap to print only even numbers from Array.

let num = [1,2,3,4,5,6,7,8,67,83]

document.write("this is array :",num,"<br>");

for(let i=0; i<=num.length; i++)
{

    if(num[i]%2==0)
    {
       document.write(num[i]+"<br>");
    }
}
