import { ActionTypes } from "../actions/actions";

const initialState = {
  showResults: false,
  search: ""
};

function searchReducers(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ActionTypes.SEARCH_CHANGE) {
    newState.search = action.search;
    
    if (action.search.length > 0) {
      newState.showResults = true;
    } else {
      newState.showResults = false;
    }
  }

  return newState;
}
export default searchReducers;
