import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllGenres, fetchMangaData } from '../actions/actionCreators';

import GenresParent from './GenresParent';
import MangaListParent from './MangaListParent';
import PaginationParent from './PaginationParent';

const Home = ({ mangaCount, mangaGenre, fetchData, fetchGenres, mangaList }) => {
  useEffect(() => {
    const getAllGenres = () => {
      fetchGenres('https://kitsu.io/api/edge/categories?page[limit]=500');
    };
    getAllGenres();
  }, [fetchGenres]);
  useEffect(() => {
    const getAllGenres = () => {
      fetchData(
        `https://kitsu.io/api/edge/manga?filter[categories]=${mangaGenre}&page[limit]=10&page[offset]=${mangaCount}/`,
      );
    };
    getAllGenres();
  }, [mangaGenre, mangaCount]);
  return (
    <div>
      <GenresParent />
      <PaginationParent />
      <MangaListParent mangaList={mangaList} />
      <PaginationParent />
    </div>
  );
};

const mapStateToProps = store => {
  return {
    mangaCount: store.mangaCount.count,
    mangaGenre: store.mangaGenre.genre,
    mangaList: store.manga.mangaList,
  };
};
const mapDispatchToProps = {
  fetchGenres: fetchAllGenres,
  fetchData: fetchMangaData,
};

Home.propTypes = {
  mangaCount: PropTypes.number.isRequired,
  mangaGenre: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  mangaList: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
