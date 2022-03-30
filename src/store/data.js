import {
  WiDaySunny,
  WiStormShowers,
  WiShowers,
  WiHail,
  WiSnow,
  WiFog,
  WiCloudy,
} from "react-icons/wi";
export const data = {
  events: [
    {
      id: 0,
      title: "배구",
      subtitle: "IBK기업은행vs인삼공사",
      start: "2022-03-20T16:00:00",
      end: "2022-03-20T18:00:00",
    },
    {
      id: 1,
      title: "결혼식",
      subtitle: "이수현 결혼식",
      start: "2022-03-19T12:00:00",
      end: "2022-03-19T16:00:00",
    },
    {
      id: 2,
      title: "수정",
      subtitle: "대시보드 디자인 수정하기",
      start: "2022-03-22T16:00:00",
      end: "2022-03-22T18:00:00",
    },
    {
      id: 3,
      title: "노마드코더 챌린지",
      subtitle: "챌린지 졸업작품 제출",
      start: "2022-03-21T06:00:00",
      end: "2022-03-21T18:00:00",
    },
    {
      id: 4,
      title: "양재꽃시장",
      subtitle: "캔들홀더 재료 사러가기",
      start: "2022-04-13T06:00:00",
      end: "2022-04-13T18:00:00",
    },
    {
      id: 5,
      title: "콘서트",
      subtitle: "크리스토퍼 내한",
      start: "2022-04-23T06:00:00",
      end: "2022-04-23T18:00:00",
    },
  ],
  playlist: [
    {
      id: "1cu5_5wYPoSgWxue6vjjLowaUIDvc8mQ1",
      title: "버퍼링(Glitch Mode)",
      artist: "NCT DREAM",
      albumimg:
        "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/612/218/82612218_1648449566044_1_600x600.JPG/dims/resize/Q_80,0",
      length: "3:27",
      mode: "",
    },
    {
      id: "1aS9f2QuE_CLgohmFPG7ridWqBl-CR2xa",
      title: "TOMBOY",
      artist: "(여자)아이들",
      albumimg:
        "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/586/132/82586132_1647227017471_1_600x600.JPG/dims/resize/Q_80,0",
      length: "2:54",
      mode: "white",
    },

    {
      id: "1G2_cXqTgSijagvuqkCaHJUh6swiQIJPQ",
      title: "행운을 빌어 줘",
      artist: "원필(DAY6)",
      albumimg:
        "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/523/279/82523279_1644208875973_1_600x600.JPG/dims/resize/Q_80,0",
      length: "3:29",
      mode: "",
    },
  ],
  quote: [
    {
      bgi: "quote1",
      quote: "해보자 해보자 후회하지말고",
      author: "김연경",
    },
    {
      bgi: "quote2",
      quote:
        "처음부터 겁먹지 말자, 막상 가보면 아무것도 아닌게 세상엔 참으로 많다",
      author: "김연아",
    },
    {
      bgi: "quote3",
      quote: "Never say Never",
      author: "김희진",
    },
    {
      bgi: "quote4",
      quote: "Make each day your masterpiece",
      author: "John Wooden",
    },
    {
      bgi: "quote5",
      quote:
        "You can't put a limit on anything. The more you dream, the farther you get.",
      author: "Michael Phelps",
    },
  ],
  todos: [
    {
      id: 0,
      text: "wordle 기능 추가하기",
      date: "03월 13일",
      isChecked: true,
    },
    {
      id: 1,
      text: "투두리스트 기능",
      date: "03월 14일",
      isChecked: true,
    },
    {
      id: 2,
      text: "대시보드 다시 만들기",
      date: "03월 13일",
      isChecked: true,
    },
    {
      id: 3,
      text: "Express 서버 공부하기",
      date: "03월 29일",
      isChecked: false,
    },
    {
      id: 4,
      text: "React ES6 이전 문법 공부하기",
      date: "03월 29일",
      isChecked: false,
    },
  ],
  bookmark: [
    {
      name: "Google",
      icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_logo_icon_169090.png",
      url: "https://www.google.com/",
    },
    {
      name: "Naver",
      icon: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
      url: "https://www.naver.com/",
    },

    {
      name: "youtube",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
      url: "https://www.youtube.com/",
    },
    {
      name: "wavve",
      icon: "https://download.beer/wp-content/uploads/2021/01/wavve-logo-0x0.png",
      url: "https://www.wavve.com/",
    },
    {
      name: "github",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      url: "https://github.com/hyemin12",
    },
    {
      name: "nomadcorder",
      icon: "https://nomadcoders.co/m.svg",
      url: "https://nomadcoders.co/",
    },
    {
      name: "tistory blog",
      icon: "https://play-lh.googleusercontent.com/HOwb9RHtv3AsCEyB-v1ni4z1TMgjqUJRP9FWFLNVsG-D8xoxxtfjGigzudTgSs0l8_g",
      url: "https://hyemin-12.tistory.com/",
    },
  ],
  works: [
    {
      filter: "react",
      id: "dashboard",
      img: "dashboardReact",
      title: "dashboard ",
      describtion:
        "다양한 API를 통해 정보를 가져오고, 해야할 일 목록 작성, 음악 플레이 등 다양한 작업을 할 수 있는 대쉬보드다. 개인 포트폴리오 페이지에서 포트폴리오도 확인 가능하다.",
      skills: [
        "React",
        "HTML/CSS",
        "javascript",
        "react-day-picker",
        "코로나 API",
        "open-weather-map API",
      ],
      code: "https://github.com/hyemin12/react-dashboard-app",
      site: "https://lucid-yonath-d614bb.netlify.app/",
    },
    {
      filter: "react",
      id: "movie",
      img: "movieReact",
      title: "영화 검색사이트",
      describtion:
        "imdb api를 이용해서 인기 영화, 상영예정 영화, 평점이 높은 영화목록을 가져오고 영화 상세정보를 볼 수 있는 프로젝트이다.",
      skills: ["React", "HTML/CSS", "javascript", "imdb API"],
      code: "https://github.com/hyemin12/react-movie-app",
      site: "https://react-movie-app-1f5ff8.netlify.app/",
    },
    {
      filter: "vanillaJS",
      id: "moment",
      img: "momentJS",
      title: "nomard-moment app",
      describtion:
        "노마드코더의 바닐라JS 크롬 앱을 클론 코딩하였다. 이름을 입력하면 사용이 가능하다. 날씨 정보, 랜덤으로 나오는 명언, 투두 작성이 가능하다.",
      skills: ["vanilla JS", "HTML/CSS", "open-weather-map API"],
      code: "https://github.com/hyemin12/vanillaJS-chrome-app",
      site: "https://hyemin12.github.io/vanillaJS-chrome-app/",
    },

    {
      filter: "vanillaJS",
      id: "wordle",
      img: "wordleJS",
      title: "바닐라JS Wordle app",
      subtitle: "오마이걸 미니7집 NONSTOP 발매 기념 프로모션 사이트",
      describtion:
        "요즘 인기가 많은 wordle 게임을 자바스크립트로만으로 구현한 프로젝트. 하단에 있는 키보드를 누르고 ENTER 버튼을 누르면 해당 단어에 대한 정답이 나타난다.",
      skills: ["vanilla JS", "HTML/CSS"],
      code: "https://github.com/hyemin12/vanillaJS-wordle-app",
      site: "https://hyemin12.github.io/vanillaJS-wordle-app/",
    },
    {
      filter: "vanillaJS",
      id: "paint",
      img: "paintJS",
      title: "그림판 app",
      describtion:
        "노마드코더의 바닐라JS 그림판을 클론 코딩하였다. 캔버스에서 그림을 그릴 수 있으며, 이미지를 저장할 수 있다.",
      skills: ["vanilla JS", "HTML/CSS"],
      code: "https://github.com/hyemin12/vanillaJS-paint-app",
      site: "https://hyemin12.github.io/vanillaJS-paint-app/",
    },
    {
      filter: "vanillaJS",
      id: "starbucks",
      img: "starbucks",
      title: "starbucks 2017",
      describtion:
        "스타벅스 홈페이지를 클론 코딩하였다. 메인페이지와 로그인페이지로 이루어져 있다",
      skills: ["vanilla JS", "HTML/CSS"],
      code: "https://github.com/hyemin12/vanilla-starbucks-app",
      site: "https://starbucks-responsive-app-ee135b.netlify.app",
    },
    {
      filter: "react",
      id: "gomintalk",
      img: "gominTalk",
      title: "clone-bubble-app ",
      describtion:
        "요즘 뜨고 있는 Lysn bubble을 클론코딩하였다. 모바일 버전만 제공하기때문에, 550px 이상에서는 화면을 줄여달라는 화면만 표시된다. scss 패키지를 이용해서 css를 작성하였다. 프로필창에서 친구를 클릭하면 프로필 이미지 화면이 나타나고, 채팅을 보낼 수 있다.  ",
      skills: ["react", "HTML", "javascript", "SCSS"],
      code: "https://github.com/hyemin12/gomin-talk-app",
      site: "https://wizardly-hermann-7fecb3.netlify.app/",
    },
    {
      filter: "ect",
      id: "overwatch",
      img: "overwatch",
      title: "Overwatch",
      describtion: "display:flex로 반응형 페이지를 구현한 프로젝트",
      skills: ["HTML/CSS"],
      code: "https://github.com/hyemin12/display-flex-overwatch",
      site: "https://hyemin12.github.io/display-flex-overwatch/",
    },
    {
      filter: "jquery",
      id: "stranger",
      img: "stranger",
      img2: "stranger2",
      title: "Fullpage 비밀의숲2",
      describtion:
        "비밀의 숲2 방영 기념 프로모션 페이지를 제작하였다. jQery 풀페이지 플러그인을 사용하여 제작하였고, 비밀의 숲만의 미스테리한, 어두운 분위기를 디자인에 녹이려고 하였다.  ",
      skills: ["HTML/CSS", "jQuery", "design"],
      code: "https://github.com/hyemin12/web-design-portfolio/01Stranger2/",
      site: "https://hyemin12.github.io/web-design-portfolio/01Stranger2/",
    },
    {
      filter: "ect",
      id: "melon",
      img: "melon",
      title: "음악스트리밍 멜론",
      describtion: "",
      skills: ["HTML/CSS", "jQuery", "design"],
      code: "https://github.com/hyemin12/web-design-portfolio/04Melon/",
      site: "https://hyemin12.github.io/web-design-portfolio/04Melon/",
    },
    {
      filter: "jquery",
      id: "nonstop",
      img: "nonstop",
      img2: "nonstop2",
      title: "미니7집 NONSTOP 발매 기념 프로모션 사이트",
      describtion:
        "오마이걸 미니7집 NONSTOP 발매 기념 프로모션 사이트이다. jQery 풀페이지 플러그인을 사용하여 제작하였고, 오마이걸의 앨범 컨셉을 웹사이트에 녹여내려고 하였다. 카드이미지를 클릭하면 해당 페이지로 이동하고, 마지막 이벤트 페이지에서 카드를 클릭하면 모달창이 오픈된다.",
      skills: ["HTML/CSS", "jQuery", "design"],
      code: "https://github.com/hyemin12/web-design-portfolio/03OHMYGIRL/",
      site: "https://hyemin12.github.io/web-design-portfolio/03OHMYGIRL/index2.html#a5st",
    },
    {
      filter: "jquery",
      id: "2021portfolio",
      img: "2021portfolio",
      img2: "2021portfolio2",
      title: "jQeury Fullpage 2021 포트폴리오",
      subtitle: "jQuery Fullpage Website",
      describtion:
        "개인작업물 포트폴리오를 풀페이지 플러그인을 사용하여 제작하였다. 작업물이 최대한 강조될 수 있도록 심플하게 디자인하였고, 작업물에 마우스 오버 시 해당 사이트로 이동할 수 있도록 하였다.",
      skills: ["HTML/CSS", "jQuery", "design"],
      code: "https://github.com/hyemin12/web-design-portfolio/05portfolio_fullpage/",
      site: "https://hyemin12.github.io/web-design-portfolio/05portfolio_fullpage/#a1st",
    },
    {
      filter: "ect",
      id: "lottecard",
      img: "lottecard",
      img2: "lottecard2",
      title: "롯데카드 프로모션 페이지",
      describtion:
        "가정의 달을 맞아 롯데카드 기프트카드 판매 촉진 및 이벤트 홍보의 프로모션 페이지를 디자인하였다. 아기자기한 일러스트 이미지를 사용하여 사랑스러운 분위기를 표현하였으며, 롯데카드에서 자주 사용하는 핑크-블루 톤과 캐릭터를 사용하여 롯데카드 배너 느낌을 연출하였다.",
      skills: ["photoshop"],
      code: "https://github.com/hyemin12/web-design-portfolio/05portfolio_fullpage/",
      site: "https://hyemin12.github.io/web-design-portfolio/05portfolio_fullpage/#a1st",
    },
    {
      filter: "ect",
      id: "travel",
      img: "travel",
      title: "여행사 프로모션 페이지",
      describtion:
        "여행 SNS 공유 이벤트 참여 촉진 및 홍보의 프로모션 페이지를 디자인하였다. 전체적인 컨셉을 부다페스트로 설정하여 부다페스트 관련 이미지들을 사용하였고,그랜드 부다페스트호텔 포스터에 사용된 핑크-보라계열 색을 사용하여 부다페스트 느낌을 연출하였다.",
      skills: ["photoshop"],
      code: "https://github.com/hyemin12/web-design-portfolio/05portfolio_fullpage/",
      site: "https://hyemin12.github.io/web-design-portfolio/05portfolio_fullpage/#a1st",
    },
    {
      filter: "ect",
      id: "happyhospital",
      img: "happy",
      title: "행복한의원 리디자인",
      describtion: "",
      skills: ["design"],
      tab: "happy1.jpg",
      tab2: "happy2.png",
    },
    {
      filter: "ect",
      id: "goodneighbors",
      img: "goodneighbors",
      title: "굿네이버스 리디자인",
      describtion: "",
      skills: ["design"],
      tab: "goodneighbors1.jpg",
      tab2: "goodneighbors2.png",
    },
    {
      filter: "ect",
      id: "bluewings",
      img: "bluewings",
      title: "삼성블루윙즈",
      describtion:
        "수원삼성 블루윙즈의 홈페이지를 리뉴얼하였다. PHP 파일을 수정하여 만든 그누보드 기반의 사이트이며, 현재는 운영이 종료되어 메인페이지만 확인이 가능하다. ",
      skills: ["html/css", "gnu=board"],
      code: "https://github.com/hyemin12/web-design-portfolio/02bluewings/",
      site: "https://hyemin12.github.io/web-design-portfolio/02bluewings/",
    },
    {
      filter: "vanillaJS",
      id: "vanillaJS",
      img: "challengeJS",
      title: "노마드 코더 challenge",
      describtion:
        "노마드코더의 2주동안 진행되는 바닐라JS 챌린지의 진행내용을 확인할 수 있는 프로젝트. 코드미션은 html, css, javascript 코드 확인이 가능하다.",
      skills: ["vanilla JS", "HTML/CSS"],
      code: "https://github.com/hyemin12/vanillaJS-challenge/",
      site: "https://hyemin12.github.io/vanillaJS-challenge/",
    },
  ],
  date: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
    week: ["일", "월", "화", "수", "목", "금", "토"],
  },
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  dates: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  timeHours: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ],
  timeMinutes: ["00", "15", "30", "45"],
  years: [
    2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
    2030, 2031,
  ],
  weather: [
    {
      id: 0,
      bgImg:
        "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      icon: <WiDaySunny />,
    },
    {
      id: 2,
      bgImg:
        "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      icon: <WiStormShowers />,
    },
    {
      id: 3,
      bgImg:
        "https://images.unsplash.com/photo-1600697230088-4992c83b2804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: <WiHail />,
    },
    {
      id: 5,
      bgImg:
        "https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: <WiShowers />,
    },
    {
      id: 6,
      bgImg:
        "https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: <WiSnow />,
    },
    {
      id: 7,
      bgImg:
        "https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      icon: <WiFog />,
    },
    {
      id: 8,
      bgImg:
        "https://images.unsplash.com/photo-1622034329097-e9cf36069a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: <WiCloudy />,
    },
  ],
  education: [
    {
      date: "2021.09",
      text: "패스트캠퍼스",
      text2: " 한 번에 끝내는 프론트엔드 개발 초격차 패키지 과정 ",
    },
    {
      date: "2020.09",
      text: "하이미디어 컴퓨터학원",
      text2: "스마트기기 Ux/UI 웹디자인&웹퍼블리셔 과정 ",
    },
    { date: "2017.02", text: "인천가톨릭대학교 졸업", text2: "환경디자인학과" },
    { date: "2013.02", text: "동우여자고등학교 졸업" },
  ],
  certificate: [
    { date: "2021.12", text: "정보처리기능사" },
    { date: "2021.12", text: "컴퓨터그래픽스운용기능사" },
    { date: "2020.09", text: "웹디자인기능사" },
  ],
  skill: [
    {
      icon: "https://blog.kakaocdn.net/dn/c5yaqz/btqXXVBqHvp/SEBAeKYrkouV6xZGcWDa9k/img.webp",
      text: "React",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      text: "Javascript",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
      text: "Html",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      text: "css",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
      text: "sass",
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
      text: "Photoshop",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
      text: "Illustrator",
    },
    {
      icon: "https://e7.pngegg.com/pngimages/908/365/png-clipart-autocad-autodesk-computer-aided-design-computer-software-3d-computer-graphics-autocad-mirror-text-angle-3d-computer-graphics-thumbnail.png",
      text: "Auto Cad",
    },
    {
      icon: "data:image/png;base64,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",
      text: "3D Max",
    },
  ],
  hobby: [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2972/2972365.png",
      text: "음악듣기",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/258/258028.png",
      text: "향초 만들기",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1493/1493840.png",
      text: "자전거타기",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/701/701334.png",
      text: "여행가기",
    },
  ],
  mbti: [
    [
      { name: "내향형", value: 67 },
      { name: "외향형", value: 33 },
    ],
    [
      { name: "현실주의형", value: 73 },
      { name: "직관형", value: 27 },
    ],
    [
      { name: "원칙주의형", value: 64 },
      { name: "이성적사고형", value: 36 },
    ],
    [
      { name: "계획형", value: 75 },
      { name: "탐색형", value: 25 },
    ],
    [
      { name: "신중형", value: 61 },
      { name: "자기주장형", value: 39 },
    ],
  ],
};
