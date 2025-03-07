// Remove repeated elements from an array and sort in ascending order.
// Input: 1,7,3,2,4,5,2
// Output: 1,2,3,4,5,7

let num = [ 1,7,3,2,4,5,2]

for(let i=1; i<num.length;i++)
{
     for(let j=i+1; j<num.length;j++)
     {
          if(num[i]>num[j])
          {
              let temp=num[i];
              num[i]=num[j];
              num[j]=temp;
          }
     }
}
document.writeln(num);