import changeNumber from './ChangeNumber'
import Housecar from './Housecar'

import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    changeNumbers: changeNumber,
    houseCar: Housecar,
})

export default RootReducer