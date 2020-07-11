import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import {getUser, clearUser} from '../../ducks/reducer'
import { Link } from 'react-router-dom'
 

class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
user:[]
        }
    }
    handleLogout = () =>{
        axios.get('/api/logout/').then(()=>{
            //  history.push('/')
            console.log(this.props)
          this.props.clearUser()
         // this.props.history.pathname('/')
        })
    }
    render(){
        const {username, profile_picture, id } = this.props.user
        console.log(this.props.user.profile_picture)
      //  console.log(this.state.user)
        return(
            <div>
            <img src={profile_picture} alt='profile bot'/>
            <p>{username}</p>
  <Link to='/'> <button>Home</button> </Link>
<button>New Post</button>
<button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}
 
 const mapStateToProps = (state) => {
    return {
        user: state.user

    }
}
export default connect(mapStateToProps, {clearUser})(Nav)
