import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0; /* Stick it to the top */
  max-height: 70px;
  width: 100vw;

  display: grid;
  grid-template-areas: 'logo nav';
  background-color: #282c34;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const HeaderLogo = styled.img`
  grid-area: logo;
  height: 70px;

  @media (max-width: 700px) {
    grid-template-areas: 'logo burger' 'nav nav';
  }
`

export const HeaderNav = styled.nav`
  display: grid;
  grid-area: nav;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;

  a {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    transition: 0.5s;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  button {
    padding: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    transition: 70ms;
  }

  button:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
  }

  @media (max-width: 700px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-row-gap: 20px;

    padding: 30px 0 30px;
    background: rgba(40, 44, 47, 0.95);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
export const Burger = styled.button`
  display: none;
  grid-area: burger;
  margin: 0 20px 0 0;
  padding: 0;
  justify-self: end;
  font-size: 40px;
  border: none;
  background: none;
  outline: none;
  transition: 0.1s;

  &:active {
    transform: scale(1.2);
  }

  @media (max-width: 700px) {
    display: inline;
  }
`
