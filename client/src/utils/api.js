import axios from "axios";

export const signup = async (name, email, password, role) => {
  const apiUrl = `http://localhost:4000/users`;

  console.log(name, email, password, role);

  const user = await axios
    .post(apiUrl, {
      name,
      email,
      password,
      role,
    })
    .then((response) => response.data.user)
    .catch((err) => console.log(err));

  return user;
};

export const login = async (email, password) => {
  const apiUrl = `http://localhost:4000/login`;

  const user = await axios
    .post(apiUrl, {
      email,
      password,
    })
    .then((response) => response.data.user)
    .catch((err) => console.log(err));

  return user;
};

export const fetchCategories = async () => {
  const apiUrl = `http://localhost:4000/categories`;

  const categories = await axios
    .get(apiUrl)
    .then((response) => response.data.categories)
    .catch((err) => console.log(err));

  return categories;
};

export const fetchProducts = async (categoryId) => {
  const apiUrl = categoryId
    ? `http://localhost:4000/categories/products/${categoryId}`
    : `http://localhost:4000/products`;

  const products = await axios
    .get(apiUrl)
    .then((response) => response.data.products)
    .catch((err) => console.log(err));

  return products;
};
