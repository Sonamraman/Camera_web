export const changeMode = ()=>({
    type:"changeMode"
})

export const incNumber = (num) => ({
    type:"Increment",
    payload: num
})

export const decNumber = () => {
    return {
        type:"Decrement"
    }
}