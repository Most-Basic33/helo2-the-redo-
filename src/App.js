import React from 'react';
 import routes from './routes'
import './App.css';
import Nav from './Components/Nav/Nav'
import {withRouter} from 'react-router-dom'//giving aceess to location


function App(props) {
  return (

    <div className="App">
    <div className='main-view'>
{props.location.pathname === '/'?null:<Nav 
history={props.location}
 /> }
{routes }
</div>
     </div>
  );
}

export default withRouter(App);
