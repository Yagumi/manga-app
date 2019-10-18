import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Pagination = ({ handlePrev, handleNext, mangaLength, mangaCount }) => {
  return (
    <Container>
      <Button type="button" onClick={handlePrev} disabled={mangaCount === 0}>
        Prev
      </Button>
      <Pages>
        <NumPage>{1 + mangaCount}</NumPage>
        <NumPage>{` - ${mangaCount + mangaLength}`}</NumPage>
      </Pages>
      <Button type="button" onClick={handleNext} disabled={mangaLength < 10}>
        Next
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
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
const Pages = styled.div`
  display: flex;
  align-items: center;
`;
const NumPage = styled.span`
  &:first-of-type {
    margin-left: 5px;
  }
  &:last-of-type {
    margin-right: 5px;
  }
`;

Pagination.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  mangaLength: PropTypes.number.isRequired,
  mangaCount: PropTypes.number.isRequired,
};

export default Pagination;
