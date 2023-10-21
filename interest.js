var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var time = document.getElementById("time");
var num = document.getElementById("num");

var button = 
document.getElementById("my-button");
button.addEventListener("click", interestCalculation);


function interestCalculation(p, r, t, n = -1) {
    Simple = True
    if (n!=-1 && n > 0) {
        Simple = False
    }

    if (p <= 0 || r <= 0 || t <= 0 || n < -1) {
        print('Please enter positive values only.')
    }

    if (Simple == True) {
        return p*r*t
    }
    else {
        return p*(1+(r/n))**(n*t)
    }
}