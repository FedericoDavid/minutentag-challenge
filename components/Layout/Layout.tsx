import React from 'react';

import Footer from '../Footer';
import { LayoutType } from './types';
import { InnerWrapper, Wrapper } from './styles';
import Navbar from '../Navbar';

const Layout = ({ children }: LayoutType) => (
  <Wrapper>
    <Navbar />
    <InnerWrapper>
      {children}
    </InnerWrapper>
    <Footer />
  </Wrapper>
);

export default Layout;