/* JavaScript file to demonstrate the various JS operators and switch...case.
construct to create a calculator */ 

// Create a function to handle the calculator
function calculate()
{
    // constants to hold the values/numbers entered by the user and the operation selected
    const num1 = parseInt(document.getElementById('txtfirstNum').value);
    const num2 = parseInt(document.getElementById('txtSecondNum').value);
    const operation = document.getElementById('sltOperation').value;
  
    // Variable to store the result
    let result = ""
    switch (operation) 
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/": // for robustness handle the case when num2 == 0 to avoid errors
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = num1 ** num2; // Math.pow(num1, num2)
            break;
        default:
            alert("Please select Add, Subtract, Multiply, Divide, Modulus/Remainder or Exponent/Power");
            result = "";
            break;
    }
    // Display the result/answer in the answer text field (txtAnswer)
    document.getElementById('txtAnswer').value = result;
}