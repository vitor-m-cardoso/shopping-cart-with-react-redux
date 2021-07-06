import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super()

    this.state = {
      inputText: ''
    }
    this.handleAddText = this.handleAddText.bind(this);
  }

  handleAddText({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { fetchProducts, productId } = this.props;
    const { inputText } = this.state;

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', paddingRight: '.5rem', paddingLeft:'.5rem'}}>
                Pagina Inicial
              </Link>
                <Link style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', paddingRight: '.5rem', paddingLeft:'.5rem'}} to="/cart">Carrinho
                  <Badge style={{backgroundColor: 'red', padding: '.2rem', borderRadius: '80%'}}>{productId.length}</Badge>
                </Link>
            </Nav>
            <Form inline>
              <FormControl type="text" name="inputText" onChange={(e) => this.handleAddText(e)} placeholder="Digite um produto" className="ml-auto mr-sm-2" />
              <Button variant="outline-secondary" onClick={() => fetchProducts(inputText)}>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productId: state.cartReducer.productId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (newProduct) => dispatch(fetchProducts(newProduct)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
