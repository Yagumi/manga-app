export const FETCH_MANGA_DATA_REQUEST = 'FETCH_REQUEST';
export const FETCH_MANGA_DATA_SUCCESS = 'FETCH_MANGA_DATA_SUCCESS';
// export const FETCH_MANGA_DATA_FAILURE = 'FETCH_MANGA_DATA_FAILURE';

export function mangaDataFetchDataSuccess(mangaData, mangaLength) {
  return {
    type: FETCH_MANGA_DATA_SUCCESS,
    mangaData,
    mangaLength,
  };
}

export function fetchMangaData(url) {
  return dispatch => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json(res))
      .then(mangaData => dispatch(mangaDataFetchDataSuccess(mangaData, mangaData.data.length)));
  };
}

export const MANGA_COUNT_UP = 'MANGA_COUNT_UP';

export function mangaCountUp(count) {
  return {
    type: MANGA_COUNT_UP,
    count,
  };
}

export const MANGA_COUNT_DOWN = 'MANGA_COUNT_DOWN';

export function mangaCountDown(count) {
  return {
    type: MANGA_COUNT_DOWN,
    count,
  };
}

export const MANGA_COUNT_RESET = 'MANGA_COUNT_RESET';

export function mangaCountReset(count) {
  return {
    type: MANGA_COUNT_RESET,
    count,
  };
}
export const FETCH_ALL_GENRES_REQUEST = 'FETCH_ALL_GENRES_REQUEST';
export const FETCH_ALL_GENRES_SUCCESS = 'FETCH_ALL_GENRES_SUCCESS';

export function genresFetchSuccess(genresList) {
  return {
    type: FETCH_ALL_GENRES_SUCCESS,
    genresList,
  };
}

export function fetchAllGenres(url) {
  return dispatch => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.log(res);
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json(res))
      .then(genresList => dispatch(genresFetchSuccess(genresList.data)));
  };
}

export const SET_MANGA_GENRE = 'SET_MANGA_GENRE';

export function setMangaGenre(genre) {
  return {
    type: SET_MANGA_GENRE,
    genre,
  };
}

export const TOGGLE_GENRES_BUTTON = 'TOGGLE_GENRES_BUTTON';

export function toggleGenresButton(isOpen) {
  return {
    type: TOGGLE_GENRES_BUTTON,
    isOpen,
  };
}

export const SET_SINGLE_MANGA_ID = 'SET_SINGLE_MANGA_ID';

export function setSingleMangaID(mangaId) {
  return {
    type: SET_SINGLE_MANGA_ID,
    mangaId,
  };
}

export const SET_SINGLE_MANGA_DATA = 'SET_SINGLE_MANGA_DATA';

export function setSingleMangaData(data) {
  return {
    type: SET_SINGLE_MANGA_DATA,
    data,
  };
}

export const TOGGLE_MANGA_ISLOAD = 'TOGGLE_MANGA_ISLOAD';

export function toggleIsLoad(isLoad) {
  return {
    type: TOGGLE_MANGA_ISLOAD,
    isLoad,
  };
}

export function fetchSingleMangaData(url) {
  return dispatch => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json(res))
      .then(data => dispatch(setSingleMangaData(data.data)))
      .then(() => dispatch(toggleIsLoad(true)));
  };
}
