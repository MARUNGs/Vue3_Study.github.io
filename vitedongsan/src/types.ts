// ********** 원룸 데이터 타입 설정 **********
type OneRootDataType = {
  id :number,
  title :string,
  image :string,
  content :string,
  price :number
}

// ********** 객체 설정 **********
export interface AppInfo {
  /** 원룸 이름 */
  roomName? :string
  /** css style */
  style? :string
  /** 상품목록 list */
  products :{id: number, name :string}[]
  /** 내비게이션 */
  menus :string[]
  /** 신고 수 */
  countList :{id :number, count :number}[]
  /** 모달창 상태값 */
  modalFlag :boolean
  /** 원룸 데이터 */
  oneRoomData :OneRootDataType[]
  /** 원룸 데이터 보존용 */
  originalData :OneRootDataType[]
  /** 원룸 상세페이지 idno */
  detailIdNo :number
  /** props 테스트용 속성 */
  object :{name :string, age :number}
  /** alert 안내창 상태값 */
  showDiscount :boolean
  /** alert 안내창 내용 */
  discountPer :number
}

// ********** 사용자가 입력한 데이터를 저장하는 객체 **********
export interface InputSaveInfo {
  /* 개월 수 - input(string) */
  month :string
  /* 개월 수 * 금액 계산 */
  monthyPrice :number
}

// 원룸 실제 데이터 
export let Data = [{
  id : 0,
  title: "Sinrim station 30 meters away",
  image: "https://codingapple1.github.io/vue/room0.jpg",
  content: "18년 신축공사한 남향 원룸 ☀️, 공기청정기 제공",
  price: 340000
  },
  {
  id : 1,
  title: "Changdong Aurora Bedroom(Queen-size)",
  image: "https://codingapple1.github.io/vue/room1.jpg",
  content: "침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능",
  price: 450000
  },
  {
  id : 2,
  title: "Geumsan Apartment Flat",
  image: "https://codingapple1.github.io/vue/room2.jpg",
  content: "금산오거리 역세권 아파트입니다. 애완동물 불가능 ?",
  price: 780000
  },
  {
  id : 3,
  title: "Double styled beds Studio Apt",
  image: "https://codingapple1.github.io/vue/room3.jpg",
  content: "무암동인근 2인용 원룸입니다. 전세 전환가능",
  price: 550000
  },
  {
  id : 4,
  title: "MyeongIl Apartment flat",
  image: "https://codingapple1.github.io/vue/room4.jpg",
  content: "탄천동 아파트 월세, 남향, 역 5분거리, 허위매물아님",
  price: 680000
  },
  {
  id : 5,
  title: "Banziha One Room",
  image: "https://codingapple1.github.io/vue/room5.jpg",
  content: "반지하 원룸입니다. 비올 때 물가끔 새는거 빼면 좋아요",
  price: 370000
}];