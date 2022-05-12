import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: ${props => props.MaxWidth || '768px'};
  margin: 0 auto;
  padding-inline: 2rem;

  @media screen and (max-width: 768px) {
    padding-inline: 1.5rem;
  }
`

const Container = ({children, MaxWidth, ...rest}) => {
  return (
    <StyledContainer MaxWidth={MaxWidth} {...rest}>
      {children}
    </StyledContainer>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  MaxWidth: PropTypes.string.isRequired,
  ...styled.div.propTypes,
}

export default Container
