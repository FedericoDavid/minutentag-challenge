import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

import { CardType } from './types';
import {
  DataWrapper, InnerWrapper, Substyle,
  Wrapper, MobileWrapper, DesktopWrapper,
  Brand,
  ButtonWrapper,
  Button,
} from './styles';

const Card = ({ product }: CardType) => {
  const { id, brand, image: imgUrl, substyle } = product;

  const getUrl = (): string => `/${id}-${brand.replace(' ', '-')}`;

  const element = (
    <Link href={getUrl()} passHref>
      <Wrapper>
        <InnerWrapper>
          <Image src={`/images${imgUrl}`} alt="beer-image" priority fill style={{ objectFit: "contain" }} />
        </InnerWrapper>
        <DataWrapper>
          <Brand>
            {brand}
          </Brand>
          <Substyle>
            {substyle}
          </Substyle>
        </DataWrapper>
        <ButtonWrapper>
          <Button>
            View More
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Link>
  );

  return (
    <>
      <MobileWrapper>
        {element}
      </MobileWrapper>
      <DesktopWrapper>
        <Tilt tiltReverse>
          {element}
        </Tilt>
      </DesktopWrapper>
    </>
  );
};

export default Card;
