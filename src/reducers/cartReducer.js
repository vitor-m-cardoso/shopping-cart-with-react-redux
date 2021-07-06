import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS, ADD_PRODUCT_TO_CART } from "../actions";

const INITIAL_STATE = {
  getProducts: [],
  id: 0,
  isFetching: false,
  cartProducts: [],
  productId: []
}

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state, 
        isFetching: true,
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        getProducts: [action.products],
        isFetching: false,
      }
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.addProduct],
        id: state.id + 1,
        productId: [...state.productId, action.id],
      }
    default:
      return state;
  }
}

export default cartReducer;
