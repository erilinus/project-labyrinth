import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <MazeWrapper>
        <Logo src="./images/Logo.svg" alt="Maze logo" />
      </MazeWrapper>
      <Heading>Labyrinth</Heading>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  width: 100vw;
  height: 12vh;
  overflow: hidden;
`

const MazeWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
`

const Heading = styled.h1`
  text-align: center;
  line-height: 48px;
`

const Logo = styled.img`
  width: 50px;
`