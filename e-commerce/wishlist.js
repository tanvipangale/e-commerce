let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let container = document.getElementById("wishlistItems");

function renderWishlist(){
  container.innerHTML = wishlist.length === 0 ? "<p>No items in wishlist</p>" : "";
  wishlist.forEach((item, index) => {
    container.innerHTML += `
      <div class="product">
        <div class="product-top"><img src="${item.img}"></div>
        <div class="product-info">
          <h4>${item.name}</h4>
          <button class="nav-btn register-btn" onclick="removeWish(${index})" style="width:100%; margin-top:10px;">Remove</button>
        </div>
      </div>`;
  });
}

function removeWish(index){
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}
renderWishlist();