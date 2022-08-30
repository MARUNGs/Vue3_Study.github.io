/** interface 설정 */
export interface PostInterface {
    name :string,
    userImage :string,
    postImage :string,
    likes :number,
    date :string,
    liked :boolean,
    content: string,
    filter : string
}

/** 포스트 데이터 */
export const Data :PostInterface[] = [
    {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: "https://placeimg.com/640/480/arch",
      likes: 36,
      date: "May 15",
      liked: false,
      content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
      filter: "perpetua"
    },
    {
      name: "John Doe",
      userImage: "https://placeimg.com/200/200/people",
      postImage: "https://placeimg.com/640/480/people",
      likes: 20,
      date: "Apr 20",
      liked: false,
      content: "흔한 자랑스타그램",
      filter: "clarendon"
    },
    {
      name: "Minny",
      userImage: "https://placeimg.com/100/100/animals",
      postImage: "https://placeimg.com/640/480/animals",
      likes: 49,
      date: "Apr 4",
      liked: false,
      content: "우리집 개는 화장실 물도 내림",
      filter: "lofi"
    }
]

/** 인스타그램 필터명 목록 */
export const FilterNames :string[] = [ 
    "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
]