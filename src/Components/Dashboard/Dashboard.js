import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { connect } from 'react-redux'
import Form from '../Form/Form'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            showPost: false,
            post: [],
            url: '/api/post/',
            userPost: []



        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.getPost()
        }, 1333);

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.showPost !== this.state.showPost) {
            this.getUserPost();
        }

    }

    getUserPost = () => {
        const { url, post, showPost } = this.state
        let newPost = post;
        if (showPost) {
            newPost = post.filter((userPost, index) => userPost.user_id == this.props.user.user_id)
        }
        this.setState({
            userPost: newPost
        })
    }
    getPost = () => {
        const { url } = this.state;
        axios.get(`${url}`)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })

    }
    checkBox = () => {
        const { showPost } = this.state;
        this.setState({
            showPost: !showPost
        })
    }
    handleChange = (prop, val) => {
        this.setState({ [prop]: val });
    }
    //post_id, user_id, post_url
    render() {

        const { post, userPost } = this.state;
        const userMappedPost = userPost.map((posts, index) => {
            return (
                <div key={index} >
                    <p>{posts.post_id}</p>
                    <p>{posts.user_id}</p>
                    <img src={posts.post_url} alt='whateva they entered' />
                </div>
            )
        })
        const mappedPosts = post.map((posts, index) => {
            return (
                <div key={index}>
                    <p>{posts.post_id}</p>
                    <p>{posts.user_id}</p>
                    <img src={posts.post_url} alt='whateva they entered' />
                </div>
            )
        })
        
        return (
            <div className='outter-box'>
                <div className='main-box'>
                    <h1>New Post</h1>
               Show my Post:<input
                        type='checkbox'
                        name='showPost'
                        id='checkBox'
                        checked={this.state.showPost}
                        onChange={this.checkBox}
                    />
                    { userMappedPost } 
                        { mappedPosts }
    


                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Dashboard)