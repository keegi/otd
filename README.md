# onetoday

2022, 05, 26 

1. index.html 파일 수정 

    - section 별 이미지 수정
    - section 별 텍스트 내용 수정

3. main.css 파일 수정

    - 메모 필드에 메모 갯수가 박스를 초과하면 자동으로 
      스크롤이 생기게 수정

=====================================================

2022, 05, 24 

1. main.css  

    - 스크롤시 해당 section이 되면 텍스트가 Fadein 되고
      opacity 가 0 ~ 1까지 fadein 시간만큼 변경된다. 

2. user.js 파일 수정

    - logout 버튼 클릭시 페이지 새로고침 하는 코드 추가
      window.location.reload();

    - section-2 메모 기능 추가
      로그인이 되면 이미지를 가리고 메모 필드를 표시한다.
      memoImg.classList.add(HIDDEN_CLASSNAME);
      memoBox.classList.remove(HIDDEN_CLASSNAME);

=====================================================

2022, 05, 23 

1. index.html  

    - section-2 생각메모 부분에 memo-box 추가.
    - 메모를 입력할수 있는 input 추가.
    - 메모 입력시 출력되는 ul 리스트 태그 추가.

2. main.css
    
    - memo-box, memo-form 등 메모 처리 부분의 스타일 시트 추가.

3. memo.js 파일 추가

    - section-2에서 input에 메모를 입력하면 화면에 리스트로 출력되고
      localStorage에 배열 안에 객체 형식으로 저장된다.

    - 삭제버튼을 클릭하면 메모가 삭제 가능하며, localStorage에서도 삭제.
    - li에 id값을 부여하여 삭제버튼 클릭시 아이디 값을 찾아 li 를 삭제.

※ 추후 로그인을 통해 localStorage에 uaerId가 없으면 이미지를 출력하고  
  uaerId가 있으면 데이터를 확인해 보여준다.  

=====================================================

2022, 05, 22 

1. mediaquery.css  

    - section 별 이미지 및 텍스트 사이즈 미디어 쿼리 추가
    - 로그인 modal 화면 사이즈 별 미디어 쿼리 추가
      @media screen and (max-width: 1279px)
      - user modal
      @media screen and (max-width: 1023px)
      - user modal

=====================================================

2022, 05, 20 

1. index.html

    - section-1 ~ 4에 텍스트 수정
    - section 별로 해당 이미지 추가
    - section-1, -3 백그라운드 이미지 추가

    - 하단에 login-form modal html 추가

2. main.css  

    - 각 section 제목 font color 및 font-family 수정
    <h3>하루 습관</h3> <h3>생각 메모</h3> <h3>하루 운동</h3> <h3>나만의 시간</h3>
    
    - font-family: 'NanumSquareRound' !important;

    - login-form modal 부분 추가
      #login-form, .user-modal, .formbox, .inp, .smt

3. reset.css 

    - 각 section 별 메인 색상 등록
      section-1 : #21a387 
      section-2 : #906aa5
      section-3 : #11609c
      section-4 : #eab728

4. user.js 파일 추가 
   (userID 입력시 localStorage 등록하는 form 추가)

    - 상단의 login 클릭시 modal 창 띄운다. ( login   sign up )

    - modal 사이즈는 전체 화면으로 하고 modal 창이 뜨면 
      body에 scroll이 작동하지 않으며, 
      modal을 닫을때는 입력창 이외의 부분을 클릭시 modal 창이 닫히고 scroll이 다시 활성화된다.

    - 텍스트 입력후 버튼을 누르면 modal 창이 닫히고 다시 scroll이 활성화
      되고 상단의 login 텍스트 부분이 바뀐다.
      예) ( 반가워요 Scarlett 님   logout ) 

    - 브라우저를 닫았다 다시 접속 하거나 새로 고침을 하더라도
      localstorage에 userID 값이 있는지 user.js 에서 다시 확인하여 적용한다.
      예) ( 반가워요 Scarlett 님   logout )  

    - 상단의 logout를 클릭하면 localStorage의 key 값을 삭제하고
      ( login   sign up ) 상태로 돌아간다.
 
※ sign up 은 작업 미정.

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
