import React from 'react'
import {
  LayoutContainerStyled as LayoutContainer,
  PageContentContainerStyled as PageContentContainer,
} from './styled'
import LoadInit from './LoadInit'

const PageLayout = ({ children, ...props }) => {
  return (
    <LayoutContainer {...props}>
      <LoadInit />
      <PageContentContainer>{children}</PageContentContainer>
    </LayoutContainer>
  )
}

export default PageLayout
