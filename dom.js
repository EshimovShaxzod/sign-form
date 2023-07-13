let containerA = document.getElementById('container-a');
let containerB = document.getElementById('container-b');
let containerUp = document.getElementById('container-up');
let containerIn = document.getElementById('container-in');
let upBtn = document.getElementById('upBtn');
let main = document.getElementById('main');
let signInBgtn = document.getElementById('signInBgtn');
let signUpBgtn = document.getElementById('signUpBgtn');

signInBgtn.addEventListener('click', () => {
   main.classList.toggle('active1');
   console.log('hello');
   containerA.style.animationName = 'example';
   containerA.style.animationDuration = '2s';
})
signUpBgtn.addEventListener('click', () => {
    main.classList.toggle('active1');
    console.log('hello');
 })

