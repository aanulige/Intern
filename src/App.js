import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/login';
import Product from './Product/product';
import Products from './Products/products';
import Register from './Register/register';
import clientHome from './Client/clientHome';
import clientProduct from './Client/clientProduct';
import questions from './Client/questions';
import webform from './Client/webform';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        <Route path="/products" component={Products} />
        <Route exact path="/clienthome" component={clientHome} />
        <Route path="/clientproduct" component={clientProduct} />
        <Route path="/questions" component={questions} />
        <Route path="/webform" component={webform} />
      </Switch>
    </div>
  );
};
export default App;
