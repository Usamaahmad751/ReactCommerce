import React, { Component } from 'react';
import { connect } from 'react-redux';
class Orders extends Component {
    state = {}
    render() {
        const { orders } = this.props;
        return (
            <React.Fragment>
                <h1 className="jumbotron container">Orders</h1>
                <div className="orders-wrapper container">
            { orders.length >=1 ? 
                <table className="table table-stripped">
        <tr>
            <th>Order Id</th>
            <th>Order Items Name</th>
            <th>Items Quantity</th>
            <th>Order Price</th>
        </tr>
                {
                    orders.map(o => {
                        return (

        <tr className="order-item">
                        <td>{o.orderId}</td>
                        <td>
                            {
o.orderItems.map(c=>c.product).map(p=><div>{p.title}</div>)

                            }
                        </td>
            <td>{
               o.orderItems.map(c=>c.itemCount).map(i=><div>x {i}</div>)
                }

            </td>
         
                        <td>{o.orderPrice}</td>
        </tr>
  
                        )
                    }
                    )
                }
               </table>
               
               : <p className="text-center h3">No Order is Placed Yet.</p> }
               </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}
export default connect(mapStateToProps)(Orders);