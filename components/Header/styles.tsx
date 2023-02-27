import styled from "styled-components";

export const ImageBanner = styled.div<{ image: string }>`
  width: 100vw;
  min-height: 300px;
  
  background-image: url(${({ image }) => image});
  background-color: #333;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20% 82%;

  @media(min-width: 1024px) {
    background-position: 40% 85%;

    min-height: 60vh;
  }
`;