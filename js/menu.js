async function loadMenu(){
   await loadHeadLinks();
   let responseNav = await fetch('/utils/nav.html');
   let navText = await responseNav.text();
   await setNavEl(navText);
}
loadMenu().catch(error => new Error(error.message));

async function loadHeadLinks(){
   let links = await fetch('/utils/links.html');
   let linksText = await links.text();
   document.head.insertAdjacentHTML("afterbegin",linksText);
}

// responseText를 가지고 nav element 생성
async function setNavEl(navText){
   let nav = document.createElement('nav');
   nav.innerHTML = navText;
   document.body.prepend(nav);
   return nav
}