/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// document.querySelectorAll('a[href^=#]').forEach(anchor => {
//     anchor.addEventListener("click", function(e){
//       e.preventDefault();
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//           behavior : "smooth"
//       });
//     });
//   });

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
  modalBtns = document.querySelectorAll('.services_button'),
  modalClose = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach((window) => {
  window.addEventListener('click', () => {
    modalViews.forEach((window) => {
      window.classList.remove('active-modal');
    })
  })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
    target: '.work_card_design'
  },
  animation: {
    duration: 300
  }
})

/* Link active work */
const linkWork = document.querySelectorAll('.work_items')

function activeWork() {
  linkWork.forEach(L => L.classList.remove('.active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(L => L.classList.add('click', 'active-work'))
/*=============== HOME SOCIAL LINKS ===============*/
function openWindowLinkedIn() {
  window.open("https://www.linkedin.com/in/andrea-everett-4a57a8222/");
}

function openWindowGithub() {
  window.open("https://github.com/andrea-everett");
}

function openWindowTwitter() {
  window.open("");
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function openWindow() {
  window.open("https://github.com/andrea-everett/pinterest-final.git");
}

function openWindow1() {
  window.open("https://github.com/andrea-everett/garden-store.git");
}

function openWindow2() {
  window.open("https://github.com/andrea-everett/front-end");
}

function openWindow3() {
  window.open("https://github.com/andrea-everett/faq-ai-chat.git");
}


// ================CODE LINKS ==========================
function openWindow4() {
  window.open("https://pinterest-final-production.up.railway.app");
}

function openWindow5() {
  window.open("https://garden-store-production.up.railway.app");
}

function openWindow6() {
  window.open("https://detection-front.herokuapp.com");
}

function openWindow7() {
  window.open("https://faq-ai-chat-production.up.railway.app");

}

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== FOOTER SOCIAL LINK===============*/
function openWindowFooterLinked() {
  window.open("https://www.linkedin.com/in/andrea-everett-4a57a8222/");
}

function openWindowFooterTwitter() {
  window.open("");
}

function openWindowFooterGit() {
  window.open("https://github.com/andrea-everett");
}