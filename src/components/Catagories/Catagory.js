import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import CatagoryList from './CatagoryList';
import { TiThMenu } from 'react-icons/ti';

const CatagorysBlock = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  border: 1px solid #f4f4f4;
  border-left: 0;
  border-right: 0;
`;

const Wrapper = styled(Responsive)`
  height: 2rem;
  display: flex;
  width: 1124px;
  .catagoryMain {
    display: flex;
    padding-left: 10px;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    letter-spacing: 1.5px;
    font-weight: bold;
    padding-right: 10px;
    &:hover {
      background: lightgray;
    }
  }
`;

const Menu = styled(TiThMenu)`
  width: 15px;
  height: auto;
  color: gray;
  margin-right: 10px;
`;

const CatagoryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Catagorys = () => {
  const [catagory, setCatagory] = useState(false);
  const onMouseOver = () => {
    setCatagory(true);
  };
  const onMouseLeave = () => {
    setCatagory(false);
  };
  return (
    <>
      <CatagorysBlock>
        <Wrapper>
          <div
            className="catagoryMain"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            <Menu />
            <span>전체 카테고리</span>
            <CatagoryList visible={catagory} onMouseOver={onMouseOver} />
          </div>
          <CatagoryGrid></CatagoryGrid>
        </Wrapper>
      </CatagorysBlock>
    </>
  );
};

export default Catagorys;
