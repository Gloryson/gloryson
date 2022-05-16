;(function smoothAnalogClock () {
  setInterval(function () {
      let date = new Date ();
      let smoothSeconds = date.getSeconds() * 6 + date.getMilliseconds() * 0.006;
      let smoothMinutes = date.getMinutes() * 6 + date.getSeconds() / 10;
      let smoothHours = date.getHours() * 30 + date.getMinutes() / 2 + date.getSeconds() / 100;
      document.querySelector('.seconds').style.transform = `rotate(${smoothSeconds}deg)`;
      document.querySelector('.minutes').style.transform = `rotate(${smoothMinutes}deg)`;
      document.querySelector('.hours').style.transform = `rotate(${smoothHours}deg)`; 
  }, 10);
})();





let galaxy = document.querySelector('.galaxy-background');

window.addEventListener('mousemove', (event) => {
  let x = (window.innerWidth / 2 - event.pageX) / 50;
  let y = (window.innerHeight / 2 - event.pageY) / 50;
  galaxy.style.transform = `translate3d(${x}px, ${y}px, 0px)`
});





let skills = document.querySelector('.main__skills-block');
let title = document.querySelector('.main__title-block');
let main = document.querySelector('.main');
let projects = document.querySelector('.projects');
let contacts = document.querySelector('.contacts');
let touchStart = 0;
let touchEnd = 0;


function getRequiredScreen (event) {
  if (event.deltaY > 0 || touchStart > touchEnd) {
    if (!projects.classList.contains('opacity-off')) {
      contacts.style.transform = 'translateY(-200%) translateX(0)';
      contacts.classList.remove('opacity-off');
      projects.style.transform = 'translateY(-100%) scale(0)';
      projects.classList.add('opacity-off');
    }
    if (!main.classList.contains('opacity-off')) {
      projects.style.transform = 'translateY(-100%) scale(1)';
      projects.classList.remove('opacity-off');
      skills.style.transform = 'translateX(-100%)';
      title.style.transform = 'translateX(100%)';
      main.classList.add('opacity-off');
    }
  }
  if (event.deltaY < 0 || touchStart < touchEnd) {
    if (!projects.classList.contains('opacity-off')) {
      skills.style.transform = 'translateX(0)';
      title.style.transform = 'translateX(0)';
      main.classList.remove('opacity-off');
      projects.style.transform = 'translateY(-100%) scale(0)';
      projects.classList.add('opacity-off');
    }
    if (!contacts.classList.contains('opacity-off')) {
      projects.style.transform = 'translateY(-100%) scale(1)';
      projects.classList.remove('opacity-off');
      contacts.style.transform = 'translateY(-200%) translateX(150%)';
      contacts.classList.add('opacity-off');
    }
  }
  window.removeEventListener('wheel', getRequiredScreen);
  setTimeout(() => {
    window.addEventListener('wheel', getRequiredScreen);
  }, 200)
};



window.addEventListener('wheel', getRequiredScreen);

window.addEventListener('touchstart', (event) => {
  touchStart = event.changedTouches[0].screenY;
});

window.addEventListener('touchend', (event) => {
  touchEnd = event.changedTouches[0].screenY;
  getRequiredScreen(event);
})





let links = document.querySelectorAll('.projects a');

links.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    links.forEach(link => {
      if (link != event.target) {
        link.style.opacity = '0.3';
      }
    })
  })
  link.addEventListener('mouseout', () => {
    links.forEach(link => {
      link.style.opacity = '1';
    })
  })
});