import { combineReducers } from 'redux';
import manga from './manga';
import mangaCount from './mangaCount';
import mangaGenre from './mangaGenre';
import singleMangaPage from './singleManga';

const rootReducer = combineReducers({ manga, mangaCount, mangaGenre, singleMangaPage });
export default rootReducer;
