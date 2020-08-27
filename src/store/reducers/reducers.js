import filterDadta from "./filterData";
import contactData from "./contactData";
import { combineReducers } from "redux";

const reducers = combineReducers({
  filter: filterDadta,
  contacts: contactData,
});

export default reducers;
