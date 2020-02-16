import React, { Component } from 'react';
import Product from '../products/product';
import axios from 'axios';
import {connect} from 'react-redux';
class CollectionPage extends Component {
   render() {
     
        const collectiontitle = this.props.match.params.title.toLocaleLowerCase();

      
      const collection = this.props.collections.filter(c =>c.name.toLocaleLowerCase() == collectiontitle);
                      
          const collectionId    = collection[0].id;
      const products = this.props.products.filter(p => p.id == collectionId);
      

        return (
            <React.Fragment>
                <div className="container">
        <h1>{collectiontitle}</h1>
                    <div className="row">
                        {
                            
                            products.map(product => {
                                return (
                                    <div className="col-sm-4">
                                        
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
            </React.Fragment>
        );
    }
}
const mapStateToProps=(state)=>{
return {

    products: state.products,
    collections: state.collections
}
}
export default connect(mapStateToProps)(CollectionPage);