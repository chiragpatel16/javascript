
$("#add").click(function () {
    let value = $("#value").val();

    if (value !== "") {
        $("#mylist").append(
            `<li class='task'>
                <span class='task-text' style = "margin-right:20px;">${value}</span>
                <button class='edit'><i class='ri-pencil-fill'></i>edit</button> 
                <button class='delete'>cancel</button>
            </li>`
        );

        // Delete Button
        $("#mylist").on("click", ".delete", function () {
            $(this).parent().remove();
        });

        // edit button
        $("#mylist").on("click", ".edit", function () {
            let taskText = $(this).siblings(".task-text");
            let newValue = prompt("Update your task:", taskText.text());

            if (newValue !== null && newValue.trim() !== "") {
                taskText.text(newValue.trim());
            }
        });

        $(".err").text(""); 
    } 
    else {
        $(".err").text("Please enter a task");
    }  
});




















// const value = document.getElementById("#value");
// const button = document.getElementById("#btn");



// function addtask ()
// {
//     const task = document.getElementById("#task").value
//     const newtask = document.createElement("li");
//     newtask.innerHTML = task;
//     newtask.classList.add("list-group-item");
//     document.getElementById("#list").appendChild(newtask);
//     document.getElementById("#task").value="";
// }


 