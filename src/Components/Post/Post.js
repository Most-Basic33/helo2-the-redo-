import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import './Post.css'

const Post =(props)=> {
    
        const [postId, setPostId] = useState(0)
            const [foundPost, setFoundPost] = useState(null)
            
        
    

   const handleSearch = () => {
        // const { postId } = ;
        axios.get(`/api/post/${postId}`)
            .then(res => {
                console.log(res.data)
                setFoundPost(res.data)
            //    setState({
            //         foundPost: res.data
            //     })
            })
    }
//   const  handleChange = (e) => {
    //    setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
   
        // console.log()
      console.log(props, "props")
      // console.log(.foundPost)
       //  console.log(.foundPost['user_id'])
        return (
            <div className="outside-box">
                <div className='input-area'>
                    <form onSubmit={handleSearch}>
                        <div><h1>Search Post by Post ID</h1></div> <input
                            type='number'
                            name='postId'
                            placeholder='search post'
                            required
                            onChange={(e)=>setPostId(e.target.value)}
                        />
                        <button onClick={handleSearch} >Search</button>
                    </form>
                </div>
                {!foundPost ? null : <div>  <h3>{foundPost[0].post_id}</h3>
                    <h3>{foundPost[0].user_id}</h3>
                    <h3>{foundPost[0].title}</h3>
                    <img src={foundPost[0].post_url} alt="Whatever meme they created" /> </div>}

            </div>

        )
    
        }
export default connect(state => state)(Post)