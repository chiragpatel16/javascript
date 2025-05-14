document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let taskName = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;

  if (taskName == "" || priority == "") {
    alert("Please fill in both Task Name and Priority.");
    return;
  }

  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");

  // task Name 
  let tdtask = document.createElement("td");
  tdtask.innerText = taskName;

  // priority 
  let tdPriority = document.createElement("td");
  tdPriority.innerText = priority;

  // delete button 
  let tdDelete = document.createElement("td");
  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.style.backgroundColor = "red";
  delbtn.style.color = "white";
  delbtn.style.border = "none";
  delbtn.style.padding = "5px 10px";
  delbtn.style.cursor = "pointer";

  delbtn.addEventListener("click", function () {
    tr.remove();
  });

   tdDelete.append(delbtn);
  
  tr.append(tdtask, tdPriority, tdDelete);
  tbody.append(tr);
  document.getElementById("form").reset();
});
