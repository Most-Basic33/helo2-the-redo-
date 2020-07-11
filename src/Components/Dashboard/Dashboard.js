import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            showPost:true,
            post:[],
            url:'/api/post/'



        }
        
    }
    componentDidMount() {
        setTimeout(() => {
          this.getPost()
        },1333);
       
      }
    getPost=()=>{
        const {url} = this.state;
        axios.get(`${url}`)
        .then(res =>{
            this.setState({
                post:res.data
            })
        })
       
    }
    checkBox=()=>{
        const {showPost} = this.state;
            this.setState({
                showPost:!showPost
            })
    }
    handleChange=(prop, val)=> {
        this.setState({ [prop]: val });
      }
      //post_id, user_id, post_url
    render() {
        console.log(this.state.showPost)
        const {post} = this.state;
        const mappedPosts = post.map((posts, index)=>{
            return(
                <div key={index}>
                <p>{posts.post_id}</p>
                <p>{posts.user_id}</p>
                <img src={posts.post_url} alt='whateva they entered'/>
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
            Title:
                <input />
                    <div className='image-box' >
                        <img />
                        </div>
                        Image url:
                        <input />
                        <div className='content-box' >
                           {mappedPosts}
                </div>
                <button>Post</button>
                  
                </div>
            </div>
        )
    }
}
export default Dashboard