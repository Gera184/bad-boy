import React from 'react'
import { HeaderContainerLeft, HeaderContainerRight, HeaderWrapper } from './Header.styles'
import ErnLogo from '../../assets/images/ErnLogo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainerLeft>
      <div> exit</div>
      <div>language</div>
      <div> user</div>
      </HeaderContainerLeft>
      <HeaderContainerRight>
      <p>retailerInfo</p>
      <img src={ErnLogo} alt="logo"/>
      </HeaderContainerRight>
    </HeaderWrapper>
  )
}

export default Header
