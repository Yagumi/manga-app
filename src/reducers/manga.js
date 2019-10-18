import { FETCH_MANGA_DATA_SUCCESS } from '../actions/actionCreators';

const initialState = { mangaList: [], mangaLength: 0 };
function manga(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANGA_DATA_SUCCESS:
      return { ...state, mangaList: action.mangaData.data, mangaLength: action.mangaLength };

    default:
      return state;
  }
}
export default manga;
