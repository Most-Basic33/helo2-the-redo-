import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import './Post.css'

class Post extends Component {
    constructor() {
        super();
        this.state = {
            postId: 0,
            foundPost: null,

        }
    }

    handleSearch = () => {
        const { postId } = this.state;
        axios.get(`/api/post/${postId}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    foundPost: res.data
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.state)
       // console.log(this.props, "props")
      // console.log(this.state.foundPost)
       //  console.log(this.state.foundPost['user_id'])
        return (
            <div className="outside-box">
                <div className='input-area'>
                    <form onSubmit={this.handleSearch}>
                        <div><h1>Search Post by Post ID</h1></div> <input
                            type='number'
                            name='postId'
                            placeholder='search post'
                            required
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleSearch} >Search</button>
                    </form>
                </div>
                {!this.state.foundPost ? null : <div>  <h3>{this.state.foundPost[0].post_id}</h3>
                    <h3>{this.state.foundPost[0].user_id}</h3>
                    <h3>{this.state.foundPost[0].title}</h3>
                    <img src={this.state.foundPost[0].post_url} alt="Whatever meme they created" /> </div>}

            </div>

        )
    }
}
export default connect(state => state)(Post)