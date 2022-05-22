const loginUser   = document.querySelector("#login-user");
const loginForm   = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
const idValue     = document.querySelector("#id-value");
const idLogout    = document.querySelector("#id-logout");

const bodyWrap    = document.querySelector(".main-wrap");
const gMember     = document.querySelector(".global-member");
const gMemberUser = document.querySelector(".global-member-user");

const HIDDEN_CLASSNAME   = "hidden";
const OVERFLOW_CLASSNAME = "overflow"
const USERID_KEY         = "userID";

// 로그인시 입력값을 받아와 localStorage에 저장한다.
const onLoginSubmit = function(event)
{
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // 로그인 폼에서 넘어온값을 userID 에 저장
    const userID = loginInput.value;
    loginInput.value = "";

    // localStorage 에 입력받은 값을 저장한다
    localStorage.setItem(USERID_KEY, userID);
    greetings(userID);
};

// localStorage에 userID 값을 출력한다.
function greetings(userID) {
    idValue.innerText = `반가워요 ${userID} 님`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    gMember.classList.add(HIDDEN_CLASSNAME);
    gMemberUser.classList.remove(HIDDEN_CLASSNAME);
    bodyWrap.classList.remove(OVERFLOW_CLASSNAME);
};

//로컬스토리지에 저장된 아이디를 가져온다 
const savedUserID = localStorage.getItem(USERID_KEY);

// localStorage에 userID 값을 삭제한다.
const idDelete = function()
{
    // localStorage 에서 userID key 값을 삭제한다.
    localStorage.removeItem(USERID_KEY);

    gMember.classList.remove(HIDDEN_CLASSNAME);
    gMemberUser.classList.add(HIDDEN_CLASSNAME);
};

// 로딩이 끝나면 확인
window.addEventListener("load", ()=>{
    // 로컬스토리지에 아이디가 없다면 return 를 실행
    if(savedUserID === null)
    {
        return;
    }
    // 로컬스토리지에 아이디가 있다면 else 를 실행
    else
    {
        greetings(savedUserID);
    }
});

// 로그인 클릭시 실행 ======================================
loginUser.addEventListener("click", ()=>{

    // 로컬스토리지에 아이디가 없다면 if 를 실행
    if(savedUserID === null)
    {
        // id 입력창 보여주기.
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        bodyWrap.classList.add(OVERFLOW_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
    // 로컬스토리지에 아이디가 있다면 else 를 실행
    else
    {
        greetings(savedUserID);
    }
});

// user-modal 외 영역 클릭시 창 닫음 ========================
window.addEventListener("click", (event)=>{
    //
    if(event.target === loginForm)
    {
        loginForm.classList.add(HIDDEN_CLASSNAME)
        bodyWrap.classList.remove(OVERFLOW_CLASSNAME);
    }    
});

// logout 클릭시 localStorage에 userID 삭제
idLogout.addEventListener("click", idDelete);
