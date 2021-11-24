import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import Bgimg from "./assets/bgimg.png";

import classes from "./App.module.css";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div
        style={{
          backgroundImage: `url(${Bgimg})`,
          position: "absolute",
          top: 0,
          left: 0,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          zIndex: -100,
          opacity: 0.5,
        }}
        className={classes.container__main}
      ></div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
