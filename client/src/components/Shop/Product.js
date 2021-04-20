import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddProductButton, ProductContainer, Container } from "./ProductStyle";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../utils/api";
import { selectUser } from "../../features/user/userSlice";

function Product({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchedProducts = async () =>
      await fetchProducts(selectedCategory).then((response) => {
        setProducts(response);
      });

    fetchedProducts();
  }, [selectedCategory]);

  return (
    <Container>
      {user.data.role === "seller" && (
        <Link to="/product/create">
          <AddProductButton>Add Product</AddProductButton>
        </Link>
      )}
      <ProductContainer>
        {products?.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </ProductContainer>
    </Container>
  );
}

export default Product;
