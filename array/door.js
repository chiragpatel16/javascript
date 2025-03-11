
// // // 50 doors questions

// // let x = [];

// // for (let i = 0; i < 50; i++) {
// //     x[i] = 0; 
// // }

// // //  doors

// // for (let i = 1; i * i <= 50; i++) {
// //     let door = (i * i) - 1; // array start (0) door start (1)
// //      x[door] = 1; // (perfect squares door remain open)
// // }

// // //  final door open and close

// // let opend = [];
// // let closed = [];

// // // for (let i = 0; i < x.length; i++) {
// // //     if (x[i] == 1) {
// // //        opend =[opend,i];a 
// // //     } else {
// // //        closed = [closed,i];
// // //     }
// // // }

// // for (let i = 0; i < x.length; i++) { 
// //     if (x[i] == 1) {
// //         opend.push(i+1); //i + 1 is used because array  start at 0, but doors start at 1.
// //     } else {
// //         closed.push(i+1);
// //     }
// // }

// // document.write("Open doors: " + opend + "<br>");
// // document.write("Closed doors: " + closed + "<br>");
// // document.write("Total open doors: " + opend.length + "<br>");
// // document.write("Total closed doors: " + closed.length);
// let doors = [];
// let persons = [1, 2, 3, 4, 5];
// let index = 0;
// let close = 0;
// let open = 0;
// for (let i = 1; i <= 50; i++) {
//   doors.push(0);
// }

// for (let i = 1; i <= 5; i++) {
//   let table = [];
//   for (let k = 1; k <= 10; k++) {
//     table.push(i * k);
//   }
//   //   document.write(table + "<br>");
//   table.forEach((e) => {
//     if (doors[e - 1] == 0) {
//       doors[e - 1] = 1;
//     } else {
//       doors[e - 1] = 0;
//     }
//   });
//   table = [];
// }

// index = 0;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     document.write(doors[index] + " ");
//     index++;
//   }
//   document.write("<br>");
// }

// doors.forEach((e) => {
//   if (e == 0) {
//     close++;
//   } else {
//     open++;
//   }
// });

// document.write("Open : " + open + "<br>");
// document.write("Close : " + close);


 let doors=[]
let persons = [1,2,3,4,5]
let index = 0;
let open = 0;
let close = 0;

 for(let i=1; i<=50; i++)
 {
     doors.push(0);
 }

 for( let i=1; i<=5; i++){
  let table = [];

  for(let k=1; k<=10; k++){
      table.push(i * k);
  }


  table.forEach((e) => {
    if( doors [e - 1 ] ==0 )
    {
         doors[e - 1] = 1;
    }
    else
    {
      doors[e-1]=0;
    }
  });
  table = [];
} 


 index = 0;
  for(let i=1; i<=5; i++)
  {
    for(let j=1; j<=10; j++)
    {
      document.write(doors[index]+" ");
      index++;
    }
    document.write("<br>");
  }

   doors.forEach((e) => {
    if(e==0)
    {
      close++;
    }
    else
    {
      open++;
    }
    
   });

 document.write("open : "+ open +"<br>");
 document.write("close : "+ close);
