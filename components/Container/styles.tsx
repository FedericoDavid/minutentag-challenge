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

  @media ${({ theme }) => theme.breakPoints.laptop} {
    max-width: ${({ theme }) => theme.layout.maxWidth};
  }

  @media ${({ theme }) => theme.breakPoints.laptopL} {
    padding: 0;
  }
`;
