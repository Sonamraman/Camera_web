import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    // const isAuth = true;
    return (
        <>
            {/* <Route {...rest} render={()=>isAuth ? (children) : (<Redirect to={'/'}/>)}/> */}
            <Route {...rest} render={(props) =>(
                isAuthenticated
                 ?
                 (<Component {...props}/>) 
                 : 
                 (<Redirect to={'/'}/>)
                //  (<Redirect to={{pathname: '/sigup',state: {from: props.location}}}/>)
            )}/>
        </>
    )
}

export default PrivateRoute
