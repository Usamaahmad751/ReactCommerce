import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home';
import NotFound from './components/notfound';
import Navbar from './components/header/navbar';
import AdminLogin from './components/admin/adminLogin'
import Products from './components/products/products';
import Collections from './components/collections/collections';
import Orders from './components/orders/orders';
import ProductDetails from './components/products/productDetails';
import CollectionPage from './components/collections/collectionPage';
import BlogPage from './components/blogs/blogPage';
import Cart from './components/cart/cart';
class App extends Component{
    handleAddToCart = (items , e) => {
      
    const newItem = isNaN(items) ? 0 : items;
  this.setState({cartValue: this.state.cartValue + newItem})
  console.log(typeof(newItem))
  console.log("Added to Cart")
  }
   
  render(){
  return (
    <BrowserRouter>
      <Navbar cartValue={this.state.cartValue}/>

      <Switch>
              <Route name="/collection" path="/collection/:title" component={CollectionPage} />
              <Route path="/products/:id/details" component={(props) => <ProductDetails {...props} handleAddToCart={this.handleAddToCart} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />} />
        <Route path="/orders" component={Orders} />
        <Route path="/collections" component={Collections} />
              <Route path="/products/all" component={Products} />
              <Route path="/cart" component={Cart}/>
              <Route path="/admin" component={(props) => <AdminLogin {...props} />} />
  <Route path="/blogs/:title"component={(props) => <BlogPage {...props} /> }/>
         <Route path="/" exact component={() => <Home handleAddToCart={this.handleAddToCart} />} />
        <Route path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
        <Redirect to="/404" />

      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
