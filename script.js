//main function: grab input values, calculate interest, display result
function compute()
{
    // assign variables to input elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // create variables for calculation
    var interest = principal*years*rate /100;

    //set year input to reference local time
    var year = new Date().getFullYear()+parseInt(years);

    //check principal input for zero or negative value
    if(principal <= 0){
            alert("Please enter a positive number");
            document.getElementById("principal").focus();
    }

    //remember to display numbers in result to highlighted
        else { 
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"\</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"\<br\>"
    }

}
//enhancement function: grab input rate and display value next to slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= +rateval+"%"
    }
