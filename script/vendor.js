const { createApp, ref } = Vue;
// 確保 #app 存在
document.addEventListener("DOMContentLoaded", () => {
    const appMain = createApp({
    setup() {
        const modeIsLight = ref(true);
        const handleMode = function (event) {
        event.preventDefault();
        console.log(modeIsLight.value);
        
        modeIsLight.value = !modeIsLight.value;
        console.log(12);
        
        };

        return { modeIsLight, handleMode };
    },
    });


  const appContainer = document.querySelector("#appMain");
  if (appContainer) {
    appMain.mount("#appMain");
  } else {
    console.error("#app not found");
  }
});



// 获取所有 class 名称以 'mk' 开头的元素
var mkElements = document.querySelectorAll('[class^="mk"]');

// 获取 #article 元素
var articleElement = document.querySelector('#article');

// 遍历所有 .mk 开头的元素并移动到 #article 内部
mkElements.forEach(function(element) {
    articleElement.appendChild(element);
});


var mklevelElements = document.querySelectorAll('[class^="mk-level"]');
var asideElement = document.querySelector('#aside ');
mklevelElements.forEach(function(element, index) {
 // 创建一个 <a> 元素
 var anchor = document.createElement('a');

 // 设置 <a> 的 href 属性，假设每个索引对应的 href 是 '#h' + 索引
 anchor.href = '#h' + (index + 1);  // 设置 href 为 #h1, #h2, ...
 
  // 克隆当前元素的文本内容和 className
  var clonedElement = document.createElement('span');  // 创建一个 <span> 元素
  clonedElement.textContent = element.textContent;      // 克隆文本内容
  clonedElement.className = element.className;          // 克隆 className
  
  // 将克隆的元素包裹在 <a> 标签中
  anchor.appendChild(clonedElement);
 
  // 将包含 <a> 的克隆元素添加到 #aside 中
  asideElement.appendChild(anchor);


 element.id=`h${index + 1}` 
});

// // 動畫載入
// if (window.screen.availWidth > 991) {
//   new WOW().init({
//     mobile: false,
//   });
// }

// // 下滑按鈕動畫
// const goDown = document.querySelector(".godowwn");
// const goto = document.querySelector(".index_case").offsetTop * 0.84;
// goDown.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(1)
//   document.body.scrollTop = goto; // For Safari
//   document.documentElement.scrollTop = goto; // For Chrome, Firefox, IE and Opera
// });

// // 主選單定位效果
// const links = document.querySelectorAll(".nav_link");
// const m_links = document.querySelectorAll(".m_nav_link");
// const sections = document.querySelectorAll(".forJS");
// function changeLinkState() {
//   let index = sections.length;

//   while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

//   links.forEach((link) => link.classList.remove("active"));
//   links[index].classList.add("active");
//   m_links.forEach((link) => link.classList.remove("active"));
//   m_links[index].classList.add("active");
// }

// changeLinkState();
// window.addEventListener("scroll", changeLinkState);
