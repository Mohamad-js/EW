const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const login = document.querySelector('.login');
const toysDrop = document.querySelector('.toys-drop');
const account = document.querySelector('.o1');
const aboutUs = document.querySelector('.o2');
const toys = document.querySelector('.o3');
const branches = document.querySelector('.o4');
const employe = document.querySelector('.o5');
const branchDrop = document.querySelector('.branch-drop');
const fader = document.querySelector('.fader');
const links = document.querySelectorAll('.links');


button.addEventListener('click', function (e) {
gsap.defaults({duration:2, rotation:100})
gsap.timeline()
    .to('.ball', {y:535, x:220, ease: "bounce.out"})
    .to('.ball', {x:900, rotation:500}, 0.7)
    .to('.ball2', {y:505, ease:"bounce.out"}, "<")
    .to('.ball2', {x:500, rotation:600}, "0.9")
    .to('.btn', {x:1000, y:200,ease:"expo.out", duration:3}, "1.1")
    .to('.title', {opacity:0, rotation:0, duration:0.5}, '1.5')
    .to('.login', {opacity:0.5, rotation:0}, '2')
});

button.addEventListener('mouseover', function(){
    button.style.backgroundColor = 'rgb(0,195,255)';
    button.style.color = 'white'
});

button.addEventListener('mouseout', function(){
    button.style.backgroundColor = 'white';
    button.style.color = 'rgb(0,195,255)'
});

toys.addEventListener('mouseover', function() {
    gsap.timeline()
        .to('.toys-drop', {y:400, ease: 'expo', duration:0.76, inherit:false})
        .to('.branch-drop', {y:0, ease: 'expo', duration: 0.76, inherit:false}, '<')
        toys.style.borderBottom = '3px solid white';
        branches.style.borderBottom = 'none';
});

toysDrop.addEventListener('mouseleave', function() {
    gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    toys.style.borderBottom = 'none';
});

branches.addEventListener('mouseover', function() {
    gsap.timeline()
        .to('.branch-drop', {y:400, ease: 'expo', duration:0.76, inherit:false})
        .to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false}, '<');
        branches.style.borderBottom = '3px solid aqua';
        toys.style.borderBottom = 'none';
});

branchDrop.addEventListener('mouseleave', function() {
    gsap.to('.branch-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    branches.style.borderBottom = 'none';
});

fader.addEventListener('mouseenter', function(){
    gsap.to('.toys-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    gsap.to('.branch-drop', {y:0, ease: 'expo', duration: 0.75, inherit:false});
    toys.style.borderBottom = 'none';
    branches.style.borderBottom = 'none';
})