let pets = [
  {
    "name": "Katrine",
    "img": "../../assets/img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/img/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/img/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/img/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
];

let burger = document.querySelector('.burger-menu');
let burgerMiddle = document.querySelector('.burger-middle');
let jsMenuArea = document.querySelector('.jsMenuArea');
let jsMenuAreaLinks = document.querySelectorAll('.main__header-nav a');
let mobileMenu = document.querySelector('.mobile-menu');


let buttons = document.querySelectorAll('.button-arrow');
let petsCards = document.querySelectorAll('.pets__card');
let amountPages;


let modalWindow = document.querySelector('.modal-window');
let modalImg = document.querySelector('.modal-image');
let modalName = document.querySelector('.modal-name');
let modalTypeAndBreed = document.querySelector('.modal-type-and-breed');
let modalDescription = document.querySelector('.modal-description');
let lis = document.querySelectorAll('li');

let modalClose = document.querySelector('.modal-close');
let modalCard = document.querySelector('.modal-card');
let body = document.querySelector('body');


burger.addEventListener('click', () => {
  body.classList.toggle('overflowHidden');
  mobileMenu.classList.toggle('burger-menu-translate');
  burger.classList.toggle('burger-menu-rotate');
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('burger-menu-translate');
  burger.classList.remove('burger-menu-rotate');
  body.classList.remove('overflowHidden');
});

jsMenuArea.addEventListener('click', (event) => {
  event.stopPropagation();
});


for (let i of jsMenuAreaLinks) {
  i.addEventListener('click', () => {
    body.classList.remove('overflowHidden');
    mobileMenu.classList.remove('burger-menu-translate');
    burger.classList.remove('burger-menu-rotate');
  });
};




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



function getRandomArr (arr) {
  let result = [];
  let temp = getRandomInt(0, 7);
  for (let i of arr) {
    if (result.length == arr.length - 1 && !result.includes(i)) {
      break;
    }
    while (temp == i || result.includes(temp)) {
      temp = getRandomInt(0, 7);
    }
    result.push(temp);
  }
  if (result.length != arr.length) {
    result = getRandomArr(arr);
  }
  return result;
}



function getTempArr () {
  let arrayLength;
  if (window.innerWidth > 1279) {
    arrayLength = 8;
  }
  if (window.innerWidth < 1280) {
    arrayLength = 6;
  }
  if (window.innerWidth < 768) {
    arrayLength = 3;
  }
  let result = [];
  let temp = getRandomInt(0, 7);
  for (let i = 0; i < arrayLength; i++) {
    if (result.includes(temp)) {
      while (result.includes(temp)) {
        temp = getRandomInt(0, 7);
      }
    }
    result.push(temp);
  }
  let tempResult = [...result];
  for (let i = 0; i < (48 / arrayLength - 1); i++) {
    result = getRandomArr(result);
    tempResult = [...tempResult, ...result];
  }
  return tempResult;
}



let tempArr = [...getTempArr()];

clickButtonArrow();



function clickButtonArrow () {
  let counter = 0;

  if (window.innerWidth > 1279) {
    counter = buttons[2].textContent * 8 - 8;
  }
  if (window.innerWidth < 1280) {
    counter = buttons[2].textContent * 6 - 6;
  }
  if (window.innerWidth < 768) {
    counter = buttons[2].textContent * 3 - 3;
  }

  for (let j of petsCards) {
    if (counter > 47) {
      break;
    }
    j.children[0].style.backgroundImage = 'url(' + pets[tempArr[counter]].img + ')';
    j.children[1].textContent = pets[tempArr[counter]].name;
    j.classList.add('animation-pets__card');
    setTimeout(() => {
     j.classList.remove('animation-pets__card');
    }, 20);
    counter++;
  };
};

buttons[0].addEventListener('click', () => {
  if (buttons[2].textContent != 1) {
    buttons[2].textContent = 1;
    clickButtonArrow();
    buttons[0].classList.add('non-active-button');
    buttons[1].classList.add('non-active-button');
    buttons[3].classList.remove('non-active-button');
    buttons[4].classList.remove('non-active-button');
  };
});

buttons[1].addEventListener('click', () => {
  if (window.innerWidth > 1279) {
    amountPages = 6;
  }
  if (window.innerWidth < 1280) {
    amountPages = 8;
  }
  if (window.innerWidth < 768) {
    amountPages = 16;
  }
  if (buttons[2].textContent >= amountPages) {
    buttons[2].textContent = amountPages;
  }
  if (buttons[2].textContent == 2 && buttons[2].textContent != 1) {
    buttons[2].textContent = 1;
    clickButtonArrow();
    buttons[0].classList.add('non-active-button');
    buttons[1].classList.add('non-active-button');
  };
  if (buttons[2].textContent != 1 && buttons[2].textContent != 2) {
    buttons[2].textContent -= 1;
    clickButtonArrow();
    buttons[3].classList.remove('non-active-button');
    buttons[4].classList.remove('non-active-button');
  };
});

buttons[3].addEventListener('click', () => {
  if (window.innerWidth > 1279) {
    amountPages = 6;
  }
  if (window.innerWidth < 1280) {
    amountPages = 8;
  }
  if (window.innerWidth < 768) {
    amountPages = 16;
  }
  if (buttons[2].textContent == amountPages - 1 && buttons[2].textContent != amountPages || buttons[2].textContent > amountPages) {
    buttons[2].textContent = amountPages;
    clickButtonArrow();
    buttons[3].classList.add('non-active-button');
    buttons[4].classList.add('non-active-button');
  }
  if (buttons[2].textContent != amountPages && buttons[2].textContent != amountPages - 1) {
    buttons[2].textContent = +buttons[2].textContent + 1;
    clickButtonArrow();
    buttons[0].classList.remove('non-active-button');
    buttons[1].classList.remove('non-active-button');
  };
});

buttons[4].addEventListener('click', () => {
  if (window.innerWidth > 1279) {
    amountPages = 6;
  }
  if (window.innerWidth < 1280) {
    amountPages = 8;
  }
  if (window.innerWidth < 768) {
    amountPages = 16;
  }
  if (buttons[2].textContent != amountPages) {
    buttons[2].textContent = amountPages;
    clickButtonArrow();
    buttons[0].classList.remove('non-active-button');
    buttons[1].classList.remove('non-active-button');
    buttons[3].classList.add('non-active-button');
    buttons[4].classList.add('non-active-button');
  };
});



for (let i of petsCards) {
  i.addEventListener('click', () => {
    for (let j of pets) {
      if (i.children[1].textContent == j.name) {
        modalName.textContent = j.name;
        modalTypeAndBreed.textContent = j.type + ' - ' + j.breed;
        modalImg.style.backgroundImage = 'url(' + j.img + ')';
        modalDescription.textContent = j.description;
        lis[0].children[1].textContent = ' ' + j.age;
        lis[1].children[1].textContent = ' ' + j.inoculations;
        lis[2].children[1].textContent = ' ' + j.diseases;
        lis[3].children[1].textContent = ' ' + j.parasites;
      }
    }
    modalWindow.classList.remove('hide-modal-window');
    body.classList.add('overflowHidden');
  })
}

modalClose.addEventListener('click', () => {
  modalWindow.classList.add('hide-modal-window');
  body.classList.remove('overflowHidden');
  modalClose.style.backgroundColor = 'transparent';
});

modalWindow.addEventListener('click', () => {
  modalWindow.classList.add('hide-modal-window');
  body.classList.remove('overflowHidden');
  modalClose.style.backgroundColor = 'transparent';
});

modalCard.addEventListener('click', (event) => {
  event.stopPropagation();
});

modalWindow.addEventListener('mousemove', () => {
  modalClose.style.backgroundColor = '#f1cdb3';
});

modalCard.addEventListener('mousemove', () => {
  modalClose.style.backgroundColor = 'transparent';
})

modalCard.addEventListener('mousemove', (event) => {
  event.stopPropagation();
});


let size = 0;
if (window.innerWidth > 1279) {
  size = 'big';
}
if (window.innerWidth < 1280 && window.innerWidth > 767) {
  size = 'medium';
}
if (window.innerWidth < 768) {
  size = 'small';
}

window.addEventListener('resize', () => {
  let newSize = 0;
  if (window.innerWidth > 1279) {
    newSize = 'big';
  }
  if (window.innerWidth < 1280 && window.innerWidth > 767) {
    newSize = 'medium';
  }
  if (window.innerWidth < 768) {
    newSize = 'small';
  }
  if (size != newSize) {
    window.location.reload();
  }
});
