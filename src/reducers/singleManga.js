import {
  SET_SINGLE_MANGA_ID,
  SET_SINGLE_MANGA_DATA,
  TOGGLE_MANGA_ISLOAD,
} from '../actions/actionCreators';

const initialState = {
  id: 0,
  data: {},
  isLoad: false,
};

function singleMangaPage(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_MANGA_ID:
      return { ...state, id: action.mangaId };
    case SET_SINGLE_MANGA_DATA:
      return { ...state, data: action.data };
    case TOGGLE_MANGA_ISLOAD:
      return { ...state, isLoad: action.isLoad };
    default:
      return state;
  }
}

export default singleMangaPage;
