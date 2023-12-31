// Import
import styled from 'styled-components';


// Wrapper
export const Wrapper = styled.section`
  background-color: #fff;
`;


// ReviewsContainer
export const ReviewsContainer = styled.section`
  position: relative;
  max-width: 335px;
  min-height: 324px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;
  font-family: Inter;
  background-color: #FFFFFF;

  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 704px;
    min-height: 360px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
    max-width: 1184px;
    min-height: 374px;
    padding-bottom: 118px;
  }

  h2 {
    font-size: 28px;
    line-height: 1.14;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
    color: #3E85F3;
    font-weight: 700;

    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
      margin-bottom: 50px;
    }
  }

  & .slider {
    height: fit-content;
  }

  & .slick-track {
    display: flex;
  }

  & .slick-list {
    overflow: hidden;
  }

  & .slick-arrow {
    position: absolute;
    bottom: 64px;

    @media screen and (min-width: 768px) {
      bottom: 100px;
    }

    @media screen and (min-width: 1440px) {
      bottom: 118px;
    }

  }

  & svg.svg-arrow {
    width: 39px;
    height: 50px;
    cursor: pointer;
    fill: #111111;

    &:hover,
    &:focus {
      fill: #3E85F3;
    }

    @media screen and (min-width: 768px) {
      width: 47px;
      height: 61px;
    }
  }

  & .slick-arrow.slick-prev {
    left: calc(50% + 15px);
  }

  & .slick-arrow.slick-next {
    right: calc(50% + 15px);
  }
`;


// ArrowContainer
export const ArrowContainer = styled.div`
  margin-top: 8px;
  height: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 18px;
    height: 61px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;
  }
`;