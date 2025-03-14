const headerBlur = document.querySelectorAll('.header-blur');
const container = document.querySelector('.component-1-NxJ9MS');

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

let directions = [...headerBlur].map(() => ({
  dx: Math.random() * 30 + 1, // Արագություն X
  dy: Math.random() * 30 + 1  // Արագություն Y
}));



setTimeout(startAnimationHeaderItems, 300)



function startAnimationHeaderItems(){
  const headerMinInfoBlock = document.querySelectorAll('.header-min-info-block');
  let item = 0;

  const int = setInterval(() => {
    headerMinInfoBlock[item].style.transition = '1s';

    headerMinInfoBlock[item].classList.add('active');
    item++;

    if(item === headerMinInfoBlock.length){
      clearInterval(int);
    }
  }, 200)
}



function moveBlocks() {
  headerBlur.forEach((block, index) => {
    let rect = block.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    let x = block.offsetLeft;
    let y = block.offsetTop;

    x += directions[index].dx;
    y += directions[index].dy;

    if (x + rect.width >= containerWidth || x <= 0) {
      directions[index].dx *= -1;
    }
    if (y + rect.height >= containerHeight || y <= 0) {
      directions[index].dy *= -1;
    }

    block.style.left = x + "px";
    block.style.top = y + "px";
  });

  requestAnimationFrame(moveBlocks);
}

moveBlocks();

const stepsTitle = document.querySelector('.step-title');
let success = true;

const stepItem = document.querySelectorAll('.steps-item');
const stepItemMobile = document.querySelectorAll('.mobile-steps-item');

const stepsLine = document.querySelectorAll('.steps-line');
const stepsLineMobile = document.querySelectorAll('.mobile-step-line');

const stepsTexts = document.querySelectorAll('.steps-texts');
const stepsTextsMobile = document.querySelectorAll('.steps-texts-mobile');


window.addEventListener('scroll', stepsStart);

stepsStart()

function stepsStart(){
  const getElmTop = stepsTitle.getBoundingClientRect().top + window.scrollY;

  if(window.scrollY > (getElmTop - (window.innerHeight / 2)) && success){
    startAnimationSteps();
    PrintActive(0)
    success = false;
  }
}


function startAnimationSteps(){
  let currentStep = 1;
  const int = setInterval(() => {
    PrintActive(currentStep);
    currentStep++

    if(currentStep === stepItem.length) {
      clearInterval(int);
    }
  }, 2200)
}


function PrintActive(currentStep){
  stepItem[currentStep].classList.add('active');
  stepItemMobile[currentStep].classList.add('active');

  stepsLine[currentStep]?.classList.add('active');
  stepsLineMobile[currentStep]?.classList.add('active');

  stepsTexts[currentStep].classList.add('active');
  stepsTextsMobile[currentStep].classList.add('active');
}

const partnersLogo = document.querySelectorAll('.partners-logo');


partnersLogo.forEach((element) => {
  const logos = Array.from(element.children);

  Array.from({length: 80}).forEach((_, index) => {
    const clonedLogos = logos.map((logo) => logo.cloneNode(true));
    clonedLogos.forEach((clone) => element.appendChild(clone));

    if(index === 79){
      element.classList.add('active');
    }
  })
})


