import axios from "axios";
import { set } from "react-hook-form";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState
});

export const fetchCategories = () => (dispatch) => {
    axios.get(BASE_URL + "/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}

export const fetchProducts = (category, sort) => (dispatch, getState) => {
    dispatch(setFetchState("FETCHING"));
    const { filter } = getState().product;
    axios.get(BASE_URL + "/products", {
        params: { category, filter, sort }
    })
        .then((response) => {
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            console.error("Error:", error);
            dispatch(setFetchState("ERROR"));
        })
}

/*
export const fetchProductsByCategory = (categoryId) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    axios.get(`${BASE_URL}/products?category=${categoryId}`)
        .then((response) => {
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            console.error("Error:", error);
            dispatch(setFetchState("ERROR"));
        });
}
*/
