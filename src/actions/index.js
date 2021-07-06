export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const addProductToCart = (addProduct, id) => ({
  type: ADD_PRODUCT_TO_CART,
  addProduct,
  id,
});

export function fetchProducts(searchProduct) {
  return (dispatch) => {
    dispatch(requestProducts());
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchProduct}`)
      .then((response) => response.json()
        .then((products) => dispatch(receiveProducts(products))
      ));
  }
}
// para utilizar a funcao:
// const { dispatch, fetchMovies } = this.props;
// dispatch(fetchMovies())