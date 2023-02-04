import '@/styles/globals.css';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }) => {
  const cartLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : [];
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = guitar => {
    if (cart.some(g => g.id === guitar.id)) {
      const updatedCart = cart.map(g => {
        if (g.id === guitar.id) {
          g.qty = guitar.qty;
        }
        return g;
      });
      setCart([...updatedCart]);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const deleteFromCart = id => {
    const updatedCart = cart.filter(product => product.id != id);
    setCart(updatedCart);
  };

  const updateProduct = guitar => {
    const updatedCart = cart.map(g => {
      if (g.id === guitar.id) {
        g.qty = parseInt(guitar.qty);
      }
      return g;
    });
    setCart(updatedCart);
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
