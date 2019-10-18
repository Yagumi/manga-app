import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MangaList from '../components/MangaList';

const MangaListParent = ({ mangaList, mangaGener }) => {
  return <MangaList mangaList={mangaList} mangaGener={mangaGener} />;
};

const mapStateToProps = store => {
  return {
    mangaGener: store.mangaGenre.genre,
  };
};
MangaListParent.propTypes = {
  mangaList: PropTypes.array.isRequired,
  mangaGener: PropTypes.string.isRequired,
};
export default connect(
  mapStateToProps,
  null,
)(MangaListParent);
