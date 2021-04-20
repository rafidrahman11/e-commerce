import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CartCard,
  CartHeader,
  CartItem,
  ConfirmOrderButton,
  RemoveProductButton,
} from "./CartStyles";
import { removeProduct, selectCart } from "../../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <CartCard>
      <CartHeader>Cart</CartHeader>
      {cart &&
        Object.values(cart["products"]).map((product) => (
          <CartItem key={product._id}>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            <RemoveProductButton onClick={() => handleRemove(product._id)}>
              Remove
            </RemoveProductButton>
          </CartItem>
        ))}
      <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
    </CartCard>
  );
}

export default Cart;
