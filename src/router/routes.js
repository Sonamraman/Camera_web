import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Account from '../pages/Account'
import Activity from '../pages/Activity'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Newdevice from '../pages/Newdevice'
import Share from '../pages/Share'
import Signup from '../pages/Signup'
import Subscription from '../pages/Subscription'
import Subscription2 from '../pages/Subscription2'
import ViewAll from '../pages/VewAll'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/signup' component = {Signup}/>
            <Route exact path = '/account' component = {Account}/>
            <Route exact path = '/device' component = {Newdevice}/>
            <Route exact path = '/activity' component = {Activity}/>
            <Route exact path = '/viewall' component = {ViewAll}/>
            <Route exact path = '/subscription' component = {Subscription}/>
            <Route exact path = '/subscription2' component = {Subscription2}/>
            <Route exact path = '/share' component = {Share}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
