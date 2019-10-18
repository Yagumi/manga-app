import {
  FETCH_ALL_GENRES_SUCCESS,
  SET_MANGA_GENRE,
  TOGGLE_GENRES_BUTTON,
} from '../actions/actionCreators';

const initialState = {
  genresList: [],
  genre: 'action',
  isOpen: false,
};
function mangaGenre(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_GENRES_SUCCESS:
      return {
        ...state,
        genresList: action.genresList,
      };
    case SET_MANGA_GENRE:
      return { ...state, genre: action.genre };
    case TOGGLE_GENRES_BUTTON:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
export default mangaGenre;
