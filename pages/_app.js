import '@/styles/globals.css';
import { useState } from 'react';

const App = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);

  const addToCart = guitar => {
    if (cart.some(g => g.id === guitar.id)) {
      const updatedCart = cart.map(g => {
        if (g.id === guitar.id) {
          g.qty = guitar.qty;
        }
        return g;
      });
      setCart([...updatedCart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      setCart([...cart, guitar]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const deleteFromCart = id => {
    const updatedCart = cart.filter(product => product.id != id);
    setCart(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  const updateProduct = guitar => {
    const updatedCart = cart.map(g => {
      if (g.id === guitar.id) {
        g.qty = parseInt(guitar.qty);
      }
      return g;
    });
    setCart(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Component
      cart={cart}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
      updateProduct={updateProduct}
      {...pageProps}
    />
  );
};

export default App;
