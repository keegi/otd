const memoForm  = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");
const memoList  = document.querySelector("#memo-list");

const MEMOS_KEY = "memos";
let memos = [];

// 메모를 로컬스토리지에 저장한다.
const saveMemo = function()
{   // Object 또는 Array 등을 JSON.stringify(memos) 넣으면 string 으로 만들어준다.
    localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
}

// 메모를 삭제하는 함수
function deleteMemo(event)
{
    // button의 부모 li 를 찾는다.
    const memoli = event.target.parentElement;
    // filter로 아이디 값을 비교 하여 삭제한다
    memos = memos.filter((memo) => memo.id !== parseInt(memoli.id));
    // 클릭된 버튼의 li를 삭제한다.
    memoli.remove();
    
    saveMemo();
}

// 메모를 화면에 출력하는 함수
const paintMemo = function(newMemo)
{
    const memoli   = document.createElement("li");
    // li의 id를 만들어 삭제시 찾을수 있게한다.
    memoli.id = newMemo.id;
    const memoSpan = document.createElement("span");
    // input 의 값을 memoSpan 에 넣어준다.
    memoSpan.innerText = newMemo.text;

    // 삭제 버튼을 생성한다.
    const buttonMemoDel = document.createElement("button");
    buttonMemoDel.innerText = "삭제";
    // 삭제 버튼 클릭 이벤트핸들러 
    buttonMemoDel.addEventListener("click", deleteMemo);

    // span과 button이 li 안에 출력하게 해준다.
    memoli.appendChild(memoSpan);
    memoli.appendChild(buttonMemoDel);
    // li가 ul 안에 출력하게 해준다.
    memoList.appendChild(memoli);
}

const handleMemoSubmit = function(event)
{
    // 초기화 방지 코드(input 내용없이 엔터누를때 새로고침 안되게.)
    event.preventDefault();
    // 입력내용을 newMemo 에 저장한다.
    const newMemo = memoInput.value;
    // 내용 입력후 엔터 후에 input 이 비어있게 만든다.
    memoInput.value = "";
    // 입력된 값을 text와 id를 만들어 객체로 저장한다
    const newMemoObj = {
        text : newMemo,
        id : Date.now(),
    }
    // newMemoObj 객체를 memos의 배열에 저장한다.
    memos.push(newMemoObj);
    // 매개변수를 가지고 paintMemo를 호출
    paintMemo(newMemoObj);
    // 로컬스토리지에 저장하는 함수 호출
    saveMemo();
}

memoForm.addEventListener("submit", handleMemoSubmit);

const savedMemo = localStorage.getItem(MEMOS_KEY);

// 로컬스토리지에 데이터가 있는지 확인
if (savedMemo !== null) {
    // string을 JSON.parse(savedMemo) 사용하여 Object 또는 Array로 바꿔준다.
    const parsedMemos = JSON.parse(savedMemo);
    // 이전에 자료가 있는곳에 추가로 등록해준다.
    memos = parsedMemos;
    // paintMemo에 있는 데이터만큼 실행한다. 
    parsedMemos.forEach(paintMemo);
}