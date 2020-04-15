import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import HeaderOuterContainer from '../Header/HeaderOuterContianer';
import Catagory from '../Catagories/Catagory';

const HeaderBlock = styled.div`
  width: 100%;
  background: #00d180;
`;

const Wrapper = styled(Responsive)`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .right {
    display: flex;
    align-items: center;
  }
`;

const LinkStyle = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.125px;
  cursor: pointer;
  margin-right: 20px;
  &:last-child {
    margin-right: 10px;
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="right">
            <LinkStyle to="/login">
              <span>로그인/회원가입</span>
            </LinkStyle>
            <LinkStyle to="/">
              <span>고객센터</span>
            </LinkStyle>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
      <HeaderOuterContainer />
      <Spacer />
      <Catagory />
    </>
  );
};

export default Header;
