
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nova-cart")) || [];
    } catch {
      return [];
    }
  });

  // حفظ السلة
  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("nova-cart", JSON.stringify(updatedCart));
  };

  // إضافة منتج للسلة
  const addToCart = (product) => {
    saveCart(
      cart.some((item) => item.id === product.id)
        ? cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...product, quantity: 1 }]
    );
  };

  // زيادة الكمية
  const increaseQuantity = (id) => {
    saveCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // تقليل الكمية
  const decreaseQuantity = (id) => {
    saveCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // حذف منتج
  const removeFromCart = (id) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  // إجمالي السعر
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

