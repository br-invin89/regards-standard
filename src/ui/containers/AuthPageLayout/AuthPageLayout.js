import React from 'react';
import {
  LayoutContainerStyled as LayoutContainer,
  PageContentContainerStyled as PageContentContainer
} from './styled';
import LoadInit from './LoadInit';

const AuthPageLayout = ({ children, ...props }) => {

  return (
    <LayoutContainer>
      <LoadInit />
      <PageContentContainer>
        {children}
      </PageContentContainer>
    </LayoutContainer>
  );
 }

 export default AuthPageLayout;
