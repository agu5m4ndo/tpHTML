import { getAllRestaurants } from "../services/restaurants.js";

const mariscos = document.querySelector("#mariscos");
const pizzeria = document.querySelector("#pizzeria");
const cafeteria = document.querySelector("#cafeteria");
const parrilla = document.querySelector("#parrilla");

const categorias = [mariscos, pizzeria, cafeteria, parrilla];

const estrellas = (rating) => {
  let estrellas = "";
  let decimal = rating - Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      estrellas += `<i class="bi bi-star-fill star"></i>`;
    } else if (decimal >= 0.5) {
      estrellas += `<i class="bi bi-star-half star"></i>`;
      decimal = 0;
    } else estrellas += `<i class="bi bi-star star"></i>`;
  }
  return estrellas;
};

const fillRestaurants = async () => {
  const restaurantes = await getAllRestaurants();

  for (let i = 0; i < categorias.length; i++) {
    if (categorias[i].id === restaurantes[i].categoria) {
      categorias[i].innerHTML += `<img
        class="card-img-top"
        src="${restaurantes[i].imagen}"
        alt="" />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">${restaurantes[i].nombre}</h5>
          <span>${estrellas(restaurantes[i].estrellas)} (${
        restaurantes[i].estrellas
      })</span>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a href="/restaurant.html?url=${
            restaurantes[i].url
          }" class="btn btn-outline-success mt-auto">
            Ver restaurante
          </a>
        </div>
      </div>`;
    }
  }
};

fillRestaurants();
