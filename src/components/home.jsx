import React, { Component } from 'react';
import axios from 'axios';
import Slider from './slider/slider';
import FeaturedProducts from './products/featuredProducts';
import FeaturedBlog from './blogs/featuredBlog';
import Footer from './footer/footer';
import FeaturedCollections from './collections/featuredCollections';
class Home extends Component {
    state = {
        content : []
    }
   
    render() {
        const {handleAddToCart} = this.props;
        return (
            <React.Fragment>
<Slider />
<FeaturedProducts order={handleAddToCart}/>
<FeaturedCollections />
<FeaturedBlog />
                <Footer />
           

        </React.Fragment>

        );
    }
}

export default Home;
