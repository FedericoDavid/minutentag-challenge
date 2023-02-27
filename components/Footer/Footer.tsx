import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { Social, SocialWrapper, Title, Wrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        Enriquez Federico © 2023
      </Title>
      <SocialWrapper>
        <Social aria-label="Linkedin" href="https://www.linkedin.com/in/federico-d-enriquez/" rel="noopener noreferrer" target="_blank" >
          <AiFillLinkedin size={22} />
        </Social>
        <Social aria-label="Github" href="https://github.com/FedericoDavid" rel="noopener noreferrer" target="_blank" >
          <AiFillGithub size={22} />
        </Social>
        <Social aria-label="Email" href="mailto:fedenri98@gmail.com" rel="noopener noreferrer" target="_blank" >
          <AiOutlineMail size={22} />
        </Social>
      </SocialWrapper>
    </Wrapper>
  )
}

export default Footer;