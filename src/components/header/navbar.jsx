import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CartBag from './cartBag';
import orders from '../orders/orders';
class Navbar extends Component {
    render() {
        const {cartValue} = this.props
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/Collections" className="nav-link">Collection</NavLink>
                            <NavLink to="/products/all" className="nav-link">Products</NavLink>
        <NavLink to="/Orders" className="nav-link">My Orders { this.props.orders.length >= 1 ?<span className="badge badge-primary">{this.props.orders.length}</span> : ""}</NavLink>
                        </ul>
                    </div>
                    <div className="form-inline">
                        <span className="cart">
 <Link to="/cart"><CartBag 
 cartValue={cartValue}
                         />
                         </Link>
                        </span>
                        <span className="admin">
                            <Link to="/">Admin</Link>
                        </span>
  </div>
                </nav>

            </React.Fragment>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}
export default connect(mapStateToProps)(Navbar);