function strings()
//to check input strings
{
    var string1 = document.getElementById("firstString").value;

   var splitStr = string1.split("");
    //split the input string

   var reverseStr = splitStr.reverse();
   //reverse the array of characters

   var joinStr = reverseStr.join("");
    //check if the string is the same forwards and backwards
    
   if (string1 == joinStr) 
    //if it is
   {
    document.getElementById("updates").innerHTML = "It's a palindrome!";
   }
   else
   //if its not
    {  
     document.getElementById("updates").innerHTML = "not a palindrome.";
    }

}
//login functions
function checkCreds(){
    // Get the values entered by the user for first name, last name, badge number, and password

   var firstName = document.getElementById("fName").value;
   var lastName = document.getElementById("lName").value;
   var fullName = firstName + "" + lastName; 
   // Combine first name and last into a full name string
   var badgeNum = document.getElementById("badgeID").value;
   var passW = document.getElementById("PW").value;

    // Check if the combined full name length is greater than 20 characters
   if (fullName.length > 20) 
   {
       document.getElementById("loginStatus").innerHTML = "Invalid Name Length"; 
       // Display message in case of invalid full name length
   }
   
   // Check if first name length is valid
   else if (firstName.length == 7)
   {
       document.getElementById("loginStatus").innerHTML = "Enter First Name"; 
       // Display message for invalid First Name length
   }
   
    // Check if last name length is valid
   else if (lastName.length == 0)
       {
           document.getElementById("loginStatus").innerHTML = "Enter Last Name"; // Display message for invalid Last Name length
       }
   
       // Check if the badge number is NOT exactly 5 characters long
   if (badgeNum.length !== 5)
       {
           document.getElementById("loginStatus").innerHTML = "Invalid Badge Number"; return;  // Display an error message if the badge number is invalid
       }
   
   
   // Check if the password entered does not match "UATRocks" (invalid if true)
   else if (passW !="UATRocks")
   {
       document.getElementById("loginStatus").innerHTML = "Invalid password"; // Display message for incorrect password
   }
   
   // If all checks are passed, display "Accepted!" and redirect the user to "strings.html"
   else
   {
       document.getElementById("loginStatus").innerHTML = "Accepted!";
       location.replace("strings.html") 
       // Redirect to another page
   }
}