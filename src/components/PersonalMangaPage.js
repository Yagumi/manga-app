import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const PersonalMangaPage = ({ setIsLoadFlag, img, titles, status, synopsis }) => {
  return (
    <Container>
      <header>
        <HeaderTop>
          <ButtonBack to="/" onClick={setIsLoadFlag}>
            Back
          </ButtonBack>
          <Img src={img} alt="" />
        </HeaderTop>
        <MainContent>
          <h2>
            {titles.en ? <span>{titles.en} / </span> : null}
            {titles.en_jp ? <span>{titles.en_jp} / </span> : null}
            {titles.ja_jp ? <span>{titles.ja_jp}</span> : null}
          </h2>
          <span>Status {status}</span>
        </MainContent>
      </header>
      <p>{synopsis}</p>
    </Container>
  );
};

const Container = styled.div`
  list-style-type: none;
  margin-bottom: 10px;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonBack = styled(Link)`
  margin-bottom: 20px;
  border: 1px solid black;
  margin-top: 5px;
  cursor: pointer;
  background-color: transparent;
  padding: 8px 12px;
  border: 1px solid #241007;
  color: #241007;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  &:hover,
  &:active {
    background-color: #241007;
    color: #ecdac6;
  }
`;

const Img = styled.img`
  align-self: center;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

PersonalMangaPage.propTypes = {
  img: PropTypes.node,
  setIsLoadFlag: PropTypes.func.isRequired,
  titles: PropTypes.object,
  status: PropTypes.string,
  synopsis: PropTypes.string,
};

export default PersonalMangaPage;
