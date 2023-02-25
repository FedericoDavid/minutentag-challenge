import React, { ReactElement } from 'react';
import { Wrapper } from './styles';

const Container = ({ children }: { children: ReactElement[] | ReactElement }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Container;
