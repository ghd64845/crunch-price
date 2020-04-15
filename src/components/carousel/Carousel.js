import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselSection = styled.section`
  width: 100%;
  height: 60vh;
  margin-top: 20px;
  display: flex;
  overflow: hidden;
  ul {
    width: 1620px;
    height: 50vh;
    display: flex;

    padding: 0;
    li {
      list-style: none;
      img {
        width: 1620px;
        height: 450;
      }
    }
  }
`;

const ImageBlock = styled.div`
  width: 60%;
  height: 55vh;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  z-index: 5;
`;

const bannerMap = [
  {
    image:
      'https://static.coupangcdn.com/ja/cmg_paperboy/image/1586337219489/C1_PC.jpg',
    des: 'toy',
  },
  {
    image:
      'https://thumbnail8.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_d707e980-cf2d-47e6-bd8e-5df3083dde7c.jpg',
    des: 'planTerrier',
  },
  {
    image:
      '//thumbnail7.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_b62ef2cb-4f08-4b43-9252-60fdd860e8da.jpg',
    des: 'kitchin',
  },
];

const TOTAL_BANNER = 2;
const Carousel = () => {
  const [banner, setBanner] = useState(0);
  const bannerRef = useRef(null);

  setTimeout(() => {
    if (banner >= TOTAL_BANNER) {
      setBanner(0);
    } else {
      setBanner(banner + 1);
    }
  }, 3000);

  useEffect(() => {
    bannerRef.current.style.transition = 'all 0s ease-in-out';
    bannerRef.current.style.transform = `translateX(-${banner}00%)`;
  }, [banner]);
  return (
    <CarouselSection>
      <ul ref={bannerRef}>
        {bannerMap.map((b, index) => (
          <li key={index}>
            <img src={b.image} alt={b.des} />
          </li>
        ))}
      </ul>
    </CarouselSection>
  );
};

export default Carousel;
