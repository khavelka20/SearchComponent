//Action Types
export const ActionTypes = {
  SHOW_SEARCH_CONTAINER: "SHOW_SEARCH_CONTAINER",
  SEARCH_CHANGE: "SEARCH_CHANGE"
};

//Action Creators
export function showSearchContainer(show) {
  return { type: ActionTypes.SHOW_SEARCH_CONTAINER, show };
}

export function searchChange(search) {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    search
  };
}
