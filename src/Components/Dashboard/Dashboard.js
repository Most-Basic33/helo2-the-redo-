import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { connect } from 'react-redux'
import {deletePost} from '../../ducks/reducer'
 

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            showPost:true,
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
            this.getPost()
        }

    }

    getUserPost = () => {
        const { post, showPost } = this.state
        let newPost=[];
        if (showPost) {
           newPost = post.filter((userPost, index) =>{
               console.log(userPost)
         return userPost === this.props.user['user_id']
           } )
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
deletePost=(id )=>{
   //  id=this.state.post_id
 deletePost(id)
let newPost = [...this.state.post]
let index=newPost.findIndex((ele,i)=>ele.post_id===id)
  newPost.splice(index,1);
console.log(newPost)
this.setState({
    post:newPost
})

}
    checkBox = () => {
        const { showPost, post } = this.state;
       let newPost=[];
        if (showPost) {
           newPost = post.filter((userPost, index) =>{

          return  userPost.user_id === this.props.user['user_id']})
        }
        console.log(newPost)
        this.setState({
            showPost: !showPost,
            userPost:newPost
        })      
    
    }
    handleChange = (prop, val) => {
        this.setState({ [prop]: val });
    }

    //post_id, user_id, post_url
    render() {
        const { post, userPost } = this.state;
       console.log(this.props.user)



        const userMappedPost = userPost.map((posts, index) => {
            
            return (
                <div key={index} >
                    <p>Post_Id:{posts.post_id}</p>
                    <p>User_Id:{posts.user_id}</p>
                    <p>Title:{posts.title} </p>
                    <p>Content:{posts.content}</p>
                   <img src={posts.post_url} alt='whateva they entered' />
                   <b onClick={()=>this.deletePost(posts.post_id)}>X</b>
                </div>
            )
        })
        const mappedPosts = post.map((posts, index) => {
            console.log(posts)
            return (
                <div key={index}>
                    <small id='tiny' >Post_Id:{posts.post_id}</small>
                    <p>User_Id:{posts.user_id}</p>
                    <p>{posts.title} </p>
                    <p>Content:{posts.content}</p>
                   <img src={posts.post_url} alt='whateva they entered' />
                   <button onClick={()=> this.deletePost(posts.post_id)}>Delete Post</button>
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

    {this.state.showPost?mappedPosts:userMappedPost}
   
<div>

</div>
   

</div>
</div> 
            
           
        )
    }
}
 
export default connect(state=>state,{deletePost})(Dashboard)

 