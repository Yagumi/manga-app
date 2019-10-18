import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMangaGenre, mangaCountReset, toggleGenresButton } from '../actions/actionCreators';

import Genres from '../components/Genres';

const GenresParent = ({
  categoriesList,
  updateGenre,
  countReset,
  toggleButton,
  isOpen,
  mangaGenre,
}) => {
  const handleToggleGanresButton = () => {
    toggleButton();
  };
  const handleClick = e => {
    countReset(0);
    updateGenre(e.currentTarget.innerHTML.toLowerCase());
  };
  return (
    <Genres
      categoriesList={categoriesList}
      handleClick={handleClick}
      handleToggleGanresButton={handleToggleGanresButton}
      isOpen={isOpen}
      mangaGenre={mangaGenre}
    />
  );
};

const mapStateToProps = store => {
  return {
    categoriesList: store.mangaGenre.genresList,
    isOpen: store.mangaGenre.isOpen,
    mangaGenre: store.mangaGenre.genre,
  };
};

const mapDispatchToProps = {
  updateGenre: setMangaGenre,
  countReset: mangaCountReset,
  toggleButton: toggleGenresButton,
};

GenresParent.propTypes = {
  categoriesList: PropTypes.array,
  updateGenre: PropTypes.func.isRequired,
  countReset: PropTypes.func.isRequired,
  toggleButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  mangaGenre: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenresParent);
