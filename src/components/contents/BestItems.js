import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaCrown } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const BestItemsBlock = styled.div`
  max-width: 100%;
  margin: 0 auto;

  .title {
    width: 1130px;
    height: auto;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #00d180;
  width: 220px;
`;

const Crown = styled(FaCrown)`
  display: block;
  align-items: center;
  margin-right: 10px;
  padding: 5px;
  color: #fff;
  background: #00d180;
`;

const ItemsSliderBlock = styled.div`
  width: 1100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin: 0 auto;
  overflow: hidden;
`;

const ItemsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  li {
    list-style: none;
    display: inline-block;
    margin-left: 20px;

    img {
      width: 200px;
      height: 200px;
      cursor: pointer;
    }
    span {
      font-size: 12px;
    }
    p {
      margin: 0;
      &.product-name {
        height: 52.8px;
      }
      &.before {
        font-size: 15px;
        font-weight: bold;
        text-decoration: line-through;
        color: rgb(180, 180, 180);
      }
      &.after {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-top: 15px;
      }
    }
  }
`;

const PrevButton = styled(IoIosArrowBack)`
  position: absolute;
  width: 40px;
  height: 100px;
  left: 100px;
  cursor: pointer;
  color: #ddd;
  &:hover {
    color: gray;
  }
`;
const NextButton = styled(IoIosArrowForward)`
  position: absolute;
  width: 40px;
  height: 100px;
  right: 100px;
  cursor: pointer;
  color: #ddd;
  &:hover {
    color: gray;
  }
`;

const TOTAL_SLIDES = 8;

const BestItemsMap = [
  {
    image:
      'https://ae01.alicdn.com/kf/HTB1wKRKXJHO8KJjSZFtq6AhfXXaj/5-brincos.jpg',
    title:
      '드롭 이어링 5 색 네오 고딕 트렌디 워터 드롭 귀걸이 로맨틱 롱 귀걸이 여성을위한 brincos 우아한 패션 크리스탈 쥬얼리',
    price: '1,120원',
  },
  {
    image: 'https://ae01.alicdn.com/kf/HTB1IpB3lH1YBuNjSszhq6AUsFXaD/925.jpg',
    title:
      '여성을위한 담수 진주 귀걸이, 진짜 천연 진주 귀걸이 925 실버 귀걸이 쥬얼리 드롭 배송',
    price: '7,980원',
  },
  {
    image:
      'https://ae01.alicdn.com/kf/HTB1pnMMRpXXXXboXVXXq6xXFXXXn/5-bijoux-ae319.jpg',
    title:
      '단추모양 귀걸이 우아한 5 색 크리스탈 옵션 여름 선물 파티 여성을위한 귀여운 스퀘어 스톤 스터드 귀걸이 파티/기념일 bijoux ae319',
    price: '3,980원',
  },
  {
    image:
      'https://ae01.alicdn.com/kf/H4a3828f5915648dfa836d03094f12be74/Bague-ringen-925.jpg',
    title:
      'Bague ringen 프랑스 우아함 레이디 실버 925 쥬얼리 섬세한 보석 귀걸이 여성용 빈티지 개별 캐릭터 귀 방울',
    price: '5,900원',
  },
  {
    image:
      'https://ae01.alicdn.com/kf/H92e24e8bfd4841a08c08372b94f616c1W/Bague-ringen-925.jpg',
    title:
      'Bague ringen 럭셔리 925 스털링 실버 귀걸이 여성을위한 레드 퍼플 옐로우 보석 웨딩 귀걸이 스톤즈 쥬얼리',
    price: '5,580원',
  },
  {
    image: 'https://ae01.alicdn.com/kf/HTB1c_5OHHuWBuNjSszgq6z8jVXaz/-.jpg',
    title:
      '새로운 패션 로마 스타일 여자 팔찌 팔찌 크리스탈 팔찌 선물 쥬얼리 액세서리 환상적인 팔찌 악세사리 펜던트',
    price: '1,960원',
  },
  {
    image: 'https://ae01.alicdn.com/kf/HTB1_PUGaIfrK1RkSnb4q6xHRFXaq/585.jpg',
    title:
      '드롭 이어링 새로운 여성 585 로즈 골드 컬러 화이트 크리스탈 스톤 직조 드롭 귀걸이',
    price: '6,640원',
  },
  {
    image:
      'https://ae01.alicdn.com/kf/HTB1m8GTOCzqK1RjSZFLq6An2XXaw/2019-bricons-oorbellen-v5q240.jpg',
    title:
      '드롭 이어링 2019 블루 크리스탈 라인 석 귀걸이 실버 컬러 쥬얼리 패션 여성 bricons 웨딩 빅 드롭 oorbellen 여성 v5q240',
    price: '2,690원',
  },
  {
    image:
      'https://ae01.alicdn.com/kf/Ha0c1f0fd2eaf452c9307e48ceeef8a1fS/Zhboruini-925.jpg',
    title:
      'Zhboruini 진주 보석 세트 925 스털링 실버 주얼리 천연 담수 진주 비즈 케이지 목걸이 귀걸이 세트 여성 선물',
    price: '16,660',
  },
];

const BestItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const next = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 2);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 2);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}0%)`;
  }, [currentSlide]);
  return (
    <BestItemsBlock>
      <div className="title">
        <Title>
          <Crown />
          BEST PRODUCT
        </Title>
      </div>
      <ItemsSliderBlock>
        <PrevButton onClick={prev} />
        <ItemsList ref={slideRef}>
          {BestItemsMap.map((i, index) => (
            <li key={index}>
              <img src={i.image} />
              <span>
                {i.title.length >= 30 ? i.title.substring(0, 50) : i.title}
              </span>
              <p className="after">{i.price}</p>
              <p className="before">{i.price}</p>
            </li>
          ))}
        </ItemsList>
        <NextButton onClick={next} />
      </ItemsSliderBlock>
    </BestItemsBlock>
  );
};

export default BestItems;
