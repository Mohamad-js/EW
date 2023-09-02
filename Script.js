gsap.registerPlugin(ScrollTrigger)

const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const login = document.querySelector('.login');
const toysDrop = document.querySelector('.toys-drop');
const account = document.querySelector('.o1');
const rep = document.querySelector('.o2');
const toys = document.querySelector('.o3');
const branches = document.querySelector('.o4');
const about = document.querySelector('.o5');
const branchDrop = document.querySelector('.branch-drop');
const fader = document.querySelector('.fader');
const links = document.querySelectorAll('.links');
const line = document.querySelector('.hover-line');
const navbar = document.querySelector('.navbar');
const navHold = document.querySelector('.nav-hold');
const pic1 = document.querySelector('.n1');
const pic2 = document.querySelector('.n2');
const pic3 = document.querySelector('.n3');
const pic4 = document.querySelector('.n4');
const back = document.querySelector('.back');

var lastScrollTop = 0;
window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        navHold.style.top = "-100px";
        gsap.to('.toys-drop', {y:-100, ease: 'expo', duration: 0.75, inherit:false});
        gsap.to('.branch-drop', {y:-100, ease: 'expo', duration: 0.75, inherit:false});
    } else {
        navHold.style.top = '0';
    }
    lastScrollTop = scrollTop
})

button.addEventListener('click', (e) => {
gsap.defaults({duration:2, rotation:100})
gsap.timeline()
    .to('.title', {opacity:0, rotation:0, duration:0.5}, '1.5')
    .to('.login', {opacity:0.5, rotation:0}, '2')
});

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgb(0,195,255)';
    button.style.color = 'white'
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
        toys.style.color = 'aqua'
        branches.style.color = 'white'
        line.style.right = '183px'
        line.style.width = '102px'
        line.style.opacity = '1'
});

toysDrop.addEventListener('mouseleave', () => {
    gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    fader.style.opacity = '0';
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
        branches.style.color = 'aqua';
        toys.style.color = 'white';
        about.style.color = 'white';
        line.style.right = '90px'
        line.style.width = '93px'
        line.style.opacity = '1'
        fader.style.zIndex = '1'
});

branchDrop.addEventListener('mouseleave', () => {
    gsap.to('.branch-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    fader.style.opacity = '0';
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

about.addEventListener('mouseleave', () => {
    about.style.color = 'white'; 
})

navbar.addEventListener('mouseleave', () => {
    line.style.opacity = '0'
})

rep.addEventListener('mouseover', () => {
    gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    fader.style.opacity = '0';
    toys.style.color = 'white'
    line.style.width = '159px';
    line.style.right = '285px';
    line.style.opacity = '1';
    rep.style.color = 'aqua'
})

rep.addEventListener('mouseout', () => {
    rep.style.color = 'white'
})

account.addEventListener('mouseover', () => {
    account.style.color = 'aqua'
    line.style.right = '444px';
    line.style.opacity = '1';
    line.style.width = '128px';
})

account.addEventListener('mouseout', () => {
    account.style.color = 'white';
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