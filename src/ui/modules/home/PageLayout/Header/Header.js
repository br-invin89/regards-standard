import React from 'react';
import { 
	HeaderContainerStyled as HeaderContainer, 
	HeaderOuterWrapperStyled as HeaderOuterWrapper
} from './styled';
import Title from './Title';
import TopBar from './TopBar';

const Header = () => {  
  return (
    <HeaderOuterWrapper>
      <HeaderContainer>
        <Title>Regards!</Title>
        <TopBar/>
      </HeaderContainer>
    </HeaderOuterWrapper>
  )
}

export default React.memo(Header);
