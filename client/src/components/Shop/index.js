import React, { useState } from "react";
import Category from "./Category";
import Product from "./Product";
import { ShopContainer } from "./ShopStyle";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <ShopContainer>
      <Category changeCategory={(id) => setSelectedCategory(id)} />
      <Product selectedCategory={selectedCategory} />
    </ShopContainer>
  );
}

export default Shop;
