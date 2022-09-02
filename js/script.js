// ## Lesson Task 1 Question

// Make a call to the following endpoint:

const resultsContainer = document.querySelector(".results");

const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function createList() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //   console.log(data);
    // const results = data.results;
    //   console.log(results);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      // console.log(results[i].name);
      // console.log(results[i].rating);
      // console.log(results[i].tags.length);

      if (i === 15) {
        break;
      }

      if (
        data[i].teamName.startsWith("C") ||
        data[i].teamName.startsWith("c")
      ) {
        continue;
      }

      resultsContainer.innerHTML += `<div class="card rnum${i}">
                                        <h3>Team Name: ${data[i].teamName}</h3>
                                        <p>City ${data[i].location}</p>
                                     </div>`;
    }
    console.log("Success");
    const loader = document.querySelector(".loader");
    loader.classList.remove("loader");
  } catch (error) {
    console.log(error, "An error occurred");

    resultsContainer.innerHTML = "An error occurred when calling the API";
  } finally {
    console.log("Done!");
  }
}
createList();

// Display the team name and city of the first 15 results, but exclude any team whose name begins with `c`.

// There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".
