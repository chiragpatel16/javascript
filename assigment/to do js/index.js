// document.getElementById("form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let taskName = document.getElementById("task").value;
//   let priority = document.getElementById("priority").value;

//   if (taskName == "" || priority == "") {
//     alert("Please fill in both Task Name and Priority.");
//     return;
//   }

//   let tbody = document.querySelector("tbody");
//   let tr = document.createElement("tr");

//   // task Name
//   let tdtask = document.createElement("td");
//   tdtask.innerText = taskName;

//   // priority
//   let tdPriority = document.createElement("td");
//   tdPriority.innerText = priority;

//   // delete button
//   let tdDelete = document.createElement("td");
//   let delbtn = document.createElement("button");
//   delbtn.innerText = "Delete";
//   delbtn.style.backgroundColor = "red";
//   delbtn.style.color = "white";
//   delbtn.style.border = "none";
//   delbtn.style.padding = "5px 10px";
//   delbtn.style.cursor = "pointer";

//   delbtn.addEventListener("click", function () {
//     tr.remove();
//   });

//    tdDelete.append(delbtn);

//   tr.append(tdtask, tdPriority, tdDelete);
//   tbody.append(tr);
//   document.getElementById("form").reset();
// });

const form = document.getElementById("form");
const tbody = document.querySelector("tbody");
let formdata = JSON.parse(localStorage.getItem("todoData")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const taskvalue = form.task.value;
  const priorityvalue = form.priority.value;

  formdata.push(todoobj);
  localStorage.setItem("todoData", JSON.stringify(formdata));
  display(formdata);
  form.reset();
});

function display(arr) {
  tbody.innerHTML = null;
  arr.forEach((el, i) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = el.task;
    td2.innerText = el.priority;
    td3.innerText = "Delete";

    td3.addEventListener("click", () => {
      formdata.splice(i, 1);
      localStorage.setItem("todoData", JSON.stringify(formdata));
      display(formdata);
    });

    tr.append(td1, td2, td3);

    tbody.append(tr);
  });
}
display(formdata);
