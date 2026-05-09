let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartItems");
let totalBox = document.getElementById("totalPrice");

function getTotal(){
  let total = 0;

  cart.forEach(item => {
    total += parseFloat(item.price.replace("$",""));
  });

  return total;
}

function renderCart(){

  container.innerHTML = "";

  let total = 0;

  if(cart.length === 0){
    container.innerHTML = "<p>No items in cart</p>";
    document.getElementById("totalItems").innerText = 0;
    document.getElementById("totalPrice").innerText = "$0";
    return;
  }

  cart.forEach((item, index) => {

    let price = parseFloat(item.price.replace("$",""));
    total += price;

    container.innerHTML += `
      <div class="cart-card">

        <img src="${item.img}" />

        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>${item.price}</p>

          <button onclick="removeItem(${index})">
            Remove
          </button>
        </div>

      </div>
    `;
  });

  document.getElementById("totalItems").innerText = cart.length;
  document.getElementById("totalPrice").innerText = "$" + total;
}

function removeItem(index){
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout(){
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully!");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();