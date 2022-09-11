const content = document.querySelector(".countries-container");
let countries = [];
const fetchCountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
  displayCountry();
};

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
const displayCountry = () => {
  content.innerHTML = countries
    .map((country) => {
      return `
            <div class="card">
                <img src=${country.flags.svg} alt="drapeau de ${
        country.translations.fra.common
      }">
                <h2>${country.translations.fra.common}</h2>
                <h4>${country.capital}</h4>
                <p>Population : ${country.population.toLocaleString()}</p>
            </div>
            `;
    })
    .join("");
};

window.addEventListener("load", fetchCountries);
