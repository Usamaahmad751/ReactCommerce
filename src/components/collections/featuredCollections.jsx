import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class FeaturedCollections extends Component {
    render() { 
        return ( 

            <React.Fragment>
<div className="featured-c-wrapper mb-5 container">
<h2 className="text-center mb-5">Featured Collecions</h2>
<div className="row">

    {
        this.props.collections.map(collection=> 
            <div className="col-sm-4">
<Link to={`collection/${collection.name.toLocaleLowerCase()}`}> 
<div className="image-wrapper">
                    <img src={collection.imageLink}  alt="Avatar" className="image" />
  <div className="overlay">
        <div className="text">{collection.name}</div>
  </div>
</div>
</Link>
</div>
)
    }

</div>

</div>
            </React.Fragment>
         );
    }
}
const mapStateToProps=(state)=>{
return {
    collections : state.collections
}

}
 
export default connect(mapStateToProps)(FeaturedCollections);