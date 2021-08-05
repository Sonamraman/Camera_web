const initialState = 0

const changeNumber = (state = initialState, {type,payload})=>{
    switch(type){
      case "Increment" : return state + payload
      case "Decrement" : return state - 1
      default: return state;
    }
}

export default changeNumber