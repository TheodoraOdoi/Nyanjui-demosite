/* JavaScript file to get and display local storage values  */

// variables to store local storage details
let localStorageDetails = "";

function storeDetails(event)
{
    event.preventDefault(); // Prevent form from submitting

    // Get the form values
    const username = document.getElementById("txtNames").value;
    const email = document.getElementById("txtEmail").value;

    // Store the values in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("useremail", email);

    // Redirect to the page to display the user's details
    window.location.href = 'js-localStorage.html';
}

function deleteDetails()
{
    // Clear/delete the local storage valued
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
}

function printLocalStorage()
{
    // let localStorageDetails = "";
    let contentDiv = document.getElementById("contentDiv");

    // check whether the browser supports local storage
    if(('localStorage' in window) && window['localStorage'] !== null) 
    {
        // check that the user name and email values are set
        if(localStorage.getItem("username") !== null && localStorage.getItem("useremail") !== null)
        {
            let username = localStorage.getItem("username");
            let useremail = localStorage.getItem("useremail");
            localStorageDetails += `<p>User&rsquo;s Name:
            ${username}<br/>Email Address: ${useremail}</p>`;
        }
        else
        {
            localStorageDetails += `<p>The username and email address have been cleared or not set.<br/>Please enter them in the <a href="js-localStorage-form.html">User Details Form</a></p>`;
        }

        contentDiv.innerHTML = localStorageDetails;
    }
    else //when the browser doesn't support local storage
    {
        alert('sorry, your browser doesn\t support localstorage. \nPlease try a newer version or switch to a different browser.');
    }
}

// automatically call printloscalStorage on display page
document.addEventListener("DOMContentLoaded", 
    function() 
{
    if (document.getElementById("contentDiv")) 
    {
        printLocalStorage();
    }
});