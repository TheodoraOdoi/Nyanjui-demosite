/* JavaScript to demonstrate JS objects, functions and built-in JS objects.  */


// Variable to hold the contents to the apprnded to the "array-content" div 
let objectContent = "";

// Declare a single object using the object literal
let singleStudent =
{
    surname: "Odoi",
    othernames: "Naana",
    age: 20,
    gender: "Female",
    course: "ADSE",
    fullname: function () 
    {
        return this.surname + " " + this.othernames;
    }
};
objectContent += `<h3 class="section-heading">Student Details</h3>`;

objectContent += 
`<p>Student's Name: ${singleStudent.fullname()}<br/>Student's Age: ${singleStudent.age}
<br/>Student's Gender: ${singleStudent.gender}
<br/>Student's Course: ${singleStudent.course}</p>`;

//create an object using the new object() -> object constructor
//create an employee object
let employee = new Object();
employee.firstname = "Kwame";
employee.lastname = "Nkrumah";
employee.gender = "Male";
employee.phoneNuber = "024-123-4567";
employee.email = "nkrumah.gmail.com";
employee.age = "62";
employee.salary = "250000";

// Create a method to display the employee's full details
employee.fulldetails = function()
{
    let allDetails = `Employee's Names:
    ${this.firstname} ${this.lastname}
    <br/>Employee's Age: ${this.age}
    <br/>Employee's gender: ${this.gender}
    <br/>Employee's Phone No: ${this.phonenumber}
    <br>Employee's Email: ${this.email}
    <br/>Employee's Salary: KES ${this.salary}`;
    return allDetails;
};

objectContent += `<h3 class="section-heading">Employee Details</h3>`;
objectContent += employee.fullDetails();

// create an object constructor and create objects of it's type
function Circle(rad)
{
    this.radius = rad;

    // Method to calculate the circle's circumference
    this.area = function () 
    {
        return (Math.PI * Math.pow(this.radius,2));
    };

    // Method to calculate the circle's circumference
    this.circumference = function () 
    {
        return (Math.PI * (this.radius * 2));
    };
}

// Declare and instantiate(create) objects of type circle
let smallCircle = new Circle(7);
let largeCircle = new Circle(21);

// Display the details of the circle object
// 1. Details of the small circle
objectContent += `<br/><h3 class="section-heading">Details of small Circle</h3>`;
objectContent += `<p>Radius ${smallCircle.radius}
<br/>Area: ${smallCircle.area()} cm<sup>2</sup>
<br/>Circumference: ${smallCircle.circumference()} cm </p>`;

// TODO 1: Display the details of the large circle
// TODO 2:Create an object of right-angled triangle that accepts the base and height, calculate the triangle's area and perimeter. Create 2 objects of right-angled triangle and display their dimentions.

// Work with JS-built in Date object
let now = new Date(); // Get the current date instance
let currentYear = now.getFullYear();  // Get the current year
let currMonth = now.getMonth(); // Get the current month as a number between 0 - 11

let currDay; //variable to hold the string value of the weekday
 switch(day)
{
    case 0:
        currDay = "Sunday";
        break;
    case 1:
        currDay = "Monday";
        break;
    case 2:
        currDay = "Tuesday";
        break;
    case 3:
        currDay = "Wednesday";
        break;
    case 4:
        currDay = "Thursday";
        break;
    case 5:
        currDay = "Friday";
        break;
    case 6:
        currDay = "Saturday";
        break;
}

// Get/extract the time details
let currHour = now.getHours(); // get the current hour
let currMin = now.getMinutes(); // get the current minute
let currSec = now.getSeconds(); // get the current second

// Display the current date and time
objectContent += `<br/><p>Today is ${currDay} ${now.getDate()} ${currMonth + 1} ${currYear} and the current time is ${currHour}:${currMin}:${currSec}.  </p>`; 



// Display the content of the objectContent variable
document.getElementById("object-content").innerHTML = objectContent;