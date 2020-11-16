import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { CSSTransition } from 'react-transition-group'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  return (
    <S.HeaderContainer>
      <S.HeaderLogo
        src={require('../../../public/nany.svg')}
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        unmountOnExit
      >
        <S.HeaderNav>
          <a href="/">Piscina de Bolinhas</a>
          <a href="/">Cama Elástica</a>
          <a href="/">Inflável</a>
          <a href="/">Mesas de Plástico</a>
          <a href="/">Jogos</a>
        </S.HeaderNav>
      </CSSTransition>
      <S.Burger onClick={toggleNav}>
        <S.HeaderLogoBurger
          src={require('../../../public/hamburger.png')}
          className="Logo"
          alt="logo"
        />
      </S.Burger>
    </S.HeaderContainer>
  )
}
