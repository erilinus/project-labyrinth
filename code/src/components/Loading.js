import React from 'react'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import maze from 'lotties/maze'

const Loading = () => {
  return (
    <StyledLoader>
      <Lottie animationData={maze} loop />
    </StyledLoader>
  )
}
export default Loading

const StyledLoader = styled.div`
  width: 200px;
`