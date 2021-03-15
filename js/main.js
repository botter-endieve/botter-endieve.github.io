'use strict';

{ // region1

// male section
function hello() {
  const hello = document.querySelector('.hello').style.display = "block";
  const hello_tip = document.querySelector('.hello_tip').style.display = "block";
}

function no_hello() {
  const hello_tip = document.querySelector('.hello_tip').style.display = "none";
  const hello = document.querySelector('.hello').style.display = "none";
}

const male = document.querySelector('.icon_color');
  if (male) {
    male.addEventListener('mouseover', () => {
      document.querySelector('.hello_tip').style.male = "none";
      setTimeout(hello, 300);
    });
  }
  if (male) {
    male.addEventListener('mouseout', () => {
      setTimeout(no_hello, 600);
    });
  }
// male section End

// Cat Section
const fish = document.getElementById('fish_icon');
const cat = document.querySelector('.cat');

// function fish_move() {
  // //fish.classList.toggle("visible");
  // // fish.style.display='inline';
  // fish.style.animationDuration='3s';
  // fish.style.animationDelay='1s';
  // fish.style.transform='translateX(30px) translateY(10px)';
  // fish.style.animationFillMode='forwords';
  // fish.style.transitionTimingFunction='ease-in-out';
// }

// function fish_small() {
//   fish.style.transform='translateX(20px) translateZ(-200px) scale(0)';
// }

// function fish_vanish() {
  // fish.style.display='inline';
  // fish.style.opacity='0';
// }

// cat.addEventListener('mouseover', () => {
    // setTimeout(fish_move, 350);
    // setTimeout(fish_small, 1100);
    // setTimeout(fish_vanish, 1150);
// });

// cat.addEventListener('mouseout', () => {
  // fish.style.opacity='1';
  // fish.style.display='inline';
  // setTimeout(fish_vanish, 1150);
// });

// Cat Section End

// House section
const home = document.querySelector('.home > i');
const dog = document.querySelector('.dog');

if(dog) {
  setTimeout(() => {
    home.style.setProperty('--animate-duration', '0.5s');
    home.classList.add('animate__animated');
    home.classList.add('animate__wobble');
  }, 6900);
}

const wan = document.getElementById('wan');
const clk_home = document.getElementById("clk_home");

if (wan.style.display==='none') {
  wan.style.display='block';
} else {
  wan.style.display='none';
}


// console.log(clk_home);
// console.log(typeof clk_home);
// console.log(wan.style.display);

// function clickWan() {
//   if(wan.style.display=='none') {
//     wan.style.display='block';
//   } else {
//     wan.style.display='none';
//   }

//   clickWan();

// clk_home.addEventListener('click', () => {
//   console.log("clk_home clicked.");
//   clickWan();
// });

// House section end 
}
