//FUNCTION TO CHECK CREDENTIALS OF USER TO LOGIN TO NEXT PAGE
function checkCreds()
{
   alert("CHECKING CREDENTIALS...")
// VARIABLES FOR FIRST AND LAST NAME AND BADGE NUMBER
var firstName = document.getElementById("first").value;
var lastName = document.getElementById("last").value;
var badgeNum = document.getElementById("numPart").value;
var firstandlastName = firstName + " " + lastName;
alert(firstName + " " + lastName + " " + badgeNum);
// IF THESE TWO IF STATEMENTS ARE TRUE, WILL LET USER KNOW THERE IS AN ERROR
if(firstandlastName.length > 20 || firstandlastName.length < 4)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid length on First and Last Name"; 
    }

if (badgeNum >1000 || badgeNum < 100)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Code"; 
    }
//IF CREDENTIALS ARE TRUE, ACCESS TO NEXT PAGE GRANTED
else if(firstandlastName.length <= 20 || firstandlastName.length <= 4) 
    {
    document.getElementById("loginStatus").innerHTML = "First and Last Name " + firstandlastName + " " + badgeNum;
    alert("ACCES GRANTED - PRESS OKAY TO CONINUE TO NEXT PAGE");
    location.href="event driven programming assignment.html"
    }
}
