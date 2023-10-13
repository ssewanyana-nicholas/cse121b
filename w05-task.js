/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* Function to display temples */
const displayTemples = (templesArray) => {
  templesArray.forEach(temple => {
    const articleElement = document.createElement("article");
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;
    const imageElement = document.createElement("img");
    imageElement.src = temple.imageUrl;
    imageElement.alt = temple.location;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imageElement);
    templesElement.appendChild(articleElement);
  });
};

/* Function to fetch temple data using fetch() */
const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  const data = await response.json();
  templeList.push(...data);
  displayTemples(templeList);
};

/* Function to reset the output */
const reset = () => {
  templesElement.innerHTML = ''; // Clear all child elements
};

/* Function to sort and filter temples */
const sortBy = (temples) => {
  reset();
  const filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      const olderTemples = temples.filter((temple) => new Date(temple.dedication) < new Date(1950, 0, 1));
      displayTemples(olderTemples);
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      // Handle an invalid filter option here, if needed
      break;
  }
};

/* Add a change event listener to the HTML select element with ID "sortBy" */
document.getElementById("sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

/* Execute the getTemples function when the page loads */
window.onload = () => {
  getTemples();
};
