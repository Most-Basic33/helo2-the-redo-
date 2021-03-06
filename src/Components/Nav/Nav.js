import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { getUser, clearUser } from '../../ducks/reducer'
import { Link } from 'react-router-dom'
import './Nav.css'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount(){
        this.logMeIn()

    }
    logMeIn=()=>{
        axios.get(`/api/me/`)
        .then(res=>{
           // console.log(res.data,"Nav res.data")
           this.props.getUser(res.data); 
        })
    }
    handleLogout = () => {
        axios.get('/api/logout/')
        .then(() => {
           // console.log(this.props)
            this.props.clearUser()
        }).catch(err=>console.log(err, "You messed up on da logout???"))
    }
    render() {
        const { username, profile_picture } = this.props.user
        //  console.log(this.props.user.profile_picture)
        //  console.log(this.props)
        return (
            <div className='main3'>
                <img src={profile_picture} alt='profile bot' />
                <h3>{username}</h3>
                <Link to='/dashboard' >  <span id='dashy' > Return To Dashboard</span></Link>
                <ul id='list'>
                <Link to='/form' > <button>New Post</button></Link>
                <Link to='/post' > <button>Search Post</button> </Link>
             <Link to='/'><button onClick={this.handleLogout}>Logout</button></Link>
             </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user

    }
}
//const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, { clearUser, getUser })(Nav)
