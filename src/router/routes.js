import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Account from '../pages/account/Account'
import Activity from '../pages/activity/Activity'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Changepass from '../pages/login/Changepass'
import Forgetpassword from '../pages/login/Forgetpassword'
import Newdevice from '../pages/device/Newdevice'
import Share from '../pages/Share'
import Signup from '../pages/Signup'
import Subscription from '../pages/Subscription/Subscription'
import Subscription2 from '../pages/Subscription/Subscription2'
import ViewAll from '../pages/VewAll'
import CameraScreen from '../pages/camera/CameraScreen'
import Camerafullscreen from '../pages/camera/Camerafullscreen'
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <PublicRoute restricted={false} component={Login} path="/" exact />
            {/* <Route exact path = '/' component = {Login}/> */}
            <Route exact path = '/forgetpassword' component = {Forgetpassword}/>
            <Route exact path = '/changepass' component = {Changepass}/>
            {/* <Route exact path = '/signup' component = {Signup}/> */}
            <PublicRoute restricted={false} component={Signup} path="/signup" exact />
            <Route exact path = '/home' component = {Home}/>
            <Route exact path = '/account' component = {Account}/>
            <PrivateRoute exact path = '/device' component = {Newdevice}/>
            <Route exact path = '/activity' component = {Activity}/>
            <Route exact path = '/viewall' component = {ViewAll}/>
            <Route exact path = '/subscription' component = {Subscription}/>
            <Route exact path = '/subscription2' component = {Subscription2}/>
            <Route exact path = '/share' component = {Share}/>
            <Route exact path = '/camerascreen' component = {CameraScreen}/>
            <Route exact path = '/fullscreen' component = {Camerafullscreen}/>
            <Route path = '*' component = {()=>"404 Not Found"}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
