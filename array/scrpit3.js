
// 50 doors questions

let x = [];

// for (let i = 0; i < 50; i++) {
//     x[i] = 0; 
// }

//  doors

for (let i = 1; i * i <= 50; i++) {
    let door = (i * i) - 1; // array start (0) door start (1)
     x[door] = 1; // (perfect squares remain open)
}

// //  final door open and close

let opend = [];
let closed = [];

for (let i = 0; i < x.length; i++) {
    if (x[i] == 1) {
        opend.push(i); 
    } else {
        closed.push(i);
    }
}

for (let i = 0; i < x.length; i++) {
    if (x[i] == 1) {
        opend.push(i+1); //i + 1 is used because array  start at 0, but doors start at 1.
    } else {
        closed.push(i+1);
    }
}

document.write("Open doors: " + opend + "<br>");
document.write("Closed doors: " + closed + "<br>");
document.write("Total open doors: " + opend.length + "<br>");
document.write("Total closed doors: " + closed.length);

