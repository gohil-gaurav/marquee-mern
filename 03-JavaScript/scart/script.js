const form = document.getElementById("form");
const table = document.querySelector("#table tbody");

let products = JSON.parse(localStorage.getItem("products")) || [];

displayProduct();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let product = {
    name: form.name.value,
    category: form.category.value,
    price: form.price.value,
    quantity: form.quanity.value,
  };

  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  displayProduct();
  form.reset();
});

function displayProduct() {
  table.innerHTML = "";

  products.forEach((p, index) => {
    let row = table.insertRow();

    row.insertCell(0).innerHTML = index + 1;
    row.insertCell(1).innerHTML = p.name;
    row.insertCell(2).innerHTML = p.category;
    row.insertCell(3).innerHTML = p.price;
    row.insertCell(4).innerHTML = p.quantity;

    // Action button
    let actionCell = row.insertCell(5);

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";

    btn.addEventListener("click", function () {
      products.splice(index, 1); // Remove product
      localStorage.setItem("products", JSON.stringify(products)); // Update storage
      displayProduct(); // Refresh table
    });

    actionCell.appendChild(btn);
  });
}