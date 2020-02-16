import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class FeaturedBlog extends Component {
 
    render() { 
        return ( 
<React.Fragment>

<div class="container">
  <div class="well">
      <h2 className="text-center mb-5">Featured Blogs</h2>
   <div className="blog row">
{ 

this.props.blogs.map(blog=>{
return(

    <div key={blog.blogId}className="col-sm-6 py-3">
<Link to={`/blogs/${blog.title.replace(/ +/g, "")}`}>
    <div className="col-sm-12 p-0 img-wrapper"> 
    <img src={blog.ImageLink} />
</div>

</Link>

<div className="col-sm-12 blog-content">
<Link to={`/blogs/${blog.title.replace(/ +/g, "")}`}>
   <div className="blog-title">{blog.title}</div>
   </Link>
<div className="blog-content">{blog.description}</div>
<div className="blog-actions row">
    <div className=" col-6"><button className="btn btn-default">Comment</button></div>
<div className="likes col-6"><button className={`btn btn-default ${blog.isLiked ? "btn-primary" : ""}`} onClick={()=>this.props.handleLikes(blog.likes, blog.blogId)}>{blog.isLiked ? <i class="far fa-thumbs-up"></i>: <i class="far fa-thumbs-up"></i>} <span className="badge badge-dark">{blog.likes}</span></button></div>
</div>
</div>
</div>
)
})

}
</div>
</div>
</div>
</React.Fragment>

         );
    }
}
 const mapStateToProps=(state)=>{

return{

    blogs: state.blogs
}
 }
 const mapDispatchToProps =(dispatch)=>{
    return {
    handleLikes: (likes,id)=>{dispatch({type:'HANDLE_LIKE',payload:likes,index:id})}
    }
     }
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedBlog);