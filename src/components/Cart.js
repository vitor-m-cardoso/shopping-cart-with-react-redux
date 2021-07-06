import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class Cart extends Component {
  render() {
    const { cartProducts } = this.props;
    if (!cartProducts.length) {
      return <h2>Seu carrinho esta vazio!</h2>
    }
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {cartProducts.map((cartProduct) =>
          <Card border="dark" style={{ width: '12rem', margin: '.2rem'}} key={cartProduct.id}>
            <Card.Img variant="top" style={{ margin: 'auto'}} src={cartProduct.thumbnail} alt={cartProduct.title} />
            <Card.Body>
              <Card.Title>{`R$: ${cartProduct.price}`}</Card.Title>
              <Card.Text>
                {cartProduct.title}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.cartReducer.cartProducts,
});

export default connect(mapStateToProps)(Cart);
