import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../header/navbar';
import Products from './products';
import {connect} from 'react-redux';
import products from './products';
class ProductDetails extends Component{
    
    state = { 
        itemsCount: 1
            }
    
     handleChange =({ currentTarget: input })=>{
      const   value= input.value; 
        this.setState({itemsCount: value})
    }
    handleDecrement = () => {
        if(this.state.itemsCount >1){
        this.setState({ itemsCount: this.state.itemsCount - 1 })
        }
    }
    handleIncrement = () => {
        this.setState({ itemsCount: this.state.itemsCount + 1 })
    }
handleCart = (e)=>{
e.preventDefault();
const id =  this.props.match.params.id
  const productArray = this.props.products.filter(p=> id ==  p.id);
  const product = productArray[0];
this.props.handleAddToCart(product,this.state.itemsCount)
}
    render() {
const id =  this.props.match.params.id
  const productArray = this.props.products.filter(p=> id ==  p.id);
  const product = productArray[0];
    return ( 
    
            <React.Fragment>
        
                <div className="container">
                    <div className="row product-wrapper">
                        <div className="col-6">
                            <div className="product-image">
                                <img src={product.imageLink} alt="My Image"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="product-title">{product.title}</div>
                            <div className="product-price"> New Price:  {product.priceNew}</div>
                           <div className="product-price">  Old Price: {product.priceOld}</div>

                            <div className="product-form">
                             <form onSubmit={this.handleCart}>
                                <input type="button"  class={`qty-btn btn btn-default increment`} onClick={this.handleDecrement} value="-" />
                                <input type="number" name="cartnumber" disabled range="0-100" onChange={this.handleChange} value={this.state.itemsCount} />
                                <input type="button" class="qty-btn btn btn-primary decrement" onClick={this.handleIncrement} value="+"/>
                                <br />
                                <button type="submit" className="btn btn-primary">Add to Cart</button>
                                </form>
                            </div>
                            <div className="product-description">
                                {product.description}
                            </div>
                        </div>

                    </div>
                </div>
              
            </React.Fragment>
         );
    }
}
 const mapStateToProps = state =>{
return {

    products : state.products
}
 }
 const mapDispatchToProps =(dispatch)=>{
    return {
    handleAddToCart: (product,itemsCount)=>{dispatch({type:'HANDLE_CART',payload:{product,itemsCount}})},
}
     }
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);