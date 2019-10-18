import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mangaCountUp, mangaCountDown } from '../actions/actionCreators';

import Pagination from '../components/Pagination';

const PaginationParent = ({
  updateMangaCountUp,
  updateMangaCountDown,
  mangaLength,
  mangaCount,
}) => {
  const handlePrev = () => {
    updateMangaCountDown();
  };
  const handleNext = () => {
    updateMangaCountUp();
  };
  return (
    <Pagination
      handlePrev={handlePrev}
      handleNext={handleNext}
      mangaLength={mangaLength}
      mangaCount={mangaCount}
    />
  );
};

const mapStateToProps = store => {
  return {
    mangaGenre: store.mangaGenre.genre,
    mangaLength: store.manga.mangaLength,
    mangaCount: store.mangaCount.count,
  };
};

const mapDispatchToProps = {
  updateMangaCountUp: mangaCountUp,
  updateMangaCountDown: mangaCountDown,
};

PaginationParent.propTypes = {
  updateMangaCountUp: PropTypes.func.isRequired,
  updateMangaCountDown: PropTypes.func.isRequired,
  mangaLength: PropTypes.number.isRequired,
  mangaCount: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationParent);
