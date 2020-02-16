import React, { Component } from 'react';
import { connect } from 'react-redux';
class BlogPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            blogs: this.props.blogs,
            comments: [],
            commentContent:''
        
        }
    }
    handleComments = (e) => {

        e.preventDefault();
        const { comments, blogs } = this.state;
        const { title } = this.props.match.params
        const id = blogs.filter(b => b.title.replace(/ +/g, "") == title)[0].blogId;
        blogs[id - 1].comments = comments;
        this.setState({ blogs: blogs });
        this.setState({commentContent:''})
    }

    handleCommentInput = (e) => {
        const { blogs } = this.props
        const { title } = this.props.match.params
        const initialComments = blogs.filter(b => b.title.replace(/ +/g, "") == title).map(b => b.comments)
        this.setState({commentContent: e.target.value})
        const newComment = [...initialComments[0], e.target.value]
        this.setState({ comments: newComment })

    }

    render() {
        const blogTitle = this.props.match.params.title
        const blog = this.props.blogs.filter(b => b.title.replace(/ +/g, "") === blogTitle)[0];

        return (

            <React.Fragment>
                <div className="row blog-wrapper">
                    <div className="blog col-12">
                        <div className="blog-image">
                            <img src={blog.ImageLink} />
                        </div>
                        <div className="blog-title">{blog.title}</div>
                        <div className="blog-description">{blog.description}</div>
                        <div className="blog-actions row">
                            <button className={`col-12 like text-center ${blog.isLiked ? "btn-primary" : ""}`} onClick={() => this.props.handleLikes(blog.likes, blog.blogId)}>{blog.isLiked ? <i class="far fa-thumbs-up"></i> : <i class="far fa-thumbs-up"></i>}</button>
                        </div>
                        <div><i class="far fa-thumbs-up"></i> {blog.likes}</div>

                        <div className="comment-box">
                            <form onSubmit={this.handleComments} className="row ">
                                <input onChange={this.handleCommentInput} type="text" placeholder="Comment" className="col-12 comment-box" value={this.state.commentContent}/>
                            </form>
                            <div className="comments">
                                {
                                  
                                    blog.comments.map(c => {
                                    if(c===""){
                                        return null
                                     }
                                    else{
                                        return (
                                            <div className="comment">{c }</div>
                                        )
                                    }
                                          
                                   })
                                }

                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLikes: (likes, id) => { dispatch({ type: 'HANDLE_LIKE', payload: likes, index: id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);