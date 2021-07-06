import NavBar from './components/NavBar';
import RenderProducts from './components/RenderProducts';
import Cart from './components/Cart'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={RenderProducts} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
