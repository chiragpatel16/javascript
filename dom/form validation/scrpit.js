$(btn).on("click", function () {
    let email = $("#email").val();
    let password = $("#password").val();
    let conPassword = $("#confirmPassword").val();
    let isValid = true;

    let emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 

    if (email == "" || !emailValidator.test(email)) {
        $("#err").text("Email is invalid!");
        isValid = false;
    }

    if (password == "" || conPassword == "" || !passwordValidator.test(password)) {
        console.log("Entered!");
        isValid = false;
        $("#err2").text("Password format not accepted!");
    }

    if (password !== conPassword) {
        isValid = false;
        $("#err2").text("Passwords do not match!");
    }

    if (isValid) {
        $("#status").text("Signup successfully!");
    }
});

