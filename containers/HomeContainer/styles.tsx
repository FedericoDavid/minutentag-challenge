import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
  margin: 50px 0 0px;

  @media(min-width: 1024px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    min-height: 60vh;
    margin: 12px 0;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-top: 18px;

  color: #222;
  text-shadow: #C3AC94 1px 0 10px;
`;