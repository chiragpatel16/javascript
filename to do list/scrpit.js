$("#add").click(function () {
    let value = $("#value").val();
    let currentTime = new Date().toLocaleTimeString(); // Get current time

    if (value !== "") {
        $("#mylist").append(
            `<li class='task'>
                <span class='task-text'>${value}</span> 
                <span class='time'>(${currentTime})</span>
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
            let taskTime = $(this).siblings(".time");
            let newValue = prompt("Update your task:", taskText.text());

            if (newValue !== null && newValue.trim() !== "") {
                taskText.text(newValue.trim());
                let newTime = new Date().toLocaleTimeString(); // Update time
                taskTime.text(`(${newTime})`);
            }
        });


        $(".err").text(""); // Clear error message
    } else {
        $(".err").text("Please enter a task");
    }  
});
