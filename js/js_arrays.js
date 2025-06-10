/* JavaScript to demonstrate JS single and multi-dimentional arrays, their methods and properties  */

// Looping variables
let n, a;

// Variable to hold the contents to the apprnded to the "array-content" div 
let arrayContent = "";

// Declare a single dimention array of student names
let studentNames = new Array("Kadra", "Miranda", "Rashley", "Ayub", "Adan", "Gershom", "Edmund", "Victor", "Dennis", "Ayan", "Osman", "Lanender", "Fardowsa");

// Populate the "array-content" div with the student names above
for(n = 0; n < studentNames.length; n++)
    arrayContent += `Student ${n + 1}: ${studentNames[n]}<br/>`;

// Get the number of students in the class
arrayContent += `<p>The names of the new students in class is: ${studentNames.length}students.</p>`

// Admit/add new students to the class
studentNames.push("Ali", "Theodora", "Shamim", "Safia", "George", "Yorusaliem", "Levi", "Kama", "Abigail", "Tesfai");

// Paragraph to display the names of the new students/admissions
arrayContent += `<p>The names of the new students in class are: </p>`;
// arrayContent ="";
// arrayContent = `<p>The names of new students in class is: ${n} .</p>`;
for(; n < studentNames.length; n++)
{
    arrayContent += `Student ${n + 1}: ${studentNames[n]}<br/>`;
}

arrayContent += `<p>The names of all the students in the class before sorting are: </p>`;
// use a for... loop to display the names
for(let name in studentNames)
    arrayContent += `Student ${parseInt(name) + 1}: ${studentNames[name]}<br/>`;

// Sort the student names in alphabetical order
studentNames.sort();
// Display the names of the students after sorting
arrayContent += `<p>The names of all the students after sorting are: </p>`;
// TODO: code to display the sorted student names


// Sort the student names in reverse alphabetical order
studentNames.reverse();
// Display the names of the students in reverse order
arrayContent += `<p>The names of the students in reverse order are: </p>`;
// use for...loop to display the names
for(let name in studentNames)
    arrayContent += `Student ${parseInt(name) + 1}: ${studentNames[name]}<br/>`; 

//  Display 2-D arrays

// Heading for the staff section
arrayContent += `<h3 class="section-heading">ADSE 2501 Staff Salary Report</h3>`;

// Declare and initialize a 2-d array to hold staff salary details
let studSalary = new Array(8);
studSalary[0] = ["James", "001", "30000", "10000", "5000"];
studSalary[1] = ["Mercy", "002", "72000", "15000", "5000"];
studSalary[2] =  new Array("Mohamed", "003", "40000", "20000", "8500");
studSalary[3] = ["Derick", "004", "60000", "150000", "8000"];
studSalary[4] = new Array("Daniel", "005", "80000", "12000", "10000");
studSalary[5] = ["Ngure", "006", "27000", "7000", "3500"];
studSalary[6] = new Array("Kate", "007", "45000", "15000", "8000");
studSalary[7] = ["Jeff", "008", "100000", "12000", "8500"];

// Add the staff details to the table
arrayContent += `<table border="2px" class="data-table">`;
arrayContent += `<tr><th>Staff Name</th><th>Emp. ID</th><th>Basic Pay</th><th>House Allowance</th><th>Travel Allowance</th><th>Gross Pay</th></tr>`; // Table Headers

// use the nested loopss to display the employee's salary details
for(n = 0; n < studSalary.length; n++) 
{
    arrayContent +=`<tr>`; // open the table row
    let grossPay = 0;
    a = 0;
    while(a < studSalary[n].length) 
    {
        arrayContent += `<td> ${studSalary[n][a]}</td>`; 
        if(a > 1) 
            grossPay += parseFloat(studSalary[n][a]);
        a++;
    }
    arrayContent += `<td> ${grossPay}</td>`; 
    arrayContent += `</tr>`; // close the table row
}

arrayContent += '</table>';
// Display the content of the "arrayContent" variable
document.getElementById("array-content").innerHTML = arrayContent;