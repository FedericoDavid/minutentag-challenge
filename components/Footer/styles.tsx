import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  padding: 40px 24px 32px 24px;
  
  background-color: #333333;
  z-index: 99;
  overflow: hidden;

  scroll-snap-align: end;
`;