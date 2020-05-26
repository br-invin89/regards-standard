import React from 'react'
import {
  LayoutContainerStyled as LayoutContainer,
  PageContentContainerStyled as PageContentContainer,
} from './styled'
import LoadInit from './LoadInit'
import Header from './Header'

const PageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <LoadInit />
      <Header />
      <PageContentContainer>{children}</PageContentContainer>
    </LayoutContainer>
  )
}

export default PageLayout
