document.getElementById("welcomeBtn").onclick = function() {
    document.getElementById("welcomeMsg").innerHTML =
    "Welcome to Karachi Institute of Economics and Technology!";
};

document.getElementById("inquiryForm").onsubmit = function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var program = document.getElementById("program").value;

    document.getElementById("formMsg").innerHTML =
    "Thank you, " + name + "! Your inquiry for " + program + " has been received.";

    this.reset();
};