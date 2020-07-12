import React, {Component} from 'react'
import './Form.css'

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:'',
            imageUrl:'',
            content:''
        }
    }
        handleChange=(e)=> {
            this.setState({ [e.target.name]: e.target.value});
          }
    
    render(){
        console.log(this.state.imageUrl)
        return(
            <form className='outside'>
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
                        <img src={this.state.imageUrl} alt='image'/>
                        <p>{this.state.content}</p>
                    </div>
                        Image url:
                        <input 
                              type='text'
                        placeholder='image url'
                        name='imageUrl'
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
export default Form