# onetoday

2022, 05, 19 

1. index page 

    - 상단 global-nav 배경색 gradient 로 수정

=====================================================

2022, 05, 18 

1. index page 

    - 백그라운드 이미지 5초마다 자동으로 바뀌는 스크립트 적용
    <body class="main-wrap" onload="showImg()">

    - 메인 일러스트 이미지 수정

    - one to day : text-shadow 추가

2. main-background.js 파일 추가  

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
