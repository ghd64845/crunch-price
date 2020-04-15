import React, { useState } from 'react';
import styled from 'styled-components';
import CatagoryDetail from './CatagoryDetail';
import { IoMdArrowDropright } from 'react-icons/io';

const CatagoryBlock = styled.div`
  position: absolute;
  z-index: 1;
  left: 198px;
  top: 2rem;
  box-shadow: -1px 4px 5px rgba(0, 0, 0, 0.3);
  width: auto;
  height: auto;
  text-align: left;
  padding: 0;
  margin: 0;
  background: #fff;
`;

const List = styled.ul`
  font-size: 12px;
  letter-spacing: 2px;
  list-style: none;
  padding: 8px 0 5px 0;
  border-top: 0;
  font-weight: 20;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  margin-inline-start: 1em;
  margin-inline-end: 1em;
  width: 130px;
  li {
    display: list-item;
    line-height: 30px;
    width: 100%;
    padding-right: 60px;
    cursor: pointer;
    &.active {
      color: #00d180;
      letter-spacing: 3px;
      font-weight: bold;
      width: 200%;
    }
  }
`;

export const Arrow = styled(IoMdArrowDropright)`
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 8px;
`;

const textMap = [
  {
    name: 'life',
    text: '생활/건강',
  },
  {
    name: 'parenting',
    text: '출산/육아',
  },
  {
    name: 'cosmetics',
    text: '화장품/미용',
  },
  {
    name: 'fashion',
    text: '패션/의류',
  },
  {
    name: 'digital',
    text: '디지털/가전',
  },
  {
    name: 'sports',
    text: '스포츠/레저',
  },
  {
    name: 'culture',
    text: '여행/문화',
  },
  {
    name: 'stuff',
    text: '패션/잡화',
  },
  {
    name: 'interior',
    text: '가구/인테리어',
  },
];

const CatagoryList = ({ visible }) => {
  const list = textMap;

  const [value, setValue] = useState('');
  const [active, setActive] = useState(null);

  const onMouseOver = (e) => {
    setValue(e.target.id);
    setActive('active');
  };
  const onMouseLeave = () => {
    setValue(null);
  };

  if (!visible) return null;
  return (
    <>
      <CatagoryBlock>
        <List>
          {list.map((list, index) => (
            <li
              key={list.name}
              id={list.name}
              className={list.name === value ? active : ''}
              onMouseEnter={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              {list.text}
              {list.name === value && [
                <CatagoryDetail key={index} text={value} name={active} />,
                <Arrow key={value} />,
              ]}
            </li>
          ))}
        </List>
      </CatagoryBlock>
    </>
  );
};

export default CatagoryList;
