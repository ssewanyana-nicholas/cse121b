/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Nicholas Ssewanyana";
let currentYear = 2023;
let profilePicture = "images/nicholas.png";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.createElement("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `The profile picture of ${fullName}`);


/* Step 5 - Array */

const favouriteFood = ["Rice", "Sushi", "Burger", "Pizza"]

foodElement.innerHTML += "<br>" + favouriteFood.join(", ") + "<br>";

const singleFood = "Masala";

favouriteFood.push(singleFood);

foodElement.innerHTML += "<br>" + favouriteFood.join(", ") + "<br>";

// Remove the first element from the array
favouriteFood.shift();

// Append a line break and the updated array to the HTML content
foodElement.innerHTML += "<br>" + favouriteFood.join(", ") + "<br>";

// Remove the last element from the array
favouriteFood.pop();

// Append a line break and the updated array to the HTML content again
foodElement.innerHTML += "<br>" + favouriteFood.join(", ") + "<br>";




