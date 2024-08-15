import { useAppSelector } from "@/redux/hook";
import React, { Dispatch, SetStateAction } from "react";
interface Propstype {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: Propstype) => {
  const products = useAppSelector((state) => state.cartReducer);
  const getTotal = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));
  };

  return <div>Cart</div>;
};

export default Cart;
