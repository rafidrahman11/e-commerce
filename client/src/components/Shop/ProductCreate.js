import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Form,
  FormButton,
  FormCard,
  FormHeader,
  FormInput,
  FormTextArea,
  FormSelect,
} from "./ProductCreateStyle";
import { selectCategory } from "../../features/category/categorySlice";
import axios from "axios";
import { Redirect } from "react-router-dom";

function ProductCreate() {
  const categories = useSelector(selectCategory);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [categoryId, setcategoryId] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      description,
      price,
      discount,
      categoryId: categoryId,
      rating: 5,
      status: true,
    };

    axios
      .post(`http://localhost:4000/products`, product)
      .then((response) => setUploaded(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {uploaded ? (
        <Redirect to="/shop" />
      ) : (
        <FormCard>
          <FormHeader>Add Product</FormHeader>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormTextArea
              type="text"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
            ></FormTextArea>
            <FormInput
              type="number"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <FormInput
              type="number"
              placeholder="Product Discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <FormSelect onChange={(e) => setcategoryId(e.target.value)}>
              <option>Select a Category</option>
              {categories["category"].map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </FormSelect>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormCard>
      )}
    </>
  );
}

export default ProductCreate;
