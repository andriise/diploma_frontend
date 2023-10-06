import React, { useState } from 'react';
import sprite from '../../../images/team_icon.svg';
import Team from './Team/Team';
import SwaggerButton from '../SwaggerButton/SwaggerButton';
import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  HeartIcon,
  StudentsText,
} from './Footer.styled';

export default function Footer() {
  const [isOpened, setIsOpened] = useState(false);
  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <FooterWrapper>
      <SwaggerButton />
      <FooterContainer>
        <FooterText>
          {'© 2023 | All Rights Reserved | Developed with '}
          <HeartIcon width="14" height="13">
            <use href={sprite + '#icon-heart'}></use>
          </HeartIcon>
          {' by '}
          <StudentsText onClick={handleToggleModal}>
            {'GoIT Students'}
          </StudentsText>
        </FooterText>
      </FooterContainer>
      {isOpened && <Team onCloseModal={handleToggleModal} />}
    </FooterWrapper>
  );
}