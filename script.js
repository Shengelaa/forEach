let products = [
  {
    firstName: "Zone SweatShirt",
    price: "$19.95 - $159.95",
    assets: "assets/1.png",
  },
  {
    firstName: "Zoo Men's t-shirt",
    price: "$14.95 - $119.95",
    assets: "assets/2.png",
  },
  {
    firstName: "Toodler T-shirt",
    price: "$26.00",
    assets: "assets/3.png",
  },

  {
    firstName: "Fine Jersey Tee",
    price: "$26.00",
    assets: "assets/4.png",
  },
];

let products2 = [
  {
    firstName: "Adult Quanity Tee",
    price: "$26.00 - $29.00",
    assets: "assets2/5.png",
  },
  {
    firstName: "All-Over-Print-Hoodie",
    price: "$26.00 - $29.00",
    assets: "assets2/6.png",
  },
  {
    firstName: "AOP Cut $ Sew Tee",
    price: "$26.00 - $29.00",
    assets: "assets2/7.png",
  },
  {
    firstName: "Fine Jersey Tee",
    price: "$26.00 - $29.00",
    assets: "assets2/8.png",
  },
];

let container = document.querySelector("#cards-container");

for (let i = 0; i < products.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  let img = document.createElement("img");
  img.src = products[i].assets;

  card.appendChild(img);

  let name = document.createElement("h2");
  name.textContent = products[i].firstName;
  card.appendChild(name);

  let name2 = document.createElement("p");
  name2.textContent = products[i].price;
  card.appendChild(name2);

  container.appendChild(card);
}

let container2 = document.querySelector("#cards-container2");

for (let u = 0; u < products2.length; u++) {
  let card2 = document.createElement("div");
  card2.className = "card2";
  let img2 = document.createElement("img");
  img2.src = products2[u].assets;

  card2.appendChild(img2);

  let name3 = document.createElement("h2");
  name3.textContent = products2[u].firstName;
  card2.appendChild(name3);

  let name4 = document.createElement("p");
  name4.textContent = products2[u].price;
  card2.appendChild(name4);

  container2.appendChild(card2);
}
