import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import Dashboard from './Components/Dashboard/Dashboard'



export default (
    <Switch>
        <Route  exact path='/' component={Auth}/>
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Post} path='/post' />
        <Route component={Form} path='/form' />
        
    </Switch>
)