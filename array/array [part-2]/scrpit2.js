// find frequency of all character/element in string/array

let real = "pranav";

let count = 1;

for(let i=0; i<=real.length-1; i++)
{
    count=0;

    for(let j=i; j<=real.length; j++)
    {
        if(real[i] == real[j])
        {
            count++;
        }
    }
    document.write(real[i] + " - " + count + "<br>");
}