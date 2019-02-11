import { UPDATE_DATA } from '../actions/sort';

const initialState = {
  sortData: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        sortData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;