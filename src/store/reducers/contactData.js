import * as actionTypes from "../actions/actionTypes"
export const initalState={
    data:[],
    loading:false,
    hasErrors:false,
}
const getContacts=(state, action)=>{
    return{
        ...state,
        loading:true
    }
}
const getContactsSuccess=(state,action)=>{
    return{
        ...state,
        loading:false
    }
}
const getContactsFailure=(state, action)=>{
    return{
        ...state,
        loading:false,
        hasErrors:true
    }
}
export default function contactData (state=initalState,action){
    switch(action.type){
        case actionTypes.GET_CONTACTS:
            return getContacts(state,action)
        case actionTypes.GET_CONTACTS_SUCCESS:
            return getContactsSuccess(state,action)
        case actionTypes.GET_CONTACTS_FAILURE:
            return getContactsFailure(state,action)
        case actionTypes.RESET_CONTACTS:
            return initalState
        default:
            return state
    }
}