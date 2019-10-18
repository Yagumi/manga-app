import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSingleMangaData, toggleIsLoad } from '../actions/actionCreators';

import PersonalMangaPage from '../components/PersonalMangaPage';

const PersonalMangaPageParent = ({ fetchData, id, data, isLoad, toggleIsLoadFlag }) => {
  useEffect(() => {
    const getData = () => {
      fetchData(`https://kitsu.io/api/edge/manga/${id}`);
    };
    getData();
  }, [id]);
  const setIsLoadFlag = () => {
    toggleIsLoadFlag(false);
  };
  if (isLoad) {
    return (
      <PersonalMangaPage
        setIsLoadFlag={setIsLoadFlag}
        img={data.attributes.posterImage.small}
        id={data.id}
        titles={data.attributes.titles}
        status={data.attributes.status}
        synopsis={data.attributes.synopsis}
      />
    );
  }
  return null;
};

const mapStateToProps = store => {
  // eslint-disable-next-line no-console
  console.log(store);
  return {
    id: store.singleMangaPage.id,
    data: store.singleMangaPage.data,
    isLoad: store.singleMangaPage.isLoad,
  };
};

const mapDispatchToProps = {
  fetchData: fetchSingleMangaData,
  toggleIsLoadFlag: toggleIsLoad,
};

PersonalMangaPageParent.propTypes = {
  fetchData: PropTypes.func.isRequired,
  id: PropTypes.number,
  data: PropTypes.object,
  isLoad: PropTypes.bool,
  toggleIsLoadFlag: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalMangaPageParent);
