import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RootReducer from '../reducer/RootReducer'

const configStore = () =>{

    const store = createStore(RootReducer,  composeWithDevTools(applyMiddleware(thunk))  )
    // const store = createStore(RootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
 
   return store;

}

export default configStore;