import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 16px;

  @media(min-width: 1024px) {
    max-width: 1224px;
  }

  @media(min-width: 1440px) {
    padding: 0;
  }
`;
