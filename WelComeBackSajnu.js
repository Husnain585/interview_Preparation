console.log("Welcome back, Sajnu!");
// This script logs a welcome message to the console.   
// It can be used to greet a user named Sajnu when they return to the application.
// You can modify the message or add more functionality as needed.
let welcomeMessage = "Welcome back, Sajnu!";
function displayWelcomeMessage() {
    console.log(welcomeMessage);
}
displayWelcomeMessage();
// You can also export the function if needed for use in other modules.
module.exports = {
    displayWelcomeMessage
};
