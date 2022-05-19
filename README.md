# onetoday

2022, 05, 20 

1. index.html

    - section-1 ~ 4에 텍스트 수정
    - 섹션별 이미지 추가
    - section-1, -3 백그라운드 이미지 추가

3. CSS -> 각섹션별 폰트 수정 작업 

    - 각섹션 제목 font color 수정
    <h3>하루 습관</h3> <h3>생각 메모</h3> <h3>하루 운동</h3> <h3>나만의 시간</h3>
    - font-family: 'NanumSquareRound' !important;
 
=====================================================

2022, 05, 19 

1. index.html

    - 상단 global-nav 배경색 - gradient로 수정
    - 1024px 이하에서 사용되는 모바일 상단 메뉴 버튼 및 하위 메뉴 추가

    - section-1 ~ 4에 flex로 나누어 텍스트 공간과 이미지 공간으로 분리
    <div class="inner">
        <div class="cont_left sticky-elem">
            텍스트 공간
        </div>
        <div class="cont_right">
            이미지 공간
        </div>
    </div> 

2. mobile.js 파일 추가
  
    - 브라우저 사이즈가 1024px 이하로 줄어들 경우 기존 메뉴를 감추고
      모바일 메뉴로 대체 됨.
    - 모바일 메뉴 클릭시 하위 메뉴 보여짐

3. CSS -> index page 폰트 수정 작업 (강조 폰트 : 나눔스퀘어라운드 폰트로 수정)

    - 메인 페이지 문구 폰트 수정
      <div class="titleTxt">건강한 삶을 만들기 위한<br/>나만의 프로젝트</div>
    - font-family: 'NanumSquareRound' !important;

    - @import url('https://webfontworld.github.io/naver/NanumSquareRound.css');

4. index page 포토샵 시안 작업 ( 파일 : onetoday-시안.jpg )

    - section-1 ~ 4에 대한 페이지 내용 작업  

=====================================================

2022, 05, 18 

1. index.html 

    - 백그라운드 이미지 5초마다 자동으로 바뀌는 스크립트 적용
    <body class="main-wrap" onload="showImg()">

    - 메인 일러스트 이미지 수정

    - one to day : text-shadow 추가

2. main-background.js 파일 추가

    - 백그라운드 이미지 5초마다 자동으로 바뀌는 스크립트

3. css 텍스트 및 이미지 미디어쿼리로 처리

    - mediaquery.css 파일 추가

    @media screen and (max-width: 1023px)
        .main-title {
            font-size: 3rem;
            margin: 4vw 0 3vw;
        }

4. 브라우저 크기에 따라 작동하도록 
   css 전체 padding 및 margin 값을 viewport로 처리

    - padding-left : 3rem;  => padding-left : 3vw; 로 수정

=====================================================

2022, 05, 17 

1. 메인페이지 

    - 텍스트 올라가며 나타나는 효과 추가
    - 우측부터 나오는 이미지 효과 추가
    - 구글스토어 / 앱스토어 다운로드 버튼 추가
    - 백그라운드 이미지 수정

2. text-animation.js 파일 추가  

=====================================================

2022, 05, 16 

1. 메뉴 클릭시 부드럽게 각 섹션으로 이동
    - html file 수정
    <div class="item lc-item">
        <a href="#section-1" class="local-nav-item">하루 습관</a>
        <a href="#section-2" class="local-nav-item">하루 운동</a>
        <a href="#section-3" class="local-nav-item">생각 메모</a>
        <a href="#section-4" class="local-nav-item">나만의 시간</a>
    </div>

    - css file 수정
    html {
        scroll-behavior: smooth; /* 스크롤 부드럽게 이동 */
    }
2. 각 섹션별 텍스트 수정 (html, css) 

=====================================================

2022, 05, 13 

1. html 
    - section-0, section-1, section-2, section-3, section-4  추가
    - footer 영역 추가
    - footer ( 주소, copyright, 서비스이용약관, 개인정보 취급방침)

2. css 
 - footer 영역 추가

3. javascript
    - sectionSet 배열에 section-3, section-4  추가.
    - getCurrentSection 에 sectionSet 에 추가된 section-3, 4 부분 추가
    - 이벤트 핸들러 수정 
