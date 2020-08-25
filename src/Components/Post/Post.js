import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import './Post.css';
import {foundPost} from '../../ducks/reducer'

const Post =(props)=> {
    
        const [postId, setPostId] = useState([])
      
           const [foundPost, setFoundPost] = useState([])
            const [allPost, setAllPost] = useState([])
            //const [test, setTest] = useState('')

            let found = [];
        useEffect(()=>{
            axios.get(`/api/post`)
            .then((res)=>{
                setAllPost(res.data)
              //  setFoundPost(found)
              setFoundPost(props.found)

            })
        },[postId])
    

   const handleSearch = () => {
     
     console.log('hit')
    console.log(postId)
    found = allPost.find(e => e.post_id === +postId)
    
    setFoundPost(found)
    props.foundPost(found)
     console.log(foundPost)
     console.log(found)
         
    }

      console.log(props, "props")
     console.log(foundPost)
    //  const mapped = foundPost.map((post, index)=>{
    //      return (
    //          <div key={index} >
    //         <h4>{post.post_id}</h4>
    //         <h4>{post.user_id}</h4>
    //         <h2>{post.title}</h2>
    //         <b>{post.content}</b>
    //         <img src={post.profile_picture} alt='profile robot' />
    //          </div>
    //      )
    //  })
      console.log(allPost)
       //  console.log(.foundPost['user_id'])
        return (
            <div className="outside-box">
                <div className='input-area'>
                   
                        <div><h1>Search Post by Post ID</h1></div> <input
                            type='number'
                            name='postId'
                            placeholder='search post'
                            required
                            onChange={(e)=>setPostId(e.target.value)}
                        />
                        <button onClick={ handleSearch} >Search</button>
                    
                </div>
             
            {!foundPost ? null : <div id='divid' >  <h3>{foundPost.post_id}</h3>
                    <h3>{foundPost.user_id}</h3>
                    <h3>{foundPost.title}</h3>
                    <b>{foundPost.content}</b>
                    <img src={foundPost.profile_picture} alt="Whatever meme they created" /> </div>}    

            </div>

        )
    
        }
        const mapStateToProps = state =>{
         return{   
            user: state.user,
            found: state.found
         }
        }
export default connect(mapStateToProps, {foundPost})(Post)