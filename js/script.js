const searchInput = document.querySelector("#search");
const main = document.querySelector("#main");

let searchText = "Chicken";

function fetchAllFoods(search) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => renderFoods(data.meals))

    .catch((err) => {
      main.innerHTML = `<h1 class="error" style="padding: 20px ; color: red;">Failed to fetch: ${err.message}</h1>`;
      console.error(err);
    });
}

fetchAllFoods("a");

function renderFoods(array) {
  main.innerHTML = "";
  if (!array) {
    main.innerHTML = `<h1 class="error">😕Oops...</h1>`;
  }
  array.map((item) => {
    main.innerHTML += `
            <div class="card">
                    <img src="${item.strMealThumb}">
                <div class="card-content" >
                    <h2>${item.strMeal}</h2>
                </div>
            </div>
        `;
  });
}

searchInput.addEventListener("change", () => {
  fetchAllFoods(searchInput.value);
  searchText = searchInput.value;
});
