import React, { Component } from 'react';
import {connect} from 'react-redux'
class CartBag extends Component {
 
    render() {
        
        const {cart} = this.props;
        const totalItems =   cart.map(c=>c.itemCount)
        var sum = 0;
        for(var i=0; i<totalItems.length;i++){
sum += totalItems[i]
        }
    console.log(sum)
        return ( 
<React.Fragment >
        <span className="cart-value">{sum}</span>
   <span className="cart-icon"><i className="fa fa-shopping-cart"></i></span>
</React.Fragment>

         );
    }
}
const mapStateToProps = (state) => {

    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(CartBag);