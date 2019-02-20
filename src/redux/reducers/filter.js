import { SET_FILTER, VISIBILITY_FILTER } from '../actions/typings';

const initialState = VISIBILITY_FILTER.ALL;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;
      return filter;
    }
    default: return state;
  }
}
