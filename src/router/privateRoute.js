import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isLogin } from '../utility/Auth';

// const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
//     // const isAuth = true
//     return (
//         <>
//             {/* <Route {...rest} render={()=>isAuth ? (children) : (<Redirect to={'/'}/>)}/> */}
//             <Route {...rest} render={(props) =>(
//                 isAuthenticated
//                  ?
//                  (<Component {...props}/>) 
//                  : 
//                  (<Redirect to={'/'}/>)
//                 //  (<Redirect to={{pathname: '/sigup',state: {from: props.location}}}/>)
//             )}/>
//         </>
//     )
// }

const PrivateRoute = ({component: Component, ...rest}) => {
    
    return (
        <>
            <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
        </>
    )
}

export default PrivateRoute
