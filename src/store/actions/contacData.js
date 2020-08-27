import * as actionTypes from "../actions/actionTypes";
import Axios from "axios";

export const getContacts = () => {
  return {
    type: actionTypes.GET_CONTACTS,
  };
};
export const getContactsSuccess = (contacts) => {
  return {
    type: actionTypes.GET_CONTACTS_SUCCESS,
    payload: contacts,
  };
};
export const getContactsFailure = () => {
  return {
    type: actionTypes.GET_CONTACTS_FAILURE,
  };
};
export const resetContacts = () => {
  return {
    type: actionTypes.RESET_CONTACTS,
  };
};
export function fetchContactData(countryId, queryStr, page) {
  return async (dispatch) => {
    if (page === 1) dispatch(resetContacts());
    dispatch(getContacts());

    const params = {
      companyId: actionTypes.DEFAULT_COMPANY_ID,
      page: page,
    };
    if (countryId !== 0) params["countryId"] = countryId;
    if (queryStr.length > 0) params["query"] = queryStr;
    const config = {
      headers: {
        Authorization: `Bearer ${actionTypes.AUTH_TOKEN}`,
      },
      params: params,
    };

    try {
      console.log("getting :", JSON.stringify(params));
      const response = await Axios.get(
        "https://api.dev.pastorsline.com/api/contacts.json",
        config
      );
      console.log(response.data.contacts_ids.join(" "));
      const contacts = [];
      for (let id in response.data.contacts) {
        contacts.push(response.data.contacts[id]);
      }
      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
}
