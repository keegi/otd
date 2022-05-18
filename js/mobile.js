// 모바일 메뉴 ===============================================
const itemBtn = document.querySelector(".mBtn");
const itemMobileMn = document.querySelector(".mobile-item");

const dropDown = function()
{
    if(itemMobileMn.classList.contains("hidden"))
    {
        itemMobileMn.classList.remove("hidden");
    }
    else
    {
        itemMobileMn.classList.add("hidden");
    }
}

itemBtn.addEventListener("click", dropDown);
itemMobileMn.addEventListener("click", dropDown);

// 모바일 메뉴 ===============================================







