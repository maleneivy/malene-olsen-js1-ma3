// Question 1
// Convert the function below to an arrow function:

const remainder = (a, b) => a % b // //the return is implicit med syntax is like that.

const getRemainder = remainder(5, 2);

console.log(getRemainder);


// Question 2 
// Make a call to the Rawg API.

// API key = 8d84e76308e7427b983299f804fb486c

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8d84e76308e7427b983299f804fb486c";

const containerOfResults = document.querySelector(".results")

async function getFacts() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.results;

        containerOfResults.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 7) {
                break
            }

            containerOfResults.innerHTML += `<div class="results">Name: ${facts[i].name} <br>Number of tags: ${facts[i].tags.length} <br>Rating: ${facts[i].rating}</div>`;
        }

        // if there is any errors: 
    } catch (error) {
        console.log("An error occured", error);
        containerOfResults.innerHTML = anErrorHasOccured("An error occurred when calling the API");
    }
}
getFacts();