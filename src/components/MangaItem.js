import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MangaItem = ({ img, title, setSingleManga, id }) => {
  return (
    <Container to={`/${title}`} onClick={() => setSingleManga(id)}>
      <img src={img} alt={title} />
    </Container>
  );
};

const Container = styled(Link)`
  margin-bottom: 20px;
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
`;

MangaItem.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  setSingleManga: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default MangaItem;
