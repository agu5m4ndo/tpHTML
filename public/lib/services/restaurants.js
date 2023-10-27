export function getAllRestaurants() {
  return fetch("http://localhost:3000/restaurantes").then((res) => res.json());
}

export function getOneRestaurant(url) {
  return fetch(`http://localhost:3000/restaurantes?url=${url}`).then((res) =>
    res.json()
  );
}
