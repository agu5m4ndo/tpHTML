import { getOneRestaurant } from "../services/restaurants.js";
const url = new URLSearchParams(window.location.search).get("url");

const singleRestaurant = document.querySelector("#restaurant");

const estrellas = (rating) => {
  let estrellas = "";
  let decimal = rating - Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      estrellas += `<i style="font-size: 20px" class="bi bi-star-fill star"></i>`;
    } else if (decimal >= 0.5) {
      estrellas += `<i style="font-size: 20px" class="bi bi-star-half star"></i>`;
      decimal = 0;
    } else
      estrellas += `<i style="font-size: 20px" class="bi bi-star star"></i>`;
  }
  return estrellas;
};

const fillRestaurant = async () => {
  let restaurant = await getOneRestaurant(url);
  restaurant = restaurant[0];

  singleRestaurant.innerHTML += `<div class="col-md-6">
    <img
      src="${restaurant.imagen}"
      alt="${restaurant.nombre}"
      class="img-fluid" />
  </div>
  <div class="col-md-6">
    <h1>${restaurant.nombre}</h1>
    <p>Categoría: ${restaurant.categoria}</p>
    <p>
      Descripción: ${restaurant.descripcion}
    </p>
    <p>Calificación: ${estrellas(restaurant.estrellas)} (${
    restaurant.estrellas
  } estrellas)</p>
    <p>Responsable: ${restaurant.responsable}</p>
    <p>Estado: ${restaurant.estado}</p>
  </div>`;
};

fillRestaurant();
