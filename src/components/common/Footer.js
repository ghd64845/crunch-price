import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 150px;
`;

const FooterTop = styled.div`
  width: 100%;
  background: #f4f4f4;
  padding-left: 27px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 12px;
        color: #656565;
        line-height: 1.5;
        padding-right: 27px;
      }
    }
  }
`;

const FooterBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 12px;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 20px;
  .left {
    width: 50%;
    color: #868b8b;
    div {
      a {
        margin-left: 10px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .right {
    display: flex;

    .right-left {
      border-left: 1px solid #ddd;
      padding-left: 20px;
    }
  }
  .TopText {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.43;
    text-align: left;
    color: #484b4d;
    margin: 0 0 13px;
  }
  .DownText {
    display: block;
    font-size: 13px;
    letter-spacing: -0.33px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .rightText {
    font-size: 13px;
    line-height: 1.69;
    letter-spacing: -0.33px;
    text-align: left;
    color: #505050;
    margin: 0 0 3px;
  }
`;

const Button = styled.button`
  width: 181px;
  height: 35.8px;
  background-color: #f9e000;
  border-radius: 20px;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  line-height: 1.75;
  cursor: pointer;
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
    .kakaoText {
      font-size: 13px;
      line-height: 1.46;
      text-align: left;
      color: #3b1e1d;
      width: 110px;
    }
  }
`;

const FooterSNS = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: 100px;
  margin-right: 100px;
`;

const SNSButton = styled.button`
  width: 130px;
  height: 35.8px;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  line-height: 1.75;
  background: #fff;

  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 23px;
      height: 23px;
      margin-right: 10px;
    }
    .YoutubeText {
      width: 90px;
    }
    .InstarText {
      width: 120px;
    }
  }
`;

const FooterBottom = styled.div`
  margin: 38px 100px 0 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  .FooterBottomText {
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.33px;
    line-height: 1.85;
    text-align: left;
    color: #505050;
    margin: 0;
    &.Bold {
      font-weight: 500;
      margin-left: 2px;
      margin-right: 2px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterTop>
        <ul>
          <li>
            <a href="/">회사 소개</a>
          </li>
          <li>
            <a href="/">이용약관</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">이용안내</a>
          </li>
          <li>
            <a href="/">공지사항</a>
          </li>
        </ul>
      </FooterTop>
      <FooterBody>
        <div className="left">
          <p className="TopText">(주)크런치 컴퍼니</p>
          <p className="DownText">
            주소: 서울특별시 강남구 논현로57길 30 지하 1층
          </p>
          <div>
            <span>
              대표/개인정보 관리자: 김민준 사업자 등록번호: 209-87-01010
            </span>
            <a>사업자 정보 확인</a>
          </div>
          <p className="DownText">E-mail: contact@crunchprice.com</p>
          <p className="DownText">
            통신판매업신고번호: 제 2018-서울강남-00963호
          </p>
          <p className="DownText">
            건강기능 판매업: 제 2018-0109112호 의료기기 판매업 : 제 8505호
          </p>
          <p className="DownText">고객센터: 1811-6862</p>
        </div>
        <div className="right">
          <div className="right-left" style={{ width: '313px' }}>
            <p className="TopText">고객센터</p>
            <a href="https://pf.kakao.com/_UraTC">
              <Button>
                <span>
                  <img src="https://1reacphoto.s3.ap-northeast-2.amazonaws.com/images/react_native/icon_footer_kakao%403x.png" />
                  <span className="kakaoText">카카오로 문의하기</span>
                </span>
              </Button>
            </a>
            <p className="rightText">월~금: 오전11시부터 오후6시까지</p>
            <p className="rightText">토요일, 일요일, 공휴일 휴무</p>
          </div>
          <div className="right-right">
            <p className="TopText">계좌</p>
            <p>우리은행: 1005-603-420169</p>
            <p>예금주: (주)크런치컴퍼니</p>
          </div>
        </div>
      </FooterBody>
      <FooterSNS>
        <a
          href="https://www.youtube.com/channel/UCGC8rkntmw8oFm6M8sq0bqA"
          target="_blank"
        >
          <SNSButton>
            <span>
              <img src="https://1reacphoto.s3.ap-northeast-2.amazonaws.com/images/react_native/icon_Footer_YouTube%403x.png" />
              <span className="YoutubeText">크프 유튜브</span>
            </span>
          </SNSButton>
        </a>
        <a href="https://www.instagram.com/crunchprice/" target="_blank">
          <SNSButton style={{ width: '150px' }}>
            <span>
              <img src="https://1reacphoto.s3.ap-northeast-2.amazonaws.com/images/react_native/icon_Footer_Instagram%403x.png" />
              <span className="InstarText">크프 인스타그램</span>
            </span>
          </SNSButton>
        </a>
      </FooterSNS>
      <FooterBottom>
        <p className="FooterBottomText">
          (주)크런치 컴퍼니는 결제 정보의 중개 서비스 또는 통신판매중개시스템의
          제공자로서, 통신판매의 당사자가 아니며 소비자 분쟁 발생 시 당사에서
          중재하며, 배송·환불·CS 등 의 책임은 (주)크런치 컴퍼니에 있습니다. 또한
          해외 사이트에서 상품을 대량 소싱하는 쇼핑몰 특성상 일부 상품이 상표권
          및 지적재산권을 침해하게 되는 경우가 발생할 수 있습니다. 고객센터로
          연락주시면 최대한 빠르게 처리하겠습니다.
        </p>
      </FooterBottom>
      <FooterBottom style={{ marginTop: '0', paddingBottom: '100px' }}>
        <span className="FooterBottomText">Companyright (c) 2020</span>
        <span className="FooterBottomText Bold">Crunchprice.com</span>
        <span className="FooterBottomText">all rights reserved</span>
      </FooterBottom>
    </FooterBlock>
  );
};

export default Footer;
