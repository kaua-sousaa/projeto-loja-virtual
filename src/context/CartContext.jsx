import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    console.log("Carrinho carregado do localStorage:", storedCart);
    if (storedCart) {
      setCart(storedCart); // Atualiza o estado com os dados carregados
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
