import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  top: 0;
  height: 112px;
  width: 100vw;

  padding: 0  16px 0 24px;
  background-color: transparent;
  box-shadow: 0px 0px 16px rgb(10 10 43 / 33%);
`;

export const LogoWrapper = styled(Link)`
  margin-left: 20px;
`;