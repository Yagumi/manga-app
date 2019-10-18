import { MANGA_COUNT_UP, MANGA_COUNT_DOWN, MANGA_COUNT_RESET } from '../actions/actionCreators';

const initialState = { count: 0 };
function mangaCount(state = initialState, action) {
  switch (action.type) {
    case MANGA_COUNT_UP:
      return { ...state, count: state.count + 10 };
    case MANGA_COUNT_DOWN:
      return { ...state, count: state.count - 10 };
    case MANGA_COUNT_RESET:
      return { ...state, count: action.count };
    default:
      return state;
  }
}
export default mangaCount;
