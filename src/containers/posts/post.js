import React, {Component} from 'react'
import axios from 'axios';
import './post.css';

class Post  extends Component {

    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({posts: response.data});
        });
    }

    render(){
        return(<div className="post-container">
            <ul>
                {
                    this.state.posts.map(post =>
                        <div className="post-description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                }
            </ul>
        </div>);
    }
}

export default Post;