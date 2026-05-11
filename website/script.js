let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateUI() {
    const cartCount = document.getElementById("cartCount");
    const wishlistCount = document.getElementById("wishlistCount");

    if (cartCount) cartCount.innerText = cart.length;
    if (wishlistCount) wishlistCount.innerText = wishlist.length;
}

document.addEventListener("click", (e) => {

    const productCard = e.target.closest(".product");

    //  ADD TO CART 
    if (e.target.closest(".add-cart")) {

        if (!productCard) return;

        const product = {
            name: productCard.querySelector("h4").innerText,
            price: productCard.querySelector(".price").innerText,
            img: productCard.querySelector("img").src
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateUI();

        console.log("CART ADDED:", product);
        alert(product.name + " added to cart!");
    }

    //  WISHLIST 
    if (e.target.classList.contains("wishlist-btn")) {

        if (!productCard) return;

        const product = {
            name: productCard.querySelector("h4").innerText,
            img: productCard.querySelector("img").src
        };

        const index = wishlist.findIndex(p => p.name === product.name);

        if (index === -1) {
            wishlist.push(product);
            e.target.classList.replace("fa-regular", "fa-solid");
        } else {
            wishlist.splice(index, 1);
            e.target.classList.replace("fa-solid", "fa-regular");
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateUI();

        console.log("WISHLIST TOGGLED:", product);
    }
});

updateUI();