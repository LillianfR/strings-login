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
function checkCreds()
{
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName +  " " + lastName;
    var badgeNum = document.getElementById("badgeID").value;
    var passW = document.getElementById("PW").value;

//first name
    if (fullName.length >= 20)
    {
        document.getElementById("loginStatus").innerHTML = "Names must have values";
    }
    else if (firstName !="Lillian")
    {
         document.getElementById("loginStatus").innerHTML = "Incorrect name";
    }
    //last name 
    else if (lastName !="Reynolds")
    {
         document.getElementById("loginStatus").innerHTML = "Incorrect name";
    }

    //badge num
    else if (badgeNum !="100")
    {
        document.getElementById("loginStatus").innerHTML = "Invalid badge num";
    }
    //password
    else if (passW !="Meow")
     {
         document.getElementById("loginStatus").innerHTML = "Invalid Password";
     }

     //results
    else
     
     {
        document.getElementById("loginStatus").innerHTML = "Accepted!!!";

        location.replace("strings.html")
     }
    }