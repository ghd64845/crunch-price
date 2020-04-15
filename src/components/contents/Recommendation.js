import React from 'react';
import styled from 'styled-components';

const RecommendationBlock = styled.div`
  position: relative;
  margin: 50px auto 0 auto;
  width: 1130px;
`;

const Title = styled.h3`
  display: block;
  width: 190px;
  height: 52px;
  font-size: 20px;
`;

const CatagoryBestUnits = styled.div`
  width: 1130px;
  margin-bottom: 20px;
  background: #fff;
  dl {
    width: 100%;

    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    .title {
      font-size: 20px;
      font-weight: bold;

      width: 130px;
      padding-top: 30px;
      margin-left: 20px;
      border-right: 1px solid #ddd;
      a {
        text-decoration: none;
        color: lightgray;
        font-size: 12px;
        font-family: 돋움, Dotum, sans-serif;
      }
    }
    .best-product-list {
      margin: 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        width: 950px;
        margin: 0 auto;
        margin-left: 30px;
        padding: 0;
        li {
          list-style: none;
          margin: 10px;
          margin-right: 20px;
          img {
            width: 200px;
            height: 200px;
          }
          p {
            width: 200px;
            color: #000;
            font-size: 13px;
            margin: 0;
            &.before {
              font-size: 13px;
              color: gray;
              text-decoration: line-through;
            }
            &.after {
              font-size: 16px;
              color: #000;
              font-weight: bold;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
`;

const RecommendationMap = [
  {
    title: '생활/건강',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=004',
    border: { borderTop: '2px solid #00d180', color: '#00d180' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1_e0MgL1TBuNjy0Fjq6yjyXXas/Xyl178u-38-5mm-3d.jpg',
        name:
          '제빵 기구 Xyl178u 38.5mm 3d 아이스크림 콘 실리콘 몰드-퐁당, 식품 안전, 캔디, 폴리머 클레이, 비누, 초콜릿 몰드',
        price: '2,720원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1qlhTRkvoK1RjSZFDq6xY3pXab/Diy-gumpaste-dy0028.jpg',
        name:
          '제빵 기구 Diy 도마뱀 모양의 실리콘 금형 뱀 퐁당 케이크 장식 도구 gumpaste 설탕 붙여 넣기 캔디 초콜릿 금형 dy0028',
        price: '4,400원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1pVB8WXzqK1RjSZFoq6zfcXXa5/1-pc-3d.jpg',
        name:
          '제빵 기구 1 pc 꽃 패턴 실리콘 몰드 매트 3d 레이스 엠보싱 금형 퐁당 케이크 장식 설탕 공예 베이킹 과자 케이크 도구',
        price: '4,700원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1j20IRVXXXXX2XVXXq6xXFXXXa/3-f0681xm.jpg',
        name:
          '제빵 기구 3 고양이 스타일 실리콘 곰 팡이 장식 동물 퐁 당 컵 케 잌은 금형 초콜릿 폴리머 클레이 금형 수지 도구 f0681xm',
        price: '6,490 원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1_v0dm4SYBuNjSspjq6x73VXaM/M0535-diy.jpg',
        name:
          '제빵 기구 M0535 물고기 실리콘 곰 팡이 초콜릿 케이크 푸딩 젤리 실리콘 몰드 diy 퐁당 케이크 장식 도구',
        price: '4,310원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1bEOyaiLrK1Rjy1zdq6ynnpXa7/1-pc-diy.jpg',
        name:
          '제빵 기구 뜨거운 판매 1 pc 금붕어 펜 던 트 액체 실리콘 곰 팡이 diy 수 지 보석 만들기 공예 도구 케이크 퐁 당 베이킹 과자 장식 도구',
        price: '1,360원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB11k39XXooBKNjSZPhq6A2CXXaQ/2.jpg',
        name:
          '제빵 기구 초콜릿 퐁당 어린이 장난감 금형 수지 폴리머 클레이 도구를 장식하는 케이크에 대 한 2 스타일 시뮬레이션 스포츠 자동차 실리콘 금형',
        price: '4,060원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB14tOdPbvpK1RjSZPiq6zmwXXaR/-.jpg',
        name:
          '제빵 기구 새로운 연꽃 잎 작은 개구리 퐁당 실리콘 금형 초콜릿 금형, 케이크 디저트 장식 금형, 주방 베이킹 가제트, 양초 금형',
        price: '1,310원',
      },
    ],
  },
  {
    title: '출산/육아',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=008',
    border: { borderTop: '2px solid #00aad4', color: '#00aad4' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/H8938a296f7554693bc6822d36d26ee58q/beyblade-bayblade.jpg',
        name:
          '팽이 다카라 토미 탑스 런처 beyblade 버스트 세트 스타터 및 아레나 bayblade 금속 하나님 탑 베이 블레이드 블레이드 장난감 회전',
        price: '38,670원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1PMNcXZfrK1RkSnb4q6xHRFXaN/avengers.jpg',
        name:
          '소년용 의류 어린이의 새로운 상위 티 avengers 아이언 맨 토르 아이 소년 후드 의류 아기 소년 코트 스파이더 맨 의상 키즈 까마귀 티셔츠 ',
        price: '16,130원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1z_gHMpXXXXaIXVXXq6xXFXXXF/escudo.jpg',
        name:
          '액션 & 장난감 숫자 복수 자 슈퍼 영웅 캡틴 아메리카 방패 헬멧 코스프레 아이 장난감 액션 피겨 모델 플라스틱 escudo',
        price: '5,900원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1R3fjcUGF3KVjSZFoq6zmpFXaf/-.jpg',
        name:
          'Stuffed & Plush Animals 환상적인 글로우 레인보우 날개 유니콘 플러시 장난감 거대한 유니콘 장난감 박제 동물 인형 솜털 머리 플라이 말 완구 어린이를위한',
        price: '24,860원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1..qzaiCYBuNkHFCcq6AHtVXad/105-pcs-diy.jpg',
        name:
          '105 pcs diy 건설 대리석 레이스 실행 미로 공 트랙 빌딩 블록 아기 교육 장난감에 대 한 어린이 선물',
        price: '13,750원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H1c6ac90c95e8483c983ba7f69b098009R/Tilda-paola-reina-tilda-1-4-bjd.jpg',
        name:
          'Tilda 캔버스 스 니 커 즈 paola reina 인형, 패션 미니 장난감 체육관 신발 tilda, 1/4 bjd 인형 스 니 커 즈 신발 인형 액세서리',
        price: '8,470원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/Hc62d6bad150345cca9a8edc062013eb7a/pvc.jpg',
        name:
          '플레이 매트 새로운 풍선 아기 키즈 워터 매트 환경 친화적 인 pvc 거북이 패턴 패드 스플래시 패드 물 채워진 쿠션 재미있는 활동',
        price: '18,210원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1k9N_Xrr1gK0jSZFDq6z9yVXaY/beyblade-B-125-B-122-bayblade.jpg',
        name:
          'Total 스타일 beyblade 버스트 B-125 B-122 경기장 장난감 판매 베이 블레이드 블레이드 발사기 bayblade bable 드레인 fafnir 피닉스 블레이드',
        price: '3,210원',
      },
    ],
  },
  {
    title: '화장품/미용',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=011',
    border: { borderTop: '2px solid #7e57c2', color: '#7e57c2' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1o4ePcwmH3KVjSZKzq6z2OXXax/tslm2.jpg',
        name:
          '강력한 속눈썹 성장 세럼 아이 래쉬 인핸서 마스카라 속눈썹 촉진제 두꺼운 롱 아이 래쉬 간호 성장 액체 tslm2',
        price: '2,500원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/Hd60cba7e17be46a6b4ade4017226b1fbg/Leafu-modelones-5d-uv-magentic-led-led.jpg',
        name:
          'Leafu modelones 5d 고양이 눈 uv 네일 젤 폴란드어 카멜레온 magentic led 젤 네일 광택 자석 스틱 세미 영구 led 젤 필요',
        price: '3,740원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H23c57e31ad844fa5a48dfdd5bcd4b862z/Buy-3-get-1-gift.jpg',
        name:
          '피부 관리 Buy 3 get 1 gift 히알루 론산 페이스 세럼 모이스춰 라이징 에센스 화이트닝 페이셜 세럼 스킨 케어 안티 에이징 바이블 런트 글래머',
        price: '19,630원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1BKVia8Kw3KVjSZFOq6yrDVXax/Ameizii.jpg',
        name:
          '피부 관리 Ameizii 페이스 에센스 히알루 론산 세럼 모이스춰 라이징 화이트닝 리프팅 퍼밍 에센스 안티 에이징 페이스 스킨 케어 리페어 tslm2',
        price: '1,780원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H7fbbe910fcd046458d887a4c995351e4W/Goochie-soath-painless.jpg',
        name:
          '타투 잉크 Goochie 영원한 메이크업 눈썹 &amp; 립 스틱 문신 진정 에이전트 피부 soath 솔루션 painless/고정 에이전트 문신 지원',
        price: '52,790원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1ElFpPbvpK1RjSZPiq6zmwXXaf/7.jpg',
        name:
          '피부 관리 7 개/상자 세라마이드 앰플 에센스 수축 모공 퍼밍 안티 링클 페이스 세럼 모이스춰 라이징 화이트닝 세럼 스킨 케어',
        price: '4,000원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1_BvYSXXXXXXWXVXXq6xXFXXXA/-.jpg',
        name:
          '토너 자연 패션 순수 히알루 론산 액체 신부 숙녀 메이크업 보습 액체 앰플 새로운',
        price: '2,170원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H099cdaed23574572bd498022ba6b7f27y/Sunisa-bb.jpg',
        name:
          '네일 젤 Fengshangmei 15g 젤 네일 익스텐션 클리어 생성자 젤 네일 폴리시 위장 18 색 uv 빌더 젤',
        price: '5,250원',
      },
    ],
  },
  {
    title: '패션/의류',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=009',
    border: { borderTop: '2px solid #1992df', color: '#1992df' },
    image: [
      {
        src: 'https://ae01.alicdn.com/kf/HTB1Y32awb9YBuNjy0Fgq6AxcXXaY/-.jpg',
        name:
          '소년 후드 어벤저 스 마블 슈퍼 히어로 아이언 맨 토르 헐크 캡틴 아메리카 스파이더 맨 스웨트 소년 키즈 만화 자켓 2-7 t',
        price: '18,060원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1RDPFvYZnBKNjSZFGq6zt3FXau/1.jpg',
        name:
          '남성용 양말 패션 1 쌍 남자 양말 면화 편안한 마리화나 잎 메이플 리프 캐주얼 긴 잡초 승무원 양말',
        price: '3,610원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H0af43f2e38c94c4880c1bef1a65b2526E/-.jpg',
        name:
          '여성 바지 휘트니스 레깅스 인쇄 높은 허리 바지 러닝 체육관 스포츠 조깅 바지 바지',
        price: '3,700원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H2c22494f1e8c4561a373283eca175a9bo/cospla-venom-marvel-superhero-captain-america.jpg',
        name:
          '후드티 & 스웨터 스파이더 맨 후드 어벤저 스 엔드 게임 cospla venom 스웨트 데드 풀 까마귀 자켓 marvel superhero captain america streetwear',
        price: '30,410원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H2a376b19ce3649f2882b9d5d214bfc3cI/tracksuit-1-2-3.jpg_640x640q70.jpg',
        name:
          '후드티 & 스웨터 남여 아기 소년 소녀 후드 만화 노란색 미키 tracksuit 의류 신생아 스웨터 크기 1 2 3 년 유아 아기 옷',
        price: '8,200원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/Hcc77fcba01e7489c818ffae179aad03e8/-.jpg',
        name:
          '울 & 블렌드 겨울 가을 여성 패션 테디 베어 모피 코트 자켓 숙녀 무릎 긴 빈티지 자켓 따뜻한 아웃웨어 탑',
        price: '12,060원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1KtvpXlr0gK0jSZFnq6zRRXXan/3d.jpg',
        name:
          '남성용 의상 새로운 스파이더 맨 귀향 양복 성인 어린이 블랙 다크 스파이더 맨 의상 독 할로윈 3d 스판덱스 코스프레 의류',
        price: '53,990원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1NpsMae6sK1RjSsrbq6xbDXXaC/Soutong.jpg',
        name:
          '권투선수 Soutong 남자 복서 속옷 코튼 느슨한 트렁크 편안한 복서 반바지 남자 수면 홈 속옷',
        price: '11,240원',
      },
    ],
  },
  {
    title: '디지털/가전',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=003',
    border: { borderTop: '2px solid #5868be', color: '#5868be' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1lGOha.vrK1RjSszfq6xJNVXau/t4800u-t4800e-8-4-SM-T321-t325-t320-t321.jpg',
        name:
          '휴대폰 부품 삼성 원래 t4800u t4800e 삼성 갤럭시 탭 프로 8.4 SM-T321 t325 t320 t321 태블릿 예비 배터리 pc 4800 mah',
        price: '21,790원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1zvbebnHuK1RkSndVq6xVwpXaq/X6-sim-tf-h-smartwatch-xiaomi.jpg',
        name:
          '웨어러블 기기 X6 스마트 시계 지원 sim tf 카드 h 카메라 smartwatch 블루투스 다이얼/카메라 터치 스크린 아이폰 xiaomi 안드로이드 ios',
        price: '27,040원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/Hf706e3bd587d4ffa9d6d2553d8c7993fx/-.jpg',
        name:
          '피부 관리 주근깨 주름 두더지 제거 이오니아 자리 펜 피부 흉터 두더지 주름 검은 반점 제거 눈꺼풀 리프팅을위한 플라즈마 펜',
        price: '37,440원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1Y3ehaZ_vK1Rjy0Foq6xIxVXa4/EB-BT800FBE-s-10-5-t800-t801-t805-7900-mah.jpg',
        name:
          '휴대폰 부품 삼성 태블릿 배터리 EB-BT800FBE 삼성 갤럭시 탭 s 10.5 t800 t801 t805 7900 mah 정품 교체 배터리 + 도구',
        price: '22,760원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H4b9fc0d0eedc462da0e2aaa8c8148328b/10-RFID-125KHz-fob-NFC-13-56MHz-USB-UID.jpg',
        name:
          '액세스 제어 10 영어 주파수 rfid 복사기 복사기 125 khz 키 fob nfc 리더 작가 13.56 mhz 암호화 된 프로그래머 usb uid 복사 카드 태그',
        price: '11,870원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1w_GqXED1gK0jSZFGq6zd3FXaW/2019-4000-mah-6-s-iphone6s.jpg',
        name:
          '휴대폰 부품 2019 새로운 도착 4000 mah 애플 아이폰 6 s 배터리 iphone6s 핸드폰 선물 도구와 스티커',
        price: '20,630원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/He0d727ccffa544518c1641083ec1ad6fZ/-.jpg',
        name:
          '웨어러블 기기 Usb 충전기 데이터 충전 케이블 garmin fenix 5 5 s 5x plus instinct forerunner 935 스마트 시계 코드 vivoactive3 음악 충전기',
        price: '9,400원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1wAB2JsfpK1RjSZFOq6y6nFXai/2000-mah-usb-4-dualshock-4.jpg',
        name:
          '웨어러블 기기 26 22mm 퀵 릴리스 garmin fenix 5x5 5x plus 3 3hr s60 포어 러너 945 시계 밴드 용 손목 밴드 스트랩',
        price: '6,660원',
      },
    ],
  },
  {
    title: '스포츠/레져',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=005',
    border: { borderTop: '2px solid #83be41', color: '#83be41' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/H2740a631bfc2446794da02f91d13eca5h/Sofirn-sp33-led-18650-cree-xhp50-2500lm-26650.jpg',
        name:
          'LED 조명 Sofirn sp33 led 손전등 18650 cree xhp50 고출력 2500lm 램프 토치 라이트 강력한 손전등 26650 방수 캠프 사이클',
        price: '36,000원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1Pv5.aznuK1RkSmFPq6AuzFXaz/7000-led-usb.jpg',
        name:
          'LED 조명 7000 루멘 led 전조 등 모션 센서 울트라 밝은 하드 모자 헤드 램프 강력한 헤드 라이트 usb 충전식 방수 손전등',
        price: '15,010원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1vtnNaO_1gK0jSZFqq6ApaXXa7/7000-XHP-70-2-led-zoomable-usb.jpg',
        name:
          'LED 조명 7000 루멘 XHP-70.2 led 전조 등 낚시 캠핑 헤드 라이트 높은 전원 랜턴 헤드 램프 zoomable usb 횃불 손전등 18650',
        price: '27,530원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1Nfm3a3kLL1JjSZFpq6y7nFXaG/-.jpg',
        name:
          '캠핑 & 하이킹 군사 허리 가방 액세서리 도구 변경 가방 위장 전술 포켓 배낭 케이스',
        price: '2,530원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/Ha5294b59088d4f64af398fcf7898eef3Y/Locle.jpg',
        name:
          '스포츠 액세서리 Locle 남자 여자 스키 헬멧 인 몰드 겨울 스포츠 스키 헬멧 스키 스노우 보드 고글 마스크 스노우 스케이트 헬멧',
        price: '64,160원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1RHe4NAvoK1RjSZFNq6AxMVXaV/Nandn-30-10000-2.jpg',
        name:
          '스키&스노보드 Nandn-30 학위 전문 스노우 보드 스키 장갑 10000 방수 겨울 따뜻한 스노우 장갑 스키 스노 모빌 2 손가락',
        price: '23,970원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1wx_OmjTpK1RjSZKPq6y3UpXay/Sofirn-SP33-LED-26650-Cree-XHP50-3000lm-18650-6.jpg',
        name:
          'LED 조명 Sofirn sp33 강력한 led 손전등 26650 cree xhp50 2500lm 전술 토치 18650 플래시 라이트 6 모드 표시 등 업데이트',
        price: '37,910원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H61794a4d7e934dc985659a919a86495ct/Bf2000-7-2-1-12-1bb.jpg',
        name:
          'Bf2000 릴 고속 7.2: 1 기어비 12 + 1bb 신선/바닷물 자기 브레이크 시스템 초경량 낚시 릴',
        price: '33,430원',
      },
    ],
  },
  {
    title: '여행/문화',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=007',
    border: { borderTop: '2px solid #00b599', color: '#00b599' },
    image: [
      {
        src:
          'https://contestimg.wish.com/api/webimage/5be4906eac1770172fd34ff9-medium.jpg?cache_buster=91e87384c9b1a72d794f3125e0ad7a25',
        name:
          '꽃배달 Gralara Set of 4 DIY Cutting Dies Scrapbooking Album Paper Card Embossing Flower',
        price: '4,170원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H97e6a5a7fd2e4f34a620da37f5e2686de/16-pvc.jpg',
        name:
          '놀이공원 16 인치 수박 플라밍고 키위 풍선 투명 pvc 놀이 공 수영장 엔터테인먼트 비치 볼 물 어린이 장난감 선물',
        price: '6,430원',
      },
      {
        src:
          'https://contestimg.wish.com/api/webimage/59f034744fcf123a6edb12e5-medium.jpg?cache_buster=d1adaacc23738302a9ef82b04199b71a',
        name:
          '국내숙박 Useful Waterproof Wireless Remote Floating Thermometer Swimming Pool Hot Tub Pond Spa',
        price: '25,340원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1VIAwKeuSBuNjSsziq6zq8pXaN/2.jpg',
        name:
          '정원 건물 온실에 2 층 미니 도보에 대 한 휴대용 플라스틱 정원 온실 커버 야외 보호 식물 꽃 (철 스탠드 없음)',
        price: '68,600원',
      },
      {
        src:
          'https://contestimg.wish.com/api/webimage/5d79fc598bcc464b1bb4d984-medium.jpg?cache_buster=d4fa2357d1d8d6cf2af4aa4a2d25c85a',
        name:
          '여행 1 pc 4 Port PCI-E to USB 3.0 HUB PCI Express Expansion Card Adapter 5 Gbps Speed',
        price: '5,570원',
      },
      {
        src:
          'https://contestimg.wish.com/api/webimage/5be5263c59db9f27549c79f5-medium.jpg?cache_buster=64153bf5e991fa3a493ff1ccf2e8f3e6',
        name:
          '숙박 Gralara 24 Rolls/Box Mixed Colors Burlap Jute Twine Rope DIY Craft Wedding Decor',
        price: '14,670원',
      },
      {
        src:
          'https://contestimg.wish.com/api/webimage/5d9c494ab0641c71588a52b6-medium.jpg?cache_buster=b1209bc5b58d8d42a6b46f93a3f60895',
        name:
          '헤어/뷰티/건강 3 Colors Makeup Bronzer Contour Highlight Palette Long Lasting Powder Shades',
        price: '8,350원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HLB1D1d7SkvoK1RjSZFwq6AiCFXaL/hygrothermograph.jpg',
        name:
          '스파 튜브 & 사우나 룸 탁월한 사우나 룸 목재 온도계 습도계 hygrothermograph 온도 계측기',
        price: '11,240원',
      },
    ],
  },
  {
    title: '패션/잡화',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=010',
    border: { borderTop: '2px solid #f6699e', color: '#f6699e' },
    image: [
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1_KmAX5YrK1Rjy0Fdq6ACvVXaP/Omhxzj-ol-3-925-rn276.jpg',
        name:
          'Omhxzj 도매 성격 패션 ol 여자 여자 파티 웨딩 선물 실버 3 서클 925 스털링 실버 반지 rn276',
        price: '4,350원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1e02OfBfM8KJjSZFOq6xr5XXaH/2019.jpg',
        name:
          '스컬리스 & 비니즈 2019 캐주얼 비니 남성 여성 봄 여름 경량 얇은 모자 헬멧 라이너 코튼 페이스 마스크 스포츠 사이클링 모자 통기성',
        price: '7,120원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1EauAaiLxK1Rjy0Ffq6zYdVXa1/2018.jpg',
        name:
          '패션 합금 여성 목걸이 &amp; 펜던트 초커 목걸이 여성을위한 2018 골드 컬러 크리스탈 펜던트 목걸이 선물 도매',
        price: '1,080원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB13DxIBeOSBuNjy0Fdq6zDnVXa0/pu-2019-dor-a1220.jpg',
        name:
          '여성용 벨트 무료 타조 pu 가죽 여성 2019 스키니 나비 보우 허리 벨트 dor 드레스 좁은 얇은 허리띠 핫 세일 a1220',
        price: '2,040원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H6538a42e846d465993e645c859d4b7730/22mm-20mm-18-s2-s3-huami-amazfit-bip-gt.jpg',
        name:
          '22mm 20mm 18 삼성 기어 스포츠 s2 s3 프론티어 클래식 밴드 huami amazfit bip 스트랩 화웨이 gt 2 갤럭시 시계 액티브 42 46mm',
        price: '6,180원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1zY4.ah2rK1RkSnhJq6ykdpXaO/ushanka.jpg',
        name:
          '방한용 모자 남자를위한 겨울 폭탄 모자 가짜 모피 러시아 모자 ushanka 귀 플랩과 두꺼운 따뜻한 모자',
        price: '27,090원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1bgMgLXXXXXc0XVXXq6xXFXXXf/-.jpg',
        name: '스테인레스 스틸 반지 나루토 반지',
        price: '890원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1PskbXWSs3KVjSZPiq6AsiVXaI/-.jpg',
        name:
          '백팩 패션 여성 야외 고양이 귀 스팽글 스퀘어 숄더 가방 학교 패키지 야외 가방 여름',
        price: '14,730원',
      },
    ],
  },
  {
    title: '가구/인테리어',
    link: 'https://www.crunchprice.com/goods/goods_list.php?cateCd=002',
    border: { borderTop: '2px solid #dd6641', color: '#dd6641' },
    image: [
      {
        src: 'https://ae01.alicdn.com/kf/HTB147abJ4TpK1RjSZFKq6y2wXXak/hd.jpg',
        name:
          '그림 & 서예 현대 홈 장식 캔버스 백조 그림 발레 댄서 말 그림 북유럽 스타일 벽 아트 hd 인쇄 침실 용 모듈 포스터',
        price: '4,360원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/H841ba9b6bab44059adf348e335239e338/Flynova-UFO-led-fidget.jpg',
        name:
          '피젯 스피너 Flynova 운동 antistress 핸드 미니 플라잉 장난감 자이로 회전 드론 UFO led 손가락 spinner 로터리 어린이 크리스마스 선물',
        price: '26,280원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1cuXJQFXXXXbIXpXXq6xXFXXXW/-.jpg',
        name:
          '그림 & 서예 뉴욕 브루클린 다리 캔버스 인쇄 그림 대형 야경 도시 풍경 벽 예술 그림 거실 벽 장식',
        price: '31,790원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1eKuGa.uF3KVjSZK9q6zVtXXa6/Lovinsunshine-ab-135.jpg',
        name:
          'Lovinsunshine 침구 세트 킹 사이즈 럭셔리 이불 세트 퀸 듀벳 커버 ab #135',
        price: '69,530원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1mWm3KhGYBuNjy0Fnq6x5lpXaU/Cob-led.jpg',
        name:
          'Cob 모션 센서 led 야간 조명 무선 마그네틱 캐비닛 라이트 배터리 전원 옷장 침실 터치 컨트롤 벽 램프',
        price: '2,670원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1iiPUMmzqK1RjSZPcq6zTepXaj/Led.jpg',
        name:
          '인테리어 라이트 Led 우드 그레인 펜던트 램프 디 밍이 가능한 조명 주방 섬 다이닝 룸 숍 바 카운터 장식 실린더 파이프 매달려 램프',
        price: '29,590원',
      },
      {
        src:
          'https://ae01.alicdn.com/kf/HTB1TAARbcbpK1RjSZFyq6x_qFXao/Eways1-2-deorated.jpg',
        name:
          '벽걸이 스티커 Eways 만화 게임 테마 벽 스티커 토토로 벽 스티커 9 스타일과 2 크기 방 deorated 도구',
        price: '11,320원',
      },
      {
        src: 'https://ae01.alicdn.com/kf/HTB1yhzlB3KTBuNkSne1q6yJoXXaX/Hd.jpg',
        name:
          '그림 & 서예 Hd 인쇄 긴 맨하탄 뉴욕 포스터 브루클린 다리 스카이 라인 밤 캔버스 회화 도시 풍경 사진 침실 거실',
        price: '18,210원',
      },
    ],
  },
];

const Recommendation = () => {
  return (
    <RecommendationBlock>
      <Title>크프만의 카테고리별 추천 상품</Title>
      {RecommendationMap.map((r) => (
        <CatagoryBestUnits>
          <dl style={r.border}>
            <dt className="title">
              <div>{r.title}</div>
              <a href={r.link} target="_blank">
                더보기 >
              </a>
            </dt>
            <dd className="best-product-list">
              <ul>
                {r.image.map((i) => (
                  <li>
                    <img src={i.src} />
                    <p style={{ height: '52.8px' }}>
                      {i.name.length >= 50
                        ? i.name.substring(0, 50) + '...'
                        : i.name}
                    </p>
                    <p className="after">{i.price}</p>
                    <p className="before">{i.price}</p>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </CatagoryBestUnits>
      ))}
    </RecommendationBlock>
  );
};

export default Recommendation;
