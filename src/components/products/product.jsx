import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class Product extends Component {

    render() {
        const { imageLink, title, id, priceNew, priceOld, collectionId } = this.props;
     

        return ( 
       <React.Fragment>
                <div className="card" >
                    <Link to={`/products/${id}/details`} > <img src={imageLink} className="card-img-top" alt="hello" /></Link>
  <div className="card-body">
  <Link to={`/products/${id}/details`} >   <h5 className="card-title">{title}</h5></Link>
                        <p className="price price-new"><b>New Price:</b> {priceNew}</p>
                        <p className="price price-old"><b>Old Price:</b> {priceOld}</p>
                        <button className="btn btn-primary w-100" onClick={()=>this.props.handleAddToCart(this.props.product,1)}>Add to Cart </button>
  </div>
</div>

 </React.Fragment>
  );
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
    handleAddToCart: (product,itemsCount)=>{dispatch({type:'HANDLE_CART',payload:{product,itemsCount}})},
}
     }
 
export default connect(null, mapDispatchToProps)(Product);