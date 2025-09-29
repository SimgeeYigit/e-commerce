import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});

export default reducers;