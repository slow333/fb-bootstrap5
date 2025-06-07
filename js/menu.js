async function loadMenu(){
   await loadHeadCss();
   let navHtml = await fetch('/utils/nav.html');
   let navText = await navHtml.text();
   await setNavEl(navText);
   await loadBootstrapJs();
}
loadMenu().catch(error => new Error(error.message));

async function loadHeadCss(){
   let links = await fetch('/utils/links.html');
   let linksText = await links.text();
   document.head.insertAdjacentHTML("afterbegin",linksText);
}

// responseText를 가지고 nav element 생성
async function setNavEl(navText){
   let nav = document.createElement('nav');
   // nav.classList.add('fixed-top');
   nav.innerHTML = navText;
   document.body.prepend(nav);
   // return nav
}
// load bootstrap js on startup
async function loadBootstrapJs() {
   const script = document.createElement('script');
   script.src = '/js/bootstrap.bundle.min-5-3.js';
   document.body.appendChild(script);
}