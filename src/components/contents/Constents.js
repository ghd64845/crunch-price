import React from 'react';
import styled from 'styled-components';
import BestItems from './BestItems';
import Recommendation from './Recommendation';

const ContentsBlock = styled.section`
  width: 100%;
`;

const Contents = () => {
  return (
    <ContentsBlock>
      <BestItems />
      <Recommendation />
    </ContentsBlock>
  );
};

export default Contents;
