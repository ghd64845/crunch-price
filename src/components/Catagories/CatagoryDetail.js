import React, { useState } from 'react';
import styled from 'styled-components';
import CatagoryDetailList from './CatagoryDetailList';
import { Arrow } from './CatagoryList';

const CatagoryListDetail = styled.div`
  position: absolute;
  display: inline-block;
  left: 100%;
  top: 0;
  height: 100%;
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const ListBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const List = styled.ul`
  font-size: 12px;
  letter-spacing: 2px;
  list-style: none;
  padding: 8px 0 5px 0;
  border-top: 0;
  font-weight: 20;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 1em;
  margin-inline-end: 1em;
  width: 130px;
  li {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    div {
      font-weight: bold;
      color: #00d180;
      text-decoration: underline;
    }
    &:hover {
      color: #00d180;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

const catagoryDetail = [
  {
    type: 'life',
    catagory: [
      {
        type: 'car',
        text: '자동차용품',
      },
      {
        type: 'tool',
        text: '공구',
      },
      {
        type: 'kitchen',
        text: '주방용품',
      },
      {
        type: 'Household',
        text: '생활용품',
      },
      {
        type: 'Phrases',
        text: '문구/사무용품',
      },
      {
        type: 'collectibles',
        text: '수집품',
      },
      {
        type: 'gardening',
        text: '정원/원예용품',
      },
      {
        type: 'instrument',
        text: '악기',
      },
    ],
  },
  {
    type: 'parenting',
    catagory: [
      {
        type: 'toy',
        text: '완구/매트',
      },
      {
        type: 'skin',
        text: '스킨/바디용품',
      },
      {
        type: 'oral',
        text: '구강청결용품',
      },
      {
        type: 'child',
        text: '유아동잡화',
      },
      {
        type: 'snack',
        text: '간식/건강용품',
      },
      {
        type: 'doll',
        text: '인형',
      },
      {
        type: 'out_supplies',
        text: '외출용품',
      },
      {
        type: 'stroller',
        text: '유모차',
      },
    ],
  },
  {
    type: 'cosmetics',
    catagory: [
      {
        type: 'skin_care',
        text: '스킨케어',
      },
      {
        type: 'body_care',
        text: '바디케어',
      },
      {
        type: 'hair_care',
        text: '헤어케어',
      },
      {
        type: 'perfume',
        text: '향수',
      },
      {
        type: 'cleansing',
        text: '클렌징',
      },
      {
        type: 'beauty_acc',
        text: '뷰티소품',
      },
      {
        type: 'nail',
        text: '네일케어',
      },
      {
        type: 'hue',
        text: '색조메이크업',
      },
    ],
  },
  {
    type: 'fashion',
    catagory: [
      {
        type: 'man',
        text: '남성의류',
      },
      {
        type: 'woman',
        text: '여성의류',
      },
      {
        type: 'womans_underwear',
        text: '여성언더웨어잠옷',
      },
      {
        type: 'mans_underwear',
        text: '남성언더웨어잠옷',
      },
      {
        type: 'children-clothing',
        text: '아동의류',
      },
    ],
  },
  {
    type: 'digital',
    catagory: [
      {
        type: 'sessional',
        text: '계절가전',
      },
      {
        type: 'phone_acc',
        text: '휴대폰악세서리',
      },
      {
        type: 'kitchen_appliances',
        text: '주방가전',
      },
      {
        type: 'multimedia',
        text: '멀티미디어장비',
      },
      {
        type: 'household',
        text: '생활가전',
      },
      {
        type: 'acoustic_acc',
        text: '음향가전',
      },
      {
        type: 'camera',
        text: '카메라/캠코더용품',
      },
      {
        type: 'peripheral',
        text: '주변기기',
      },
    ],
  },
  {
    type: 'sports',
    catagory: [
      {
        type: 'camping',
        text: '캠핑',
      },
      {
        type: 'golf',
        text: '골프',
      },
      {
        type: 'mountain_climbing',
        text: '등산',
      },
      {
        type: 'fishing',
        text: '낚시',
      },
      {
        type: 'bicycle',
        text: '자전거',
      },
      {
        type: 'health',
        text: '헬스',
      },
      {
        type: 'yoga',
        text: '요가/필라테스',
      },
      {
        type: 'sports_acc',
        text: '스포츠액세서리',
      },
    ],
  },
  {
    type: 'culture',
    catagory: [
      {
        type: 'delivery',
        text: '꽃케이크 배달',
      },
      {
        type: 'trip',
        text: '여행/항공권',
      },
      {
        type: 'leisure',
        text: '레저이용권',
      },
    ],
  },
  {
    type: 'stuff',
    catagory: [
      {
        type: 'woman_bag',
        text: '여성가방',
      },
      {
        type: 'jewelry',
        text: '주얼리',
      },
      {
        type: 'fasshion_acc',
        text: '패션소품',
      },
      {
        type: 'mans_bag',
        text: '남성가방',
      },
      {
        type: 'hat',
        text: '모자',
      },
      {
        type: 'clock',
        text: '시계',
      },
      {
        type: 'wallet',
        text: '지갑',
      },
      {
        type: 'sunglasses',
        text: '선글라스/안경테',
      },
    ],
  },
  {
    type: 'interior',
    catagory: [
      {
        type: 'DIY_supplies',
        text: 'DIY자제/용품',
      },
      {
        type: 'interior',
        text: '인테리어소품',
      },
      {
        type: 'home_deco',
        text: '홈데코',
      },
      {
        type: 'bedroom_furniture',
        text: '침실가구',
      },
      {
        type: 'dedding',
        text: '침구단품',
      },
      {
        type: 'fancywork',
        text: '수예',
      },
      {
        type: 'living_room',
        text: '거실가구',
      },
      {
        type: 'curtain',
        text: '커튼/블라인드',
      },
    ],
  },
];

const CatagoryDetail = ({ text }) => {
  const [type, setType] = useState(null);

  const onMouseEnter = (e) => {
    setType(e.target.id);
  };

  return (
    <CatagoryListDetail>
      {catagoryDetail.map((c, index) => (
        <ListBlock key={c.type}>
          {text === c.type ? (
            <List key={index}>
              {c.catagory.map((d) => (
                <li
                  key={d.type}
                  id={d.type}
                  onMouseEnter={onMouseEnter}
                  className={d.type === type ? 'active' : ''}
                >
                  {d.text}
                  {d.type === type && <Arrow />}
                </li>
              ))}
              <CatagoryDetailList type={type} />
              <li key={c.type}>
                {c.catagory.length >= 8 && <div>더보기</div>}
              </li>
            </List>
          ) : null}
        </ListBlock>
      ))}
    </CatagoryListDetail>
  );
};

export default CatagoryDetail;
