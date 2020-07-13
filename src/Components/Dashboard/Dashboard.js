import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { connect } from 'react-redux'

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
            newPost = post.filter((userPost, index) => userPost === this.props.user['user_id'])
        }
        console.log(newPost)
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
    handleDelete=()=>{
       const {url} = this.state
       const user_id = this.props.user.user_id
        //const {id}= req.params;
axios.delete(`${url}${user_id}`)
.then(()=>this.state.getUserPost())
.catch(err=>console.log(err))
    }
    //post_id, user_id, post_url
    render() {
        const { post, userPost } = this.state;
      //  console.log(this.props.user.user_id)


        const userMappedPost = userPost.map((posts, index) => {
            return (
                <div key={index} >
                    <p>Post_Id:{posts.post_id}</p>
                    <p>User_Id:{posts.user_id}</p>
                    <p>Content:{posts.content}</p>
                   <img src={posts.post_url} alt='whateva they entered' />
                   <b onClick={this.handleDelete}>X</b>
                </div>
            )
        })
        const mappedPosts = post.map((posts, index) => {
            return (
                <div key={index}>
                    <p>Post_Id:{posts.post_id}</p>
                    <p>User_Id:{posts.user_id}</p>
                    <p>Content:{posts.content}</p>
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
            
                        {userMappedPost}
                    {mappedPosts}  
                <div>
              
                </div>
                   

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