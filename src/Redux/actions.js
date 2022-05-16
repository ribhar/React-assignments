// use axios for api call
import axios from "axios";
import {
  GET_FILTERDATA_SUCCESS,
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from "./actionTypes";

export const productsRequest = () => ({
  type: PRODUCTS_REQUEST,
});

export const productsSuccess = (payload) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});

export const productsFailure = () => ({
  type: PRODUCTS_FAILURE,
});

export const filterSuccess = (payload) => ({
  type: GET_FILTERDATA_SUCCESS,
  payload,
});

const getProductsData = () => (dispatch) => {
  dispatch(productsRequest());
  axios
    .get(`https://movie-fake-server.herokuapp.com/products`)
    .then((res) => res.data)
    .then((data) => dispatch(productsSuccess(data)))
    .catch((e) => dispatch(productsFailure()));
};

const sortProducts = (value) => {
  if (value === "asc") {
    return {
      type: LOW_TO_HIGH,
    };
  } else {
    return {
      type: HIGH_TO_LOW,
    };
  }
};

const filterProducts = (category) => (dispatch) => {
  dispatch(productsRequest());
  axios
    .get(
      `https://movie-fake-server.herokuapp.com/products?category=${category}`
    )
    .then((res) => res.data)
    .then((data) => dispatch(filterSuccess(data)))
    .catch((e) => dispatch(productsFailure()));
};

export { getProductsData, sortProducts, filterProducts };
