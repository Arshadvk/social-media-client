const initialState = false

const loadingReducer = (state = initialState , action)=>{
    const action ={
        startLoading:()=> true,
        stopLoading:()=> false ,
    }
    const actionFunction = action[action.type]
    return actionFunction ? actionFunction():state;
}

export default loadingReducer