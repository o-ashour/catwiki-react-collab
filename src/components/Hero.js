import React from 'react'
import styled from 'styled-components'
import {ReactComponent as CatSVG} from 'assets/svg/CatwikiLogo.svg'
import SearchBox from './SearchBox'

import BigScreen from 'assets/images/HeroImagelg.png'
import mediumScreen from 'assets/images/HeroImagemd.png'
import smallScreen from 'assets/images/HeroImagesm.png'

export default function Hero() {
  return (
    <StyledHero>
      <ContentWrapper>
        <CatSVG fill="white" />
        <Title>
          Get to know more about your{' '}
          <span className="line--break"> cat breed </span>
        </Title>
        <SearchBox />
      </ContentWrapper>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  display: flex;
  align-items: center;

  background-image: url(${BigScreen});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 50rem;
  width: 100%;
  margin-top: 2rem;

  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;

  @media (max-width: 768px) {
    background-image: url(${mediumScreen});
    height: 35rem;
  }

  @media (max-width: 576px) {
    background-image: url(${smallScreen});
    height: 25rem;
  }
`

const ContentWrapper = styled.main`
  display: grid;
  gap: 1rem;
  padding-left: 8rem;

  svg {
    height: auto;
    width: 90%;
    path {
      fill: var(--color-white);
    }
  }

  @media (max-width: 768px) {
    padding-left: 4rem;
    svg {
      width: 20rem;
    }
  }

  @media (max-width: 576px) {
    padding-left: 2rem;

    svg {
      width: 10rem;
    }
  }
`

const Title = styled.h1`
  font-size: 2.4rem;
  color: var(--color-white);
  margin: 0;
  font-weight: 500;
  line-height: 29.26px;

  .line--break {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.4rem;
    line-height: 20.26px;
  }
`
