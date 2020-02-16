import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CollectionItem extends Component {
    state = {  }
    render() { 
        const { name, imageLink } = this.props;
        return ( 
<Link to={`collection/${name.toLocaleLowerCase()}`}> 
<div className="image-wrapper">
                    <img src={imageLink}  alt="Avatar" className="image" />
  <div className="overlay">
        <div className="text">{name}</div>
  </div>
</div>
</Link>
         );
    }
}
 
export default CollectionItem;