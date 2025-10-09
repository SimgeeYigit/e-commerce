export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart
});

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
});

export const addCartItem = (item) => (dispatch, getState) => {
    const { cart } = getState().shoppingCart;

    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    let updatedCart;
    if (existingItem) {
        updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    } else {
        updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    dispatch(setCart(updatedCart));
};

export const removeCartItem = (itemId) => (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updatedCart = cart.filter((item) => item.id !== itemId);
    dispatch(setCart(updatedCart));
};

export const increaseCartItem = (itemId) => (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setCart(updatedCart));
};

export const decreaseCartItem = (itemId) => (dispatch, getState) => {
    const { cart } = getState().shoppingCart;
    const updatedCart = cart.map((item) =>
        item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
    dispatch(setCart(updatedCart));
};


