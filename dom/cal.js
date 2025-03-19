
        function calculate(event) {
            let a = parseFloat(document.getElementById("num1").value);
            let b = parseFloat(document.getElementById("num2").value);
            // .value retrieves the value of an input field
            // It gets the text, number, or data entered by the user in an input box.
    
            if (a || b) {
                let result;
                switch (event) {
                    case '+': result = a + b; break;
                    case '-': result = a - b; break;
                    case '*': result = a * b; break;
                    case '/': result = a / b; break;
                }
                document.getElementById("user").innerHTML = result;
            }
            else
             {
                document.writeln("Enter valid numbers!");
             }
        }
    
        document.getElementById("plus").addEventListener("click", () => calculate('+'));
        document.getElementById("minus").addEventListener("click", () => calculate('-'));
        document.getElementById("multi").addEventListener("click", () => calculate('*'));
        document.getElementById("div").addEventListener("click", () => calculate('/'));

