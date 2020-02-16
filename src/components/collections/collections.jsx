import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import CollectionItem from './collectionItem';
class Collections extends Component {
  
    render() {
        return (<React.Fragment>
            <h1 className="jumbotron">Collections</h1>
            <div className="container">
                <div className="row">
                    {
                        this.props.collections.map(collection => {
                       
                            return (
                                <div className="col-sm-4">

                                    <CollectionItem
                                        imageLink={collection.imageLink}
                                        name={collection.name}
                                        id={collection.collectionId}
                                        description={collection.description}
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
const mapStateToProps = state =>{
return {

collections: state.collections

}

}
export default connect(mapStateToProps)(Collections);