import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Genres = ({ handleClick, categoriesList, handleToggleGanresButton, isOpen, mangaGenre }) => {
  if (isOpen) {
    return (
      <Container>
        <Header>
          <h2>Categories</h2>
          <IsOpen onClick={handleToggleGanresButton}>Close All Genres</IsOpen>
        </Header>
        <List>
          {categoriesList.map(category => (
            <Item
              key={category.id}
              onClick={handleClick}
              genre={category.attributes.title.toLowerCase()}
              mangaGenre={mangaGenre}
            >
              {category.attributes.title}
            </Item>
          ))}
        </List>
      </Container>
    );
  }
  return (
    <Container>
      <Header>
        <h2>Categories</h2>
        <IsOpen onClick={handleToggleGanresButton}>Show All Genres</IsOpen>
      </Header>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  & > button {
    margin-left: auto;
  }
`;
const List = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
`;
const Item = styled.button`
  border: 1px solid #241007;
  border-radius: 3px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${({ mangaGenre, genre }) => {
    if (mangaGenre === genre) {
      return '#241007';
    }
    return '#ecdac6';
  }};
  color: ${({ mangaGenre, genre }) => {
    if (mangaGenre === genre) {
      return '#ecdac6';
    }
    return '#241007';
  }};
  padding: 3px 5px;
  &:last-of-type: {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    background-color: #241007;
    color: #ecdac6;
  }
`;

const IsOpen = styled.button`
  border: 1px solid black;
  margin-top: 5px;
  cursor: pointer;
  background-color: transparent;
  padding: 8px 12px;
  border: 1px solid #241007;
  color: #241007;
  border-radius: 5px;
  font-weight: 600;
  &:hover,
  &:active {
    background-color: #241007;
    color: #ecdac6;
  }
`;

Genres.propTypes = {
  handleClick: PropTypes.func.isRequired,
  categoriesList: PropTypes.array,
  handleToggleGanresButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  mangaGenre: PropTypes.string.isRequired,
};

export default Genres;
