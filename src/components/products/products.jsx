import React, { Component } from 'react';
import axios from 'axios';
import Product from './product';
import {connect} from 'react-redux';
class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <h1 className="text-center my-5">Products</h1>
                    <div className="products row">
                  
                        {
                            this.props.products.map(product => {
return(
    <div className="col-sm-3">
   <Product 
            title={product.title}
            priceNew={product.priceNew}
            priceOld={product.priceOld}
            imageLink={product.imageLink}
            collectionId={product.collectionId}
   id = {product.id}
product={product}
   />
    </div>
)
})
  }
                      
                    </div>
                </div>


            </React.Fragment>);
    }
}
const mapStatesToProps = (state) => {
return(
    {
    products: state.products
    }
)

}
export default connect(mapStatesToProps)(Products);