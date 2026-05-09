let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateUI(){
  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("wishlistCount").innerText = wishlist.length;
}

updateUI();

document.addEventListener("click", (e) => {

  // ADD TO CART
  if(e.target.classList.contains("add-cart")){

    let product = e.target.closest(".product");

    let name = product.querySelector("h4").innerText;
    let price = product.querySelector(".price").innerText;
    let img = product.querySelector("img").src;

    cart.push({name, price, img});

    localStorage.setItem("cart", JSON.stringify(cart));

    updateUI();

    alert("Added to cart");
  }

  // WISHLIST
  if(e.target.classList.contains("wishlist-btn")){

    let product = e.target.closest(".product");

    let name = product.querySelector("h4").innerText;
    let img = product.querySelector("img").src;

    let index = wishlist.findIndex(p => p.name === name);

    if(index > -1){
      wishlist.splice(index, 1);
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
    } else {
      wishlist.push({name, img});
      e.target.classList.add("fa-solid");
      e.target.classList.remove("fa-regular");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateUI();
  }

});