import React, {Component} from 'react'
import './Form.css'
import axios from 'axios'
import {connect} from 'react-redux'

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:'',
            postUrl:'',
            content:'',
            user:{}
        }
    }
    handleClear=()=>{
        this.setState({
            title:'', postUrl:'', content:''
        })
    }
addNewPost=()=>{
    const {postUrl} = this.state;
    const userId = this.props.user['user_id'];
    const body = {userId, postUrl};
    console.log(body)
    axios.post(`/api/post`, body)
    .then(()=>{
       this.handleClear()
    }).catch(err=>console.log(err))
}
        handleChange=(e)=> {
            this.setState({ [e.target.name]: e.target.value});
          }
    
    render(){
        console.log(this.props.user['user_id'])
       // console.log(this.state)
        return(
            <form onSubmit={this.addNewPost} className='outside'>
            <div className='form-box'>
            <div>
            Title:
                <input
                  type='text'
                        placeholder='Title'
                        name='title'
                        required
                        onChange={this.handleChange}
                 />
                    <div className='image-box' >
                    <p>{this.state.title}</p>
                        <img src={this.state.postUrl} alt='image'/>
                        <p>{this.state.content}</p>
                    </div>
                        Image url:
                        <input 
                              type='text'
                        placeholder='image url'
                        name='postUrl'
                        required
                        onChange={this.handleChange}
                        />
                        
                    <div className='content-box' >
                    Content:
                    <input 
                              type='text'
                        placeholder='content'
                        name='content'
                        required
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Post</button>

                </div>
            </div>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Form)