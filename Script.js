gsap.registerPlugin(ScrollTrigger);

const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const toysDrop = document.querySelector('.toys-drop');
const rep = document.querySelector('.o2');
const rep2 = document.querySelector('.o2-res');
const toys = document.querySelector('.o3');
const branches = document.querySelector('.o4');
const about = document.querySelector('.o5');
const about2 = document.querySelector('.o5-res');
const branchDrop = document.querySelector('.branch-drop');
const fader = document.querySelector('.fader');
const links = document.querySelectorAll('.links');
const line = document.querySelector('.hover-line');
const line2 = document.querySelector('.line-res');
const navbar = document.querySelector('.navbar');
const navHold = document.querySelector('.nav-hold');
const pic1 = document.querySelector('.n1');
const pic2 = document.querySelector('.n2');
const pic3 = document.querySelector('.n3');
const pic4 = document.querySelector('.n4');
const back = document.querySelector('.back');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const holder = document.querySelector('.holder');
const sideMenu = document.querySelector('.menu');
const hamHold = document.querySelector ('.ham-hold');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const opt5 = document.querySelector('.opt5');
const opt6 = document.querySelector('.opt6');
const opt7 = document.querySelector('.opt7');
const opt8 = document.querySelector('.opt8');
const opt9 = document.querySelector('.opt9');
const opt10 = document.querySelector('.opt10');
const opt11 = document.querySelector('.opt11');
const opt12 = document.querySelector('.opt12');
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.submit');
const cart = document.querySelector('#cart');
const user = document.querySelector('#user');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const backPhoto1 = document.querySelector('.bilboard-img');


var lastScrollTop = 0;
window.addEventListener('scroll', () => {
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    navHold.style.top = "-100px";
    gsap.to('.toys-drop', {y:-100, ease: 'expo', duration: 0.75, inherit:false});
    gsap.to('.branch-drop', {y:-100, ease: 'expo', duration: 0.75, inherit:false});
  } else {
    navHold.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'rgb(0,195,255)';
  button.style.color = 'white';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'white';
  button.style.color = 'rgb(0,195,255)'
});

toys.addEventListener('mouseover', () => {
  gsap.timeline()
    .to('.toys-drop', {y:400, ease: 'expo', duration:1, inherit:false})
    .to('.branch-drop', {y:0, ease: 'expo', duration:1, inherit:false}, '<')
    fader.style.opacity = '1';
    fader.style.zIndex = '8';
    search.style.zIndex = '-10';
    toys.style.color = 'aqua';
    branches.style.color = 'white';
    line.style.right = '183px';
    line.style.width = '102px';
    line.style.opacity = '1';
});

toysDrop.addEventListener('mouseleave', () => {
  gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
  fader.style.opacity = '0';
  fader.style.zIndex = '-1';
  toys.style.color = 'white'
  line.style.opacity = '0'
});

toysDrop.addEventListener('mouseover', () => {
  line.style.opacity = '1'
})

branches.addEventListener('mouseover', () => {
  gsap.timeline()
    .to('.branch-drop', {y:400, ease: 'expo', duration:0.75, inherit:false})
    .to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false}, '<');
    fader.style.opacity = '1';
    fader.style.zIndex = '8'
    branches.style.color = 'aqua';
    toys.style.color = 'white';
    about.style.color = 'white';
    line.style.right = '90px'
    line.style.width = '93px'
    line.style.opacity = '1'
});

branchDrop.addEventListener('mouseleave', () => {
  gsap.to('.branch-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
  fader.style.opacity = '0';
  fader.style.zIndex = '-1';
  branches.style.color = 'white'
  line.style.opacity = '0'
});

branchDrop.addEventListener('mouseover', () => {
  line.style.opacity = '1'
})

about.addEventListener('mouseover', () => {
  gsap.to('.branch-drop', {y:0, ease: 'expo', duration:1, inherit:false})
  about.style.color = 'aqua';
  branches.style.color = 'white';
  fader.style.opacity = '0';
  line.style.width = '90px';
  line.style.right = '0';
  line.style.opacity = '1';
})

about2.addEventListener('mouseover', () => {
  about2.style.color = 'aqua';
  line2.style.width = '90px';
  line2.style.right = '0';
  line2.style.opacity = '1';
})

about.addEventListener('mouseleave', () => {
  about.style.color = 'white'; 
})

about2.addEventListener('mouseleave', () => {
  about2.style.color = 'white';
  line2.style.opacity = '0'
})

navbar.addEventListener('mouseleave', () => {
  line.style.opacity = '0'
})

rep.addEventListener('mouseover', () => {
  gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
  fader.style.opacity = '0';
  fader.style.zIndex = '-1';
  toys.style.color = 'white'
  line.style.width = '159px';
  line.style.right = '285px';
  line.style.opacity = '1';
  rep.style.color = 'aqua'
})

rep2.addEventListener('mouseover', () => {
  line2.style.width = '159px';
  line2.style.right = '90px';
  line2.style.opacity = '1';
  rep2.style.color = 'aqua'
})

rep.addEventListener('mouseout', () => {
  rep.style.color = 'white'
})

rep2.addEventListener('mouseout', () => {
  rep2.style.color = 'white'
  line2.style.opacity = '0'
})

const wallpaper = gsap.timeline({repeat:-1, repeatDelay:5})
  .fromTo('.n4', {x:-1500}, {x:0, ease:'expo', zIndex:-4})
  .fromTo('.text1', {opacity:1}, {opacity:0, zIndex:1}, 5)
  .fromTo('.n3', {x:-1500}, {x:0, ease:'expo', zIndex:-3}, 5)
  .fromTo('.text2', {opacity:0}, {opacity:1, zIndex:1}, 5)
  .fromTo('.text2', {opacity:1}, {opacity:0, zIndex:1}, 10)
  .fromTo('.n2', {x:-1500}, {x:0, ease:'expo', zIndex:-2}, 10)
  .fromTo('.text3', {opacity:0}, {opacity:1, zIndex:1}, 10)
  .fromTo('.text3', {opacity:1}, {opacity:0, zIndex:1}, 15)
  .fromTo('.n1', {x:-1500}, {x:0, ease:'expo', zIndex:-1}, 15)
  .fromTo('.text4', {opacity:0}, {opacity:1, zIndex:1}, 15)

back.addEventListener('mouseover', () => {
  wallpaper.pause();
})

back.addEventListener('mouseout', () => {
  wallpaper.resume();
})

let menuStatus = 1;
function side() {
  if (menuStatus == 1){
    gsap.to('.menu', {x:-200, ease:'expo', duration:1, inherit: false});
    fader.style.opacity = '1';
    fader.style.zIndex = '8';
    menuStatus = 0;
    
  } else if (menuStatus == 0){
    gsap.to('.menu', {x:0, ease:'expo', duration:1, inherit: false});
    fader.style.opacity = '0';
    fader.style.zIndex = '-1';
    menuStatus = 1;
    };
}

search.addEventListener('focus', () => {
  search.style.outline = 'none';
})

fader.addEventListener('click', () => {
  gsap.to('.menu', {x:0, ease:'expo', duration:1, inherit: false});
    fader.style.opacity = '0';
    fader.style.zIndex = '-1';
    menuStatus = 1;
})

searchBtn.addEventListener('click', () => {
  const input = document.querySelector('.search').value;
  if (input == "پلی استیشن") {
    alert("you cannot type a password");
  }
})

cart.addEventListener('mouseover', () => {
  bg1.style.opacity = '1';
})

cart.addEventListener('mouseleave', () => {
  bg1.style.opacity = '0'
})

user.addEventListener('mouseover', () => {
  bg2.style.opacity = '1';
})

user.addEventListener('mouseleave', () => {
  bg2.style.opacity = '0'
})

  ScrollTrigger.create({
    trigger: backPhoto1,
    start: "top top",
    end: "138% top",
    markers: true,
    pin: true,
    toggleClass: {targets: ".bilboard-img", className: "img-see"}
  });