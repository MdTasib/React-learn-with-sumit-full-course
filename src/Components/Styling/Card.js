import React from 'react';
import Button from './Button';
import panda from '../../images/panda.png';
import { CardContainer, ContentContainer, ButtonContainer } from './styles/Container.styles';
import { Tag, H1, P, Image } from './styles/Elements.styles';
import { StyledTitle } from './styles/Custom.styles';

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color='blue'>Exclusive</Tag>
        <H1>
          <StyledTitle text='React Styled Components' color='blue' />
        </H1>
        <P>
          Exclusive styled Components on React js where i will learn why i
          need this & how to use it.
        </P>
        <ButtonContainer className="buttons">
          <Button link='#' text='Click Me' />
          <Button link='#' text='Github' />
        </ButtonContainer>
      </ContentContainer>
      <Image src={panda} alt='panda' width='300px' />
    </CardContainer>
  );
};

export default Card;