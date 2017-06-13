import React from 'react'
import styled from 'styled-components'
import {Container} from 'semantic-ui-react'
const FooterStyle = styled.div`
    background: black;
    color: white;
    borderTop: 1px solid #E7E7E7;
    display: flex;
    text-align: right;
    font-size: 22px;
    padding: 20px;
    bottom: 0;
    height: 60px;
    width: 100%;
`

const Footer = () => (
    <FooterStyle>
      <Container>
        Modify by: Dream Za Eiei
      </Container>
    </FooterStyle>
)

export default Footer
