import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  height: 300px;
  width: 100%;
  padding: 32px 24px;
  
  @media(min-width: 1024px) {
    width: 980px;
    }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  padding: 0px 14px;
  border-top: 1px solid #C3AC94;
  margin-top: 22px;
  
  @media(min-width: 1024px) {
    width: 100%;
    margin-top: 0px;
    align-items: flex-start;

    padding: 32px 24px 32px 64px;
    border: none;
    border-left: 1px solid #C3AC94;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;

  color: #222;
  text-transform: uppercase;
  text-shadow: #C3AC94 1px 0 10px;

  @media(min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;

  margin-top: 8px;

  color: #777;
`;

export const Select = styled.select`
  width: 280px;
  height: 35px;
  background: transparent;
  color: #111;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #C3AC94;

  margin-top: 12px;
  
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const StockAndPriceWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  border-top: 1px solid #C3AC94;
  
  @media(min-width: 1024px) {
    width: 40%;
    align-items: flex-start;
  }
`;

export const SpinnerWrapper = styled.div`
  margin-top: 34px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 32px 0;
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


export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;  

  color: #222;
`;

export const Stock = styled.p`
  font-size: 14px;
  font-weight: 400;

  margin-top: 8px;

  color: #777;
`;

export const Price = styled.p`
  font-size: 32px;
  font-weight: 500;

  margin-top: 18px;

  color: #C3AC94;
`;

