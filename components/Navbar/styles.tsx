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

  padding: 0 24px;
  background-color: transparent;
  z-index: 9;
`;

export const LogoWrapper = styled(Link)`
  margin-left: 8px;
`;