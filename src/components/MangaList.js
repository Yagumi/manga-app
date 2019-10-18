import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MangaItemParent from '../containers/MangaItemParent';

const MangaList = ({ mangaList, mangaGener }) => {
  return (
    <div>
      <Title>{mangaGener}</Title>
      <List>
        {mangaList.map(manga => (
          <MangaItemParent
            key={manga.id}
            img={manga.attributes.posterImage.small}
            title={manga.attributes.slug}
            id={+manga.id}
          />
        ))}
      </List>
    </div>
  );
};

const Title = styled.h2`
  text-transform: capitalize;
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

MangaList.propTypes = {
  mangaList: PropTypes.array.isRequired,
  mangaGener: PropTypes.string.isRequired,
};

export default MangaList;
