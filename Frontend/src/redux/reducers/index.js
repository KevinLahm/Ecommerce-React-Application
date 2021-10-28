import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoriesReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allCategories: categoriesReducer
});
export default reducers;
