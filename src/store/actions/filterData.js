import * as actionTypes from "../actions/actionTypes";

export const updateSearch = (keyword) => ({
  type: actionTypes.UPDATE_SEARCH,
  payload: keyword,
});
export const updateEvenFilter = (isOnlyEven) => ({
  type: actionTypes.UPDATE_ONLY_EVEN_FILTER,
  payload: isOnlyEven,
});
export const updatePage = (page) => ({
  type: actionTypes.UPDATE_PAGE,
  payload: page,
});
export const incrementPage = () => ({ type: actionTypes.INCREMENT_PAGE });
export const updateCountry = (countryId) => ({
  type: actionTypes.UPDATE_COUNTRY,
  payload: countryId,
});
