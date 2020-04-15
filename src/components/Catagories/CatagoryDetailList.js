import React from 'react';
import styled from 'styled-components';

const CatagoryDetailListBlock = styled.div`
  position: absolute;
  display: inline-block;
  left: 100%;
  top: 0;
  height: 100%;
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 3;
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
  width: 200px;
  li {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    &:hover {
      color: #00d180;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

const catagoryDetailList = [
  {
    type: 'car',
    catagory: [
      {
        type: 'ramp',
        text: '램프',
      },
      {
        type: 'phone',
        text: '휴대폰용품',
      },
      {
        type: 'interior',
        text: '인테리어용품',
      },
      {
        type: 'tire',
        text: '타이어/휠',
      },
      {
        type: 'tuning',
        text: '튜닝용품',
      },
      {
        type: 'oil',
        text: '오일관리',
      },
      {
        type: 'DIY',
        text: 'DIY용품',
      },
      {
        type: 'cable',
        text: '차량용케이블',
      },
    ],
  },
  {
    type: 'tool',
    catagory: [
      {
        type: 'safe',
        text: '안전용품',
      },
      {
        type: 'welding',
        text: '용접공구',
      },
      {
        type: 'packing',
        text: '포장용품',
      },
      {
        type: 'handwork',
        text: '수작업공구',
      },
      {
        type: 'trandmission',
        text: '전동공구',
      },
      {
        type: 'measure',
        text: '측정공구',
      },
      {
        type: 'electricity',
        text: '전기용품',
      },
      {
        type: 'horticulture',
        text: '원예공구',
      },
    ],
  },
  {
    type: 'kitchen',
    catagory: [
      {
        type: 'cookware',
        text: '조리기구',
      },
      {
        type: 'bakery',
        text: '제과/제빵용품',
      },
      {
        type: 'knife',
        text: '칼/커팅기구',
      },
      {
        type: 'airtight_container',
        text: '보관/밀폐용기',
      },
      {
        type: 'cup',
        text: '잔/컵',
      },
      {
        type: 'pot',
        text: '냄비/솥',
      },
      {
        type: 'kitchen_goods',
        text: '주방잡화',
      },
      {
        type: 'wine',
        text: '와인용품',
      },
    ],
  },
  {
    type: 'Household',
    catagory: [
      {
        type: 'security',
        text: '보안용품',
      },
      {
        type: 'pest',
        text: '해충퇴치용품',
      },
      {
        type: 'life-goods',
        text: '생활잡화',
      },
      {
        type: 'detergent',
        text: '세제/세정제',
      },
      {
        type: 'sanitary_pad',
        text: '생리대',
      },
      {
        type: 'fabric_softener',
        text: '섬유유연제',
      },
      {
        type: 'deh_aro_deo',
        text: '제습/방향/탈취',
      },
      {
        type: 'paper_towel',
        text: '화장지',
      },
    ],
  },
  {
    type: 'Phrases',
    catagory: [
      {
        type: 'writing',
        text: '필기도구',
      },
      {
        type: 'evrnt',
        text: '이벤트/파티용품',
      },
      {
        type: 'fensi',
        text: '펜시용품',
      },
      {
        type: 'other',
        text: '기타문구/사무용품',
      },
      {
        type: 'note',
        text: '노트/수첩',
      },
      {
        type: 'drafting',
        text: '제도용품',
      },
      {
        type: 'desk',
        text: '데스크용품',
      },
      {
        type: 'office',
        text: '사무기기',
      },
    ],
  },
  {
    type: 'collectibles',
    catagory: [
      {
        type: 'survival',
        text: '서바이벌',
      },
      {
        type: 'model',
        text: '모형/프라모델/피규어',
      },
      {
        type: 'wireless',
        text: '무선/RC',
      },
      {
        type: 'costume',
        text: '코스튬플레이',
      },
      {
        type: 'craft',
        text: '공예품',
      },
      {
        type: 'game',
        text: '게임',
      },
      {
        type: 'unusual_collection',
        text: '이색수집품',
      },
      {
        type: 'puzzle',
        text: '퍼즐/블록',
      },
    ],
  },
  {
    type: 'gardening',
    catagory: [
      {
        type: 'flowerpot',
        text: '화분',
      },
      {
        type: 'landscape',
        text: '조경수/묘목',
      },
      {
        type: 'garden_acc',
        text: '정원부자재',
      },
      {
        type: 'water_iris',
        text: '물조리개',
      },
      {
        type: 'holticulture_acc',
        text: '원예부자재',
      },
      {
        type: 'pebble',
        text: '자갈/모래/흙',
      },
    ],
  },
  {
    type: 'instrument',
    catagory: [
      {
        type: 'stringed',
        text: '현악기',
      },
      {
        type: 'wind',
        text: '관악기',
      },
      {
        type: 'percussion',
        text: '타악기',
      },
      {
        type: 'rest',
        text: '기타악기',
      },
      {
        type: 'guitar',
        text: '기타(GUITAR)',
      },
      {
        type: 'sound_eq',
        text: '음향기자재',
      },
    ],
  },
  {
    type: 'toy',
    catagory: [
      {
        type: '',
        text: 'RC/작동완구',
      },
      {
        type: '',
        text: '블록',
      },
      {
        type: '',
        text: '물놀이용품',
      },
      {
        type: '',
        text: '유아동퍼즐',
      },
      {
        type: '',
        text: '언어/학습완구',
      },
      {
        type: '',
        text: '원목교구/가베',
      },
      {
        type: '',
        text: '스포츠완구',
      },
      {
        type: '',
        text: '역할놀이/소꿉놀이',
      },
    ],
  },
  {
    type: 'skin',
    catagory: [
      {
        type: '',
        text: '유아선크림',
      },
      {
        type: '',
        text: '유아로션',
      },
      {
        type: '',
        text: '유아바스/샴푸',
      },
    ],
  },
  {
    type: 'child',
    catagory: [
      {
        type: 'bag',
        text: '가방',
      },
      {
        type: 'hat',
        text: '모자',
      },
      {
        type: 'hair_acc',
        text: '헤어악세서리',
      },
      {
        type: 'shoes',
        text: '신발',
      },
      {
        type: 'apron',
        text: '앞치마/토시/두건',
      },
      {
        type: 'socks',
        text: '양말',
      },
      {
        type: 'scarf',
        text: '스카프',
      },
      {
        type: 'sunglasses',
        text: '선글라스',
      },
    ],
  },
  {
    type: 'snack',
    catagory: [
      {
        type: 'chilren_health_food',
        text: '어린이건강식품',
      },
    ],
  },
  {
    type: 'doll',
    catagory: [
      {
        type: 'stuffed_toy',
        text: '봉제인형',
      },
      {
        type: 'character',
        text: '캐릭터/패션인형',
      },
    ],
  },
  {
    type: 'out_supplies',
    catagory: [
      {
        type: 'diaper_bag',
        text: '기저귀가방',
      },
      {
        type: 'other_outing',
        text: '기타외출용품',
      },
    ],
  },
  {
    type: 'stroller',
    catagory: [
      {
        type: 'portable',
        text: '초경량/휴대용',
      },
      {
        type: 'deluxe',
        text: '절충형/디럭스형',
      },
    ],
  },
  {
    type: 'skin_care',
    catagory: [
      { type: 'skin_toner', text: '스킨/토너' },
      { type: 'essence', text: '에센스' },
      { type: 'eye_care', text: '아이케어' },
      { type: 'cream', text: '크림' },
      { type: 'cosmetic_set', text: '화장품 세트' },
    ],
  },
  {
    type: 'body_care',
    catagory: [
      { type: 'body_slimming', text: '바디슬리밍' },
      { type: 'depilatory', text: '제모제' },
      { type: 'foot_care', text: '풋케어' },
      { type: 'hand_care', text: '핸드케어' },
      { type: 'body_cleanser', text: '바디클렌저' },
      { type: 'body_lotion', text: '바디로션' },
    ],
  },
  {
    type: 'hair_care',
    catagory: [
      { type: 'treatment', text: '트리트먼트' },
      { type: 'shampoo', text: '샴푸' },
      { type: 'hairloss_care', text: '탈모케어' },
      { type: 'rinse', text: '린스' },
      { type: 'hair_pack', text: '헤어팩' },
    ],
  },
  {
    type: 'perfume',
    catagory: [
      { type: 'womans_perfume', text: '여성향수' },
      { type: 'mans_perfume', text: '남성향수' },
    ],
  },
  {
    type: 'cleansing',
    catagory: [
      { type: 'lib&eye_remover', text: '립 & 아이리무버' },
      { type: 'cleansing_oil', text: '클랜징오일' },
      { type: 'cleansing_foam', text: '클랜징폼' },
    ],
  },
  {
    type: 'beauty_acc',
    catagory: [
      { type: 'tattoo', text: '타투' },
      { type: 'eye_prop', text: '아이소품' },
      { type: 'face-prop', text: '페이스소품' },
      { type: 'makeup_brush', text: '메이크업브러시' },
      { type: 'hair_prop', text: '헤어소품' },
      { type: 'cosmetic_case', text: '화장품케이스' },
      { type: 'DIY_cosmetic', text: 'DIY화장품재료' },
    ],
  },
  {
    type: 'nail',
    catagory: [
      { type: 'nail_care_tools', text: '네일케어도구' },
      { type: 'nail_art', text: '네일아트' },
      { type: 'nail_care_set', text: '네일케어세트' },
      { type: 'manicure', text: '매니큐어' },
    ],
  },
  {
    type: 'hue',
    catagory: [
      { type: 'eye_shadow', text: '아이섀도' },
      { type: 'lipstick', text: '립스틱' },
      { type: 'lip_gloss', text: '립글로스' },
      { type: 'lip_care', text: '립케어' },
      { type: 'mascara', text: '마스카라' },
      { type: 'lip_liner', text: '립라이너' },
      { type: 'eye_brow', text: '아이브로' },
      { type: 'eye_liner', text: '아이라이너' },
    ],
  },
  {
    type: 'man',
    catagory: [
      { type: 'neat', text: '니트/스웨터' },
      { type: 't_shirt', text: '티셔츠' },
      { type: 'sports_wear', text: '트레이닝복' },
      { type: 'suit_set', text: '정장세트' },
      { type: 'pants', text: '바지' },
      { type: 'jeans', text: '청바지' },
      { type: 'coat', text: '코트' },
      { type: 'jacket', text: '재킷' },
    ],
  },
  {
    type: 'woman',
    catagory: [
      { type: 'party_wear', text: '파티복' },
      { type: 'coat', text: '코트' },
      { type: 'one_piece_dress', text: '원피스' },
      { type: 'neat', text: '니트/스웨터' },
      { type: 't_shirt', text: '티셔츠' },
      { type: 'leggings', text: '레깅스' },
      { type: 'jumpsuit', text: '점프슈트' },
      { type: 'blouse', text: '블라우스/셔츠' },
    ],
  },
  {
    type: 'womans_underwear',
    catagory: [
      { type: 'underwear', text: '팬티' },
      { type: 'home_wear', text: '잠옷/홈웨어' },
      { type: 'season', text: '시즌성내의' },
      { type: 'underwear_set', text: '속옷세트' },
      { type: 'slip', text: '슬립' },
      { type: 'bra', text: '브라' },
      { type: 'correction_underwear', text: '보정속옷' },
      { type: 'underwear_acc', text: '언더웨어소품' },
    ],
  },
  {
    type: 'mans_underwear',
    catagory: [
      { type: 'home_wear', text: '잠옷/홈웨어' },
      { type: 'underwear', text: '팬티' },
    ],
  },

  {
    type: 'sessional',
    catagory: [
      { type: 'air_conditioner', text: '에어컨' },
      { type: 'fan', text: '선풍기' },
      { type: 'electric_heater', text: '전기히터' },
      { type: 'air_cleaner', text: '공기정화기' },
      { type: 'dehumidifier', text: '제습기' },
    ],
  },
  {
    type: 'phone_acc',
    catagory: [
      { type: 'battery', text: '휴대폰베터리' },
      { type: 'wearable_divice', text: '웨어러블 디바이스' },
      { type: 'charger', text: '휴대폰충전기' },
      { type: 'holder', text: '휴대폰 거치대' },
      { type: 'cellphone_acc', text: '기타 휴대폰액세서리' },
      { type: 'protection_film', text: '휴대폰보호필름' },
      { type: 'case', text: '휴대폰케이스' },
      { type: 'selfie_stick', text: '셀카봉' },
    ],
  },
  {
    type: 'kitchen_appliances',
    catagory: [
      { type: '', text: '믹서기' },
      { type: '', text: '쥬서기/녹즙기' },
      { type: '', text: '기타주방가전' },
      { type: '', text: '전용냉장고' },
      { type: '', text: '정수기' },
      { type: '', text: '전기포트' },
      { type: '', text: '핸드블렌더' },
      { type: '', text: '와플제조기' },
    ],
  },
  {
    type: 'multimedia',
    catagory: [
      { type: '', text: '구강청정기' },
      { type: '', text: '전화기' },
      { type: '', text: '청소기' },
      { type: '', text: '재봉틀' },
      { type: '', text: '핸드드라이어' },
      { type: '', text: '세탁기' },
      { type: '', text: '무전기' },
      { type: '', text: '보풀제거기' },
    ],
  },
  {
    type: 'household',
    catagory: [
      { type: '', text: '구강청정기' },
      { type: '', text: '전화기' },
      { type: '', text: '청소기' },
      { type: '', text: '재봉틀' },
      { type: '', text: '핸드드라이어' },
      { type: '', text: '세탁기' },
      { type: '', text: '무전기' },
      { type: '', text: '보풀제거기' },
    ],
  },
  {
    type: 'acoustic_acc',
    catagory: [
      { type: '', text: '리시버/앰프' },
      { type: '', text: '이어폰/헤드폰액세서리' },
      { type: '', text: '스피커' },
      { type: '', text: '블루투스셋' },
      { type: '', text: '마이크' },
      { type: '', text: '이어폰' },
      { type: '', text: 'MP3' },
      { type: '', text: '오디오' },
    ],
  },
  {
    type: 'camera',
    catagory: [
      { type: '', text: '카메라/캠코더 관련용품' },
      { type: '', text: '일반디카' },
      { type: '', text: '카메라가방/케이스' },
      { type: '', text: '메모리카드' },
      { type: '', text: '카드리더기' },
      { type: '', text: '켐코더' },
      { type: '', text: '플래시/조명용품' },
      { type: '', text: '렌즈용품' },
    ],
  },
  {
    type: 'camping',
    catagory: [
      { type: '', text: '랜턴' },
      { type: '', text: '취사용품' },
      { type: '', text: '텐트용품' },
      { type: '', text: '천막' },
      { type: '', text: '기타캠핑용품' },
      { type: '', text: '타용도칼' },
      { type: '', text: '캠핑매트' },
      { type: '', text: '캠핑의자' },
    ],
  },
  {
    type: 'golf',
    catagory: [
      { type: '', text: '골프클럽' },
      { type: '', text: '골프백' },
      { type: '', text: '골프잡화' },
      { type: '', text: '골프의류' },
      { type: '', text: '골프화' },
      { type: '', text: '골프공' },
      { type: '', text: '골프필드용품' },
    ],
  },
  {
    type: 'mountain_climbing',
    catagory: [
      { type: '', text: '등산장비' },
      { type: '', text: '등산가방' },
      { type: '', text: '등산화' },
      { type: '', text: '기타등산장비' },
      { type: '', text: '등산의류' },
    ],
  },
  {
    type: 'fishing',
    catagory: [
      { type: '', text: '낚시릴' },
      { type: '', text: '낚싯대' },
      { type: '', text: '낚싯줄' },
      { type: '', text: '낚시용품' },
      { type: '', text: '바다낚시' },
      { type: '', text: '낚시의류/잡화' },
      { type: '', text: '낚시공구' },
      { type: '', text: '민물낚시' },
    ],
  },
  {
    type: 'bicycle',
    catagory: [
      { type: '', text: '자전거용품' },
      { type: '', text: '자전거부품' },
      { type: '', text: '자전거의류/잡화' },
      { type: '', text: '자전거/MTB' },
    ],
  },
  {
    type: 'health',
    catagory: [
      { type: '', text: '웨이트기구' },
      { type: '', text: '헬스소품' },
      { type: '', text: '러닝머신' },
      { type: '', text: '복근운동기구' },
      { type: '', text: '아령/덤벨' },
    ],
  },
  {
    type: 'yoga',
    catagory: [
      { type: '', text: '요가용품' },
      { type: '', text: '요가복' },
      { type: '', text: '요가매트' },
    ],
  },
  {
    type: 'sports_acc',
    catagory: [
      { type: '', text: '스포츠마스크' },
      { type: '', text: '스포츠토시' },
      { type: '', text: '호각/호루라기' },
      { type: '', text: '스포츠선글라스' },
    ],
  },
  {
    type: 'delivery',
    catagory: [{ type: '', text: '꽃배달' }],
  },
  {
    type: 'trip',
    catagory: [
      { type: '', text: '해외숙박' },
      { type: '', text: '국내숙박' },
      { type: '', text: '해외여행' },
    ],
  },
  {
    type: 'woman_bag',
    catagory: [
      { type: '', text: '백팩' },
      { type: '', text: '숄더백' },
      { type: '', text: '토트백' },
      { type: '', text: '파우치' },
      { type: '', text: '클러치백' },
      { type: '', text: '크로스백' },
      { type: '', text: '가방소품' },
    ],
  },
  {
    type: 'jewelry',
    catagory: [
      { type: '', text: '목걸이' },
      { type: '', text: '귀걸이' },
      { type: '', text: '팔찌' },
      { type: '', text: '반지' },
      { type: '', text: '팬던트' },
      { type: '', text: '주얼리세트' },
      { type: '', text: '주얼리소품' },
      { type: '', text: '발찌' },
    ],
  },
  {
    type: 'fasshion_acc',
    catagory: [
      { type: '', text: '스카프' },
      { type: '', text: '브로치' },
      { type: '', text: '한복소품' },
      { type: '', text: '와펜' },
      { type: '', text: '키홀더' },
      { type: '', text: '기타패션소품' },
      { type: '', text: '우산' },
      { type: '', text: '넥타이' },
    ],
  },
  {
    type: 'mans_bag',
    catagory: [
      { type: '', text: '브리프케이스' },
      { type: '', text: '백팩' },
      { type: '', text: '힙색' },
      { type: '', text: '숄더백' },
      { type: '', text: '크로스백' },
    ],
  },
  {
    type: 'hat',
    catagory: [
      { type: '', text: '비니' },
      { type: '', text: '야구모자' },
      { type: '', text: '베레모' },
      { type: '', text: '페도라' },
      { type: '', text: '선캡' },
      { type: '', text: '사파리모자' },
    ],
  },
  {
    type: 'clock',
    catagory: [
      { type: '', text: '시계소품' },
      { type: '', text: '패션소품' },
      { type: '', text: '시계수리용품' },
      { type: '', text: '아동소품' },
    ],
  },
  {
    type: 'wallet',
    catagory: [
      { type: '', text: '남성지갑' },
      { type: '', text: '여성지갑' },
      { type: '', text: '카드/명함지갑' },
      { type: '', text: '동전지갑' },
      { type: '', text: '머니클립' },
    ],
  },
  {
    type: 'sunglasses',
    catagory: [
      { type: '', text: '선글라스' },
      { type: '', text: '안경케이스' },
      { type: '', text: '안경테' },
      { type: '', text: '안경줄' },
    ],
  },
  {
    type: 'DIY_supplies',
    catagory: [
      { type: '', text: '가구부속품' },
      { type: '', text: '벽지' },
      { type: '', text: '손잡이' },
      { type: '', text: '반제품' },
      { type: '', text: '시트지' },
      { type: '', text: '목재' },
      { type: '', text: '데코스티커' },
      { type: '', text: '접착제/보수용품' },
    ],
  },
  {
    type: 'interior',
    catagory: [
      { type: '', text: '조명' },
      { type: '', text: '액자' },
      { type: '', text: '기타장식용품' },
      { type: '', text: '시계' },
      { type: '', text: '장식인형' },
      { type: '', text: '스탠드' },
      { type: '', text: '장식미니어처' },
      { type: '', text: '아로마/캔들용품' },
    ],
  },
  {
    type: 'home_deco',
    catagory: [
      { type: '', text: '커버류' },
      { type: '', text: '주방데코' },
      { type: '', text: '쿠션/방석' },
    ],
  },
  {
    type: 'bedroom_furniture',
    catagory: [
      { type: '', text: '거울' },
      { type: '', text: '장롱/붙박이장' },
      { type: '', text: '침대' },
      { type: '', text: '화장대' },
      { type: '', text: '매트리스' },
      { type: '', text: '협탁' },
      { type: '', text: '침실세트' },
      { type: '', text: '서랍장' },
    ],
  },
  {
    type: 'dedding',
    catagory: [
      { type: '', text: '베개' },
      { type: '', text: '차렵이불' },
      { type: '', text: '담요' },
      { type: '', text: '매트/침대커버' },
      { type: '', text: '이불커버' },
    ],
  },
  {
    type: 'fancywork',
    catagory: [
      { type: '', text: '원단' },
      { type: '', text: '수예용품/부자재' },
      { type: '', text: '보석십자수' },
      { type: '', text: '자수' },
      { type: '', text: '뜨개질' },
      { type: '', text: '기타수예' },
      { type: '', text: '퀼트/펠트' },
    ],
  },
  {
    type: 'living_room',
    catagory: [
      { type: '', text: '소파' },
      { type: '', text: '테이블' },
      { type: '', text: 'TV거실장' },
      { type: '', text: '장식장' },
    ],
  },
  {
    type: 'curtain',
    catagory: [
      { type: '', text: '캐노피' },
      { type: '', text: '커튼' },
      { type: '', text: '커튼액세서리' },
      { type: '', text: '블라인드' },
      { type: '', text: '바란스' },
      { type: '', text: '대나무발' },
    ],
  },
];

const CatagoryDetailList = (type) => {
  return (
    <CatagoryDetailListBlock>
      {catagoryDetailList.map((c, index) => (
        <ListBlock key={c.type}>
          {type.type === c.type ? (
            <List key={index}>
              {c.catagory.map((d, index) => (
                <li key={index}>{d.text}</li>
              ))}
              <li>{c.catagory.length >= 8 && <div>더보기</div>}</li>
            </List>
          ) : null}
        </ListBlock>
      ))}
    </CatagoryDetailListBlock>
  );
};

export default CatagoryDetailList;
