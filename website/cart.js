let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");

function renderCart() {

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    cart.forEach((item, index) => {

        let priceNum = parseFloat(item.price.replace(/[^\d.]/g, ""));
        total += priceNum;

        container.innerHTML += `
            <div class="cart-card">
                <img src="${item.img}">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("totalItems").innerText = cart.length;
    document.getElementById("totalPrice").innerText = "$" + total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();