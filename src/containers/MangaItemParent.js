import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSingleMangaID } from '../actions/actionCreators';

import MangaItem from '../components/MangaItem';

const MangaItemParent = ({ img, title, id, setSingleMangaId }) => {
  const setSingleManga = mangaId => {
    setSingleMangaId(mangaId);
  };
  return <MangaItem img={img} title={title} setSingleManga={setSingleManga} id={id} />;
};

const mapDispatchToProps = {
  setSingleMangaId: setSingleMangaID,
};

MangaItemParent.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.number,
  setSingleMangaId: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(MangaItemParent);
