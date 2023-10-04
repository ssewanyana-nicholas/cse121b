/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
    name: "Nicholas Ssewanyana",
    photo: "images/nicholas.png",
    favouriteFoods: [
        "Rice",
        "Sushi",
        "Burger",
        "Pizza",
        "Masala"
    ],
    hobbies: [
        "Football",
        "Riding",
        "Cricket",
        "Reading",
        "Internet",
        "Stories"
    ],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */
// Adding details about places lived to the 'placesLived' property
myProfile.placesLived.push(
    { place: "Manchester", length: "1 year" },
    { place: "Kampala", length: "2 years" },
    { place: "Wembley", length: "1 year" },
    { place: "Montana", length: "2 years" },
    { place: "Nairobi", length: "2 years" }
);

/* DOM Manipulation - Output */

/* Name */
// Setting the 'textContent' of an HTML element with ID 'name' to the name from the 'myProfile' object
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
// Setting the 'src' and 'alt' attributes of an HTML <img> element with ID 'photo' using properties from 'myProfile'
const photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");

// Loop through each favorite food in the 'favouriteFoods' property and create list items for them
myProfile.favouriteFoods.forEach((food) => {
    // A new <li> element for each food item
    const listItem = document.createElement("li");

    // The text content of the <li> element to the current favorite food
    listItem.textContent = food;

    // Append the <li> element to the <ul>
    favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");

// Loop through each hobby in the 'hobbies' property and create list items for them
myProfile.hobbies.forEach((hobby) => {
    // A new <li> element for each hobby
    const listHobby = document.createElement("li");

    // Set the text content of the <li> element to the current hobby
    listHobby.textContent = hobby;

    // Append the <li> element to the <ul>
    hobbiesList.appendChild(listHobby);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");

// Loop through each object in the 'placesLived' property and create definition list items for them
myProfile.placesLived.forEach((place) => {
    // Create a <dt> element for the place name
    const dt = document.createElement("dt");

    // Set the text content of the <dt> element to the current place's name
    dt.textContent = place.place;

    // Create a <dd> element for the place length
    const dd = document.createElement("dd");

    // Set the text content of the <dd> element to the current place's length
    dd.textContent = place.length;

    // Append the <dt> and <dd> elements to the <dl>
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
