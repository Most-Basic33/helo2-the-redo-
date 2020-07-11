import React from 'react';
 import routes from './routes'
import './App.css';
import Nav from './Components/Nav/Nav'
import {withRouter} from 'react-router-dom'//giving aceess to location


function App(props) {
  return (

    <div className="App">
{props.location.pathname === '/'?null:<Nav /> }
{routes}
     </div>
  );
}

export default withRouter(App);
