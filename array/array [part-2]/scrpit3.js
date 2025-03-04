// wap to find max/min from array.

function findmaxmin (arr)
{

        let max = arr [0];
        let min = arr[0] ;

        for(let i=1; i<arr.length;i++)
        {
            if(arr[i]> max)
            {
                max = arr[i];
            }
            else if (arr[i]< min)
            {
                min = arr[i];
            }
        }

        document.write("maximum:",max);
        document.write("<br>");
        document.write("minimum:",min);
}
let numbers = [12, 45, 2, 67, 34, 89 , 5];
findmaxmin(numbers);