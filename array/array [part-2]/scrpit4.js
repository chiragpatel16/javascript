// acending order
let x=[3,2,1,4,5,8,9,6,7];


for(let i=0; i<x.length; i++)
{
       for(j=i+1; j<x.length; j++)
       {
               if(x[i]>x[j])
               {
                let temp=x[i];
                x[i]=x[j];
                x[j]=temp;
               }

       }
}

document.write(x);