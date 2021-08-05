import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from '../../redux/action/action'

const IncDec = () => {
    const myState = useSelector(state => state.changeNumbers)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Counter</h1>
            <div>
                <button title="dec" onClick={()=> dispatch(decNumber())}><span> - </span></button>
                <input type="text" name="num" value={myState} style={{textAlign:"center"}}/>
                <button title="inc" onClick={()=> dispatch(incNumber(5))}><span> + </span></button>
            </div>
        </>
    )
}

export default IncDec
