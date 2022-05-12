import React from 'react'
import {ReactComponent as CatLogo} from 'assets/svg/CatwikiLogo.svg'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-block-start: 2rem;

  svg {
    width: 12rem;
    height: auto;
  }
`

export default function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <CatLogo />
      </Link>
    </StyledLogo>
  )
}
