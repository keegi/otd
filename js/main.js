(()=>{
    // 스크롤 값
    let yOffset = 0;
    // 현재 보여지는 섹션(section-0, section-1, section-2, section-3, section-4)
    let currentSection = 0;

    const sectionSet = [
        // section-0
        {
            //type : section의 구문값 (sticky : 글자위치가 고정되어 스크롤에 반응)
            //                         normal : 일반적인 스크롤 섹션
            type : 'sticky',
            // height : 스크롤의 높이, 초기화함수에서 화면 구성에 따라 비율로 설정됨
            height : 0,
            // multiple : 스크롤 높이를 설정하기 위한 배수.
            multiple : 1,
            // section 에서 사용하는 element들을 저장.
            objs : {
                container : document.querySelector('#section-0'),
            },
            // section 에서 사용하는 값들을 저장.
            values : {}
        },
        // section-1
        {
            type : 'normal',
            height : 0,
            multiple : 1,
            objs : {
                container : document.querySelector('#section-1'),
            },
            values : {}
        },
        // section-2
        {
            type : 'sticky',
            height : 0,
            multiple : 1,
            objs : {
                container : document.querySelector('#section-2'),
            },
            values : {}
        },
        // section-3
        {
            type : 'sticky',
            height : 0,
            multiple : 1,
            objs : {
                container : document.querySelector('#section-3'),
            },
            values : {}
        },
        // section-4
        {
            type : 'sticky',
            height : 0,
            multiple : 1,
            objs : {
                container : document.querySelector('#section-4'),
            },
            values : {}
        }
    ];

    // 함수 파트 =========================================
    
    // sectionSet 배열을 초기화 해주는 함수
    const initSectionSet = function()
    {   
        for (let i = 0; i < sectionSet.length; i++)
        {   // 1. 높이를 설정한다. -> 기본 높이의 1배(multiple)
            sectionSet[i].height = (window.innerHeight * sectionSet[i].multiple);
            // 2. document-element의 속성을 바꾼다.
            sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`;
        }
    }

    // 스크롤 값에 따른 섹션 값 구하는 함수
    const getCurrentSection = function()
    {
        let result    = 0;
        let heightSc0 = sectionSet[0].height;
        let heightSc1 = sectionSet[1].height + heightSc0;
        let heightSc2 = sectionSet[2].height + heightSc1;
        let heightSc3 = sectionSet[3].height + heightSc2;

        if(yOffset <= heightSc0)
        {
            currentSection = 0;
        } 
        else if ((heightSc0 < yOffset) && (yOffset < heightSc1))
        {
            currentSection = 1;
        }
        else if ((heightSc1 < yOffset) && (yOffset < heightSc2))
        {
            currentSection = 2;
        }
        else if ((heightSc2 < yOffset) && (yOffset < heightSc3))
        {
            currentSection = 3;
        }
        else if (heightSc3 < yOffset)
        {
            currentSection = 4;
        }
        result = currentSection;
        return result;
    }

    // 최초에 HTML Page를 초기화 하는 함수.
    const initHTMLPage = function()
    {
        // sectionSet을 초기화 한다.
        initSectionSet();
        // 기타 전역번수 초기화
        yOffset = 0;
    }

    // 스크롤시 수행되는 함수
    const scrollLoop = function()
    {   // currentSection에 따른 CSS값을 설정.
        document.body.setAttribute('id', `show-section-${currentSection}`);
    }

    // 이벤트 핸들러 =======================================
    window.addEventListener('scroll', ()=>{
        yOffset        = window.scrollY;
        currentSection = getCurrentSection();
        scrollLoop();
    })

    // 함수 호출 ===========================================
    window.addEventListener("load", ()=>{
        initHTMLPage();
    })

    
})();

