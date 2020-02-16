import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class FeaturedProducts extends Component {
    render() {
        const {order} = this.props;
        return (
            <React.Fragment>
                <div className="container featured-wrapper">
                <div className="featured-p-heading text-center mb-5"><h2>Best Selling Products</h2></div>

                    <div className="row">
                        {
                
                            this.props.products.map(productDb => {
                                return (

                                    <div className="col-md-3">
                                        <figure className="card card-product">
                                        <Link to={`/products/${productDb.id}/details`}>   <div className="img-wrap">
                                                <img src={productDb.imageLink}/>
                                            </div>
                                            </Link>
                                            <figcaption className="info-wrap">
                                                <h6 className="title text-dots text-center"><Link to={`/products/${productDb.id}/details`}>{productDb.title}</Link> </h6>
                                                
                                                    <div className="price-wrap text-center">
                                                        <span className="price-new h2">${productDb.priceNew}</span>
                                                        <del className="price-old">${productDb.priceOld}</del>
                                                    </div>
                                                    <div className="action-wrap">
                                                    <button onClick={()=>this.props.handleAddToCart(productDb,1)} className="btn w-100 btn-primary ">Order</button>
                                                </div>
                                            </figcaption>
                                        </figure>
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
const mapStateToProps = (state) =>{
return {
    products: state.products
} 
}
const mapDispatchToProps =(dispatch)=>{
    return {
    handleAddToCart: (product,itemsCount)=>{dispatch({type:'HANDLE_CART',payload:{product,itemsCount}})},
}
     }
export default connect(mapStateToProps,mapDispatchToProps )(FeaturedProducts);

