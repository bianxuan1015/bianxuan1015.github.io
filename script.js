// 滚动导航栏轻微变色效果
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
   if(window.scrollY > 80) {
       nav.style.background = "rgba(8,8,10,0.96)";
   } else {
       nav.style.background = "rgba(12,12,14,0.92)";
   }
})
