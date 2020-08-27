import * as actionTypes from "../actions/actionTypes"
export const initialState = {
    search: '',
    isOnlyEven: false,
    countryId: 0,
    page: 1
  }
export const updateSearch=(state,action)=>{
    return{
        ...state,
        search: action.payload,
        page: 1
    }
}
export const updateOnlyEven=(state,action)=>{
    return{
        ...state,
          isOnlyEven: action.payload
    }
}
export const updatePage=(state,action)=>{
    return{
        ...state,
          isOnlyEven: action.payload
    }
}
export const updateIncrementPage=(state,action)=>{
    return{
        ...state,
        page: state.page + 1
        
    }
}

export const updateCountry=(state,action)=>{
    return{
        ...state,
          countryId: action.payload,
          page: 1
    }
}

  export default function filterReducer(state = initialState, action) {
    switch(action.type) {
      case actionTypes.UPDATE_SEARCH:
        return updateSearch(state,action)
      case actionTypes.UPDATE_ONLY_EVEN_FILTER:
        return updateOnlyEven(state,action)
      case actionTypes.UPDATE_PAGE:
        return updatePage(state,action)   
      case actionTypes.INCREMENT_PAGE:
        return updateIncrementPage(state,action)
      case actionTypes.UPDATE_COUNTRY:
        return updateCountry(state,action)
      default:
        return state
    }
  }