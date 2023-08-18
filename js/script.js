const searchInput = document.querySelector('#search')
const main = document.querySelector('#main')

// let searchText = "Chicken"

function fetchAllFoods(search) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => renderFoods(data.meals))
}

fetchAllFoods('Chicken')

function renderFoods(array) {
    main.innerHTML = ''
    if(!array) {
        main.innerHTML = `<h1 class="error">😕Oops...</h1>`
    }
    array.map(item => {
        main.innerHTML += `
            <div class="foods-content">
                <img src="${item.strMealThumb}">
                <h2>${item.strMeal}</h2>
            </div>
        `
    })
}

searchInput.addEventListener('change', e => {
    fetchAllFoods(searchInput.value)
    searchText = searchInput.value
})