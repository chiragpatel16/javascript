// const name=document.getElementById("name")
// name.value="asdfjaslkdfl;asdf"

document.getElementById("signup").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
  
    // object
    const signupdata = {
      name: name,
      email: email,
      country: country,
      phone: phone,
      password: password,
    };
  
    // Log the signup data
    console.log("Signup Data:", signupdata);
  });
  
  // Signin Form
  document.getElementById("signin").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("signin-name").value;
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
  
    // object
    const signindata = {
      name: name,
      email: email,
      password: password,
    };
  
    console.log("Signin Data:", signindata);
  });
  