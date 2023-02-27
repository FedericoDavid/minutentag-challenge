import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  padding: 22px 24px 22px 24px;
  
  background-color: #111;
  z-index: 99;
  overflow: hidden;

  scroll-snap-align: end;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: #ccc;
`;

export const Social = styled.a`
  font-size: 16px;
  font-weight: 500;

  margin:8px;

  color: #ccc;

  text-decoration: none;

  &:hover, &:focus {
    color: #ccc;
    text-decoration: underline;
  }
`;