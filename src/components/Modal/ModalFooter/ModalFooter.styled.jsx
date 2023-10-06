import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var (--color-button-period-type);
  z-index: 1200;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalStyled = styled.div`
  position: relative;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;

  @media screen and (min-width: 50px) {
    width: 280px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
    margin: 0 auto;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 14px;
  right: 14px;
  transition: fill var(--animation);
  fill: #2b78ef;

  &:hover,
  &:focus {
    fill: var (--color-button-period-type);
  }
`;

