import React from "react";
import { useDispatch } from "react-redux";
import {
  ProductCardContainer,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
  CartButton,
} from "./ProductCardStyle";
import { addProduct } from "../../features/cart/cartSlice";
import productImage from "../../assets/images/product_image.jpg";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <ProductCardContainer>
      <ProductImage src={productImage} />
      <ProductDetails>
        <div>
          <ProductName>{product.name}</ProductName>
          <CartButton onClick={() => dispatch(addProduct(product))}>
            Add to Cart
          </CartButton>
        </div>
        <div>
          <ProductPrice>{product.price}</ProductPrice>
        </div>
      </ProductDetails>
    </ProductCardContainer>
  );
}

export default ProductCard;
