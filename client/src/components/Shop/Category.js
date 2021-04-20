import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  syncCategories,
  selectCategory,
} from "../../features/category/categorySlice";
import { fetchCategories } from "../../utils/api";
import {
  CategoryContainer,
  CategoryHeading,
  CategoryItem,
  CategoryList,
} from "./CategoryStyle";

function Category({ changeCategory }) {
  const categoryDetails = useSelector(selectCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const categories = await fetchCategories();
      if (categories) {
        console.log(categories);
        localStorage.setItem("category", JSON.stringify(categories));
        dispatch(syncCategories(categories));
      }
    };
    if (categoryDetails["category"].length === 0) fetchAllCategories();
  }, []);

  return (
    <CategoryContainer>
      <CategoryHeading>Category</CategoryHeading>
      <CategoryList>
        <CategoryItem onClick={() => changeCategory("")}>All</CategoryItem>
        {categoryDetails["category"].length > 0 &&
          categoryDetails["category"].map((category) => (
            <CategoryItem
              onClick={() => changeCategory(category._id)}
              key={category._id}
            >
              {category.name}
            </CategoryItem>
          ))}
      </CategoryList>
    </CategoryContainer>
  );
}

export default Category;
