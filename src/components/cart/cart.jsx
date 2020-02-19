import React, { Component } from 'react';
import { connect } from 'react-redux';
class Cart extends Component {
   
    render() {
        const { cart, collections } = this.props;
        const products = cart.map(c => c.product)
const totalItems = cart.map(c=>c.itemCount)
const itemPrice = products.map(p=>p.priceNew)
var totalPrice = 0;
for(var i=0;i<cart.length;i++){
totalPrice += totalItems[i] * itemPrice[i]

}
        return (

            <React.Fragment>
                <div className="container">
                <div className="cart-heading mt-5 text-center"><h1>Cart</h1></div>

                  { cart.length >= 1 ?
                    <div className="cart-wrapper">

                        <div className="cart-items">

                            <table className="col-12">
                                <tr>

                                    <th colSpan="2" className="text-center">Item</th>
                                    <th >Quantity</th>
                                    <th>Item Price</th>
                                    <th >Total Price</th>

                                </tr>
                                {

                                    cart.map(c => {
                                        const { title, description, imageLink, priceNew, collectionId } = c.product;
                                        return (
                                            <tr className="cart-item">
                                                <td><img src={imageLink} /></td>
                                                <td className="item-info">
                                                    <div className="item-title">{title}</div>
                                                    <div className="item-description">{description}</div>
                                                    <div className="collection-name">Collection Name: <span>{collections.filter(cf => cf.id == collectionId).map(cd => cd.name)}</span></div>
                                                </td>
                                                <td>{c.itemCount}</td>
                                                <td>{priceNew}</td>
                                                <td>{priceNew * c.itemCount}</td>
                                                <td><button className="btn btn-danger" onClick={()=>this.props.handleCartItemDelete(c)}>Delete</button></td>
                                            </tr>
                                        )

                                    })}
                            </table>
                        </div>
                        <div className="checkout-wrappers">
                        <div className="checkout float-right">
                        <button className="checkout-buttons btn btn-danger mr-2" onClick={this.props.clearCart}>Clear Cart</button>
                            <button className="checkout-buttons btn btn-warning" onClick={() => this.props.handleCheckout(this.props.cart, totalPrice)}>Proceed To Checkout</button>
                        </div>
                    </div>
                    </div>
  : <h4 className="text-center my-5">No Item Available in the Cart</h4>  }
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        collections: state.collections,
        cart: state.cart,
        itemsCount: state.itemCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckout: (orderItems, orderPrice) => { dispatch({ type: 'HANDLE_CHECKOUT', payload: { orderItems, orderPrice } }) },
        clearCart: () => { dispatch({ type: 'CLEAR_CART', payload: null}) },
        handleCartItemDelete: (itemToDelete) => { dispatch({ type: 'HANDLE_CARTITEM_DELETE', payload: itemToDelete }) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
