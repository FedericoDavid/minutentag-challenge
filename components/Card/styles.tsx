import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  * {
    text-decoration: none;
  }
`;

export const MobileWrapper = styled.div`
  display: block;
  width: 100%;

  @media(min-width: 1024px) {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  display: none;

  @media(min-width: 1024px) {
    display: block;
  }
`;

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 300px;
  width: 100%;
  padding: 32px 24px;

  border: 1px solid #C3AC94;
  border-radius: 24px;
  overflow: hidden;
  background-color: transparent; //revisar

  transition: 0.3s;
  will-change: background-color;
  
  @media(min-width: 1024px) {
    width: 280px;

    &:hover {
      background-color: transparent;

      & > div:first-child {
        opacity: 0 !important;
        transition: 0.3s;
      }

      img {
        opacity: 0.5 !important;
        transition: 0.3s;
      }

      h5, .released {
        transform: translateY(-60px);
        transition: 0.5s;
      }

      button {
        opacity: 1;
        transition: 1.2s;
      }
    }
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
  margin-top: 8px;

  z-index: 8;
`;

export const Brand = styled.p`
  font-size: 20px;
  font-weight: 500;

  color: #222;
  text-transform: uppercase;
  text-shadow: #C3AC94 1px 0 10px;

`;

export const Substyle = styled.p`
  font-size: 18px;
  margin-top: 6px;

  color: #333;
  text-shadow: #C3AC94 1px 0 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  padding: 8px 24px;
  border-radius: 24px;
  border: 1px solid #ccc;

  background-color: #C3AC94;
  color: #fff;
`;


