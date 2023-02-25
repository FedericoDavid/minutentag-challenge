import React from 'react'
import Image from 'next/image'
import { LogoWrapper, Wrapper } from './styles'

const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper href="/" passHref>
        <Image
          src="/images/main-logo.png"
          alt="main-logo"
          style={{ objectFit: "contain" }}
          width={150}
          height={100}
          priority
        />
      </LogoWrapper>
    </Wrapper>
  )
}

export default Navbar