import { connect } from 'react-redux';
import { Button, Card, Spinner } from 'react-bootstrap';
import { addProductToCart } from '../actions';

function RenderProducts({ getProducts, isFetching, addProductToCart }) {
  if (isFetching) {
    return (
      <Spinner animation="border" role="status">
      </Spinner>
    )
  }
  if(!getProducts.length) {
    return <h3>Busque por um produto na barra de pesquisa!</h3>
  }
  return (
    <div>
      {getProducts.map((product, index) =>
        <div style={{display: 'flex', flexWrap: 'wrap'}} key={index}>
          {product.results.map((result) =>
            <Card border="dark" style={{ width: '12rem', margin: '.2rem'}} key={result.id}>
              <Card.Img variant="top" style={{ margin: 'auto'}} src={result.thumbnail} alt={result.title} />
              <Card.Body>
                <Card.Title>{`R$: ${result.price}`}</Card.Title>
                <Card.Text>
                  {result.title}
                </Card.Text>
              </Card.Body>
                <Button size="sm" onClick={() => addProductToCart(result, result.id)} variant="success">Adicionar ao Carrinho!</Button>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  getProducts: state.cartReducer.getProducts,
  isFetching: state.cartReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (addProducts, id) => dispatch(addProductToCart(addProducts, id)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderProducts);
