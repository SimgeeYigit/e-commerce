import { SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_LIMIT, SET_OFFSET, SET_FILTER, SET_FETCH_STATE,SET_PRODUCT } from '../actions/productActions';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED"
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload
            };
        case SET_PRODUCT:
            const existingIndex = state.productList.findIndex(
                (p) => p.id === action.payload.id
            );
            let updatedList;
            if (existingIndex >= 0) {
                updatedList = [...state.productList];
                updatedList[existingIndex] = action.payload;
            } else {
                updatedList = [...state.productList, action.payload];
            }
            return {
                ...state,
                productList: updatedList,
            };

        default:
            return state;
    }
}

export default productReducer;
