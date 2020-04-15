import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const HeaderOuterContainerBlock = styled.div`
  width: 100%;
  background: #fff;
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1224px;
  img {
    width: 96.91px;
    height: 36.5px;
  }
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    li {
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 30px;
        height: 29px;
        margin: 0 auto;
        display: flex;
      }
      span {
        font-size: 10px;
      }
    }
  }
`;

const InputStyle = styled.input`
  padding-left: 30px;
  padding-right: 50px;
  width: 550px;
  height: 38.6px;
  font-size: 12px;
  line-height: 1.5;
  border: 1px solid #cecdcd;
  background-color: #fff;
  border-radius: 21px;
  outline: none;
  cursor: text;
  background-image: url('https://1reacphoto.s3.ap-northeast-2.amazonaws.com/images/react_native/icon_index_SearchGray%403x.png');
  background-position: 680px;
  background-repeat: no-repeat;
  background-size: 20px;
  :focus {
    border: 1px solid gray;
  }
`;

const HeaderOuterContainer = () => {
  return (
    <>
      <HeaderOuterContainerBlock>
        <Wrapper>
          <Link to="/">
            <img
              src="https://1reacphoto.s3.ap-northeast-2.amazonaws.com/images/react_native/btn_header_home%403x.png"
              alt="로고"
            />
          </Link>
          <InputStyle placeholder="찾고 싶은 상품을 검색해보세요!" />
          <ul>
            <li>
              <img
                src="https://1reactphoto.s3.ap-northeast-2.amazonaws.com/imgs/icons/header_icon_profile.png"
                alt="마이페이지"
              />
              <span>마이페이지</span>
            </li>
            <li>
              <img
                src="https://1reactphoto.s3.ap-northeast-2.amazonaws.com/imgs/icons/header_icon_cart.png"
                alt="장바구니"
              />
              <span>장바구니</span>
            </li>
          </ul>
        </Wrapper>
      </HeaderOuterContainerBlock>
    </>
  );
};

export default HeaderOuterContainer;
