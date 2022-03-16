// Saving all DOM Elements as const to use it later
const d = document;
const userInput = d.getElementById("userInput")
const mainDigit = d.querySelectorAll(".main-digit")

// Event listener to listen to user Input
// Then change each element content to userNumber which = parseInt(userInput)
userInput.addEventListener("input", () => {
    // Convert userInput from string to Integer
    let userNumber = parseInt(userInput.textContent);

    // Making sure it's a number >= 0
    // If not, means the user input minus 
    if(userNumber >= 0) {
        mainDigit.forEach(e => {
            e.textContent = userNumber
        });

        d.getElementById("feet").textContent = (userNumber * 3.28084).toFixed(3);
        d.getElementById("metres").textContent = (userNumber / 3.28084).toFixed(3);
        d.getElementById("gallons").textContent = (userNumber * 0.2641720524).toFixed(3);
        d.getElementById("litres").textContent = (userNumber / 0.2641720524).toFixed(3);
        d.getElementById("kilos").textContent = (userNumber * 0.453592).toFixed(3);
        d.getElementById("pounds").textContent = (userNumber / 0.453592).toFixed(3);
    }

})