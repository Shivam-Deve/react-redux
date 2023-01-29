import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";

// redux stuff
import reducer from "./redux/reducer";
import { Provider } from "react-redux";

const initialState = {
  cart: cartItems,
  total: 5,
  amount: 5
}

const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
