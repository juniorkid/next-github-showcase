import React from 'react'
import styled from 'styled-components'
import {Container} from 'semantic-ui-react'

const HeaderWrapper = styled.div`
  height: 75px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`

const Header = () => (
  <HeaderWrapper>
    <Container>
      Github
    </Container>
  </HeaderWrapper>
)

export default Header
