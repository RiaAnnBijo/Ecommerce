let cart = {};

function addToCart(productName, price, key) {
    if (cart[key] === undefined) {
        cart[key] = { name: productName, price: price, quantity: 0 };
    }
    // Quantity is incremented only when the "Add to Cart" button is pressed
    updateQuantityDisplay(key);
}

function decrementQuantity(key) {
    if (cart[key] && cart[key].quantity > 0) {
        cart[key].quantity--;
        updateQuantityDisplay(key);
    }
}

function incrementQuantity(key) {
    if (cart[key]) {
        cart[key].quantity++;
        updateQuantityDisplay(key);
    }
}

function updateQuantityDisplay(key) {
    const quantitySpan = document.getElementById(`${key}Quantity`);
    if (quantitySpan) {
        quantitySpan.textContent = cart[key].quantity;
    }
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    const totalAmountSpan = document.getElementById("totalAmount");
    if (cartList && totalAmountSpan) {
        cartList.innerHTML = "";
        let totalAmount = 0;
        for (const key in cart) {
            const item = cart[key];
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartList.appendChild(listItem);
            totalAmount += item.price * item.quantity;
        }
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }

    // Show or hide the cart container based on the cart items
    const cartContainer = document.getElementById("cartContainer");
    if (cartContainer) {
        if (Object.keys(cart).length > 0) {
            cartContainer.style.display = "block";
        } else {
            cartContainer.style.display = "none";
        }
    }
}
