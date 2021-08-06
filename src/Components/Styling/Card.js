import React from 'react';
import Content from './Content';
import Tag from './Tag';
import Button from './Button';
import Image from './Image';
import panda from '../../images/panda.png';

const Card = () => {
  return (
    <div className='card'>
      <Content>
        <Tag text='Exclusive' />
        <h1>React Styled Components</h1>
        <p>
          Exclusive styled Components on React js where i will learn why i
          need this & how to use it.
        </p>
        <div className="buttons">
          <Button link='#' text='Click Me' />
          <Button link='#' text='Github' />
        </div>
      </Content>
      <Image imgSrc={panda} altTag='panda' width='300px' />
    </div>
  );
};

export default Card;