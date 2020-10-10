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

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <S.HeaderContainer className="Header">
      <S.HeaderLogo
        src={require('../../../public/img/nany.png')}
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        unmountOnExit
      >
        <S.HeaderNav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </S.HeaderNav>
      </CSSTransition>
      <S.Burger onClick={toggleNav}>
        <S.HeaderLogo
          src={require('../../../public/img/menu-burger.png')}
          className="Logo"
          alt="logo"
        />
      </S.Burger>
    </S.HeaderContainer>
  )
}
