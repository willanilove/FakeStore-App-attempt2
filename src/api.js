import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

// ALL products
export const getProducts = () => axios.get(BASE_URL);

// GET single product by ID
export const getProduct = (id) => axios.get(`${BASE_URL}/${id}`);

// POST new product
export const createProduct = (data) => axios.post(BASE_URL, data);

// PUT update product
export const updateProduct = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

// DELETE product
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
