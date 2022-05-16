const body = document.querySelector('body');
const container = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let keyboardRow = document.createElement('div');

body.appendChild(container);
container.classList.add('container');
container.appendChild(textarea);
textarea.setAttribute('cols', '30');
textarea.setAttribute('rows', '10');
textarea.setAttribute('placeholder', 'Click here to show keyboard...');
textarea.focus();

container.appendChild(keyboard);
keyboard.classList.add('keyboard');
keyboard.classList.add('hidden');

for (let i = 0; i < 5; i += 1) {
  const div = document.createElement('div');
  keyboard.appendChild(div);
  div.classList.add('keyboard__row');
}

keyboardRow = document.querySelectorAll('.keyboard__row');

for (let i = 0; i < 14; i += 1) {
  const div = document.createElement('div');
  keyboardRow[0].appendChild(div);
  div.classList.add('key');
  div.classList.add('char');
  if (i === 13) {
    div.classList.remove('char');
    div.classList.add('back');
    div.innerHTML = 'Back';
  }
}

for (let i = 0; i < 14; i += 1) {
  const div = document.createElement('div');
  keyboardRow[1].appendChild(div);
  div.classList.add('key');
  div.classList.add('char');
  if (i === 0) {
    div.classList.remove('char');
    div.classList.add('tab');
    div.innerHTML = 'Tab';
  }
}

for (let i = 0; i < 13; i += 1) {
  const div = document.createElement('div');
  keyboardRow[2].appendChild(div);
  div.classList.add('key');
  div.classList.add('char');
  if (i === 0) {
    div.classList.remove('char');
    div.classList.add('caps');
    div.innerHTML = 'Caps';
  }
  if (i === 12) {
    div.classList.remove('char');
    div.classList.add('enter');
    div.innerHTML = 'Enter';
  }
}

for (let i = 0; i < 13; i += 1) {
  const div = document.createElement('div');
  keyboardRow[3].appendChild(div);
  div.classList.add('key');
  div.classList.add('char');
  if (i === 0) {
    div.classList.remove('char');
    div.classList.add('shift');
    div.innerHTML = 'Shift';
  }
  if (i === 11) {
    div.classList.remove('char');
    div.classList.add('up');
    div.innerHTML = '&#8593;';
  }
  if (i === 12) {
    div.classList.remove('char');
    div.classList.add('del');
    div.innerHTML = 'Del';
  }
}

for (let i = 0; i < 10; i += 1) {
  const div = document.createElement('div');
  keyboardRow[4].appendChild(div);
  div.classList.add('key');
  if (i === 0) {
    div.classList.add('ctrl');
    div.innerHTML = 'Ctrl';
  }
  if (i === 1) {
    div.classList.add('hide');
    div.innerHTML = '&#9660;';
  }
  if (i === 2) {
    div.innerHTML = 'Alt';
  }
  if (i === 3) {
    div.classList.add('lang');
  }
  if (i === 4) {
    div.classList.add('char');
    div.classList.add('space');
  }
  if (i === 5) {
    div.classList.add('sound');
    div.classList.add('line-through');
    div.innerHTML = '&#9834;';
  }
  if (i === 6) {
    div.classList.add('light');
    div.innerHTML = '&#9788;';
  }
  if (i === 7) {
    div.classList.add('left');
    div.innerHTML = '&#8592;';
  }
  if (i === 8) {
    div.classList.add('down');
    div.innerHTML = '&#8595;';
  }
  if (i === 9) {
    div.classList.add('right');
    div.innerHTML = '&#8594;';
  }
}

const capsShiftKeyRu = [...'ё!"№;%:?*()_+йцукенгшщзхъ/фывапролджэячсмитьбю, '.split(''), 'ru'];
const defaultKeyRu = [...'ё1234567890-=йцукенгшщзхъ\\фывапролджэячсмитьбю. '.split(''), 'ru'];
const defaultKey = [...'`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./ '.split(''), 'en'];
const capsShiftKey = [...'~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>? '.split(''), 'en'];

const charCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Delete', 'ControlLeft', '', 'AltLeft', '', 'Space', '', '', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const input = document.querySelector('textarea');
const char = document.querySelectorAll('.char');
const sound = document.querySelector('.sound');
const shift = document.querySelector('.shift');
const key = document.querySelectorAll('.key');
const back = document.querySelector('.back');
const caps = document.querySelector('.caps');
const lang = document.querySelector('.lang');
const del = document.querySelector('.del');

function createKeys(keyboardLayout, register) {
  for (let i = 0; i < char.length; i += 1) {
    if (register === true) {
      char[i].textContent = keyboardLayout[i].toUpperCase();
      lang.textContent = keyboardLayout[keyboardLayout.length - 1].toUpperCase();
    } else {
      char[i].textContent = keyboardLayout[i];
      lang.textContent = keyboardLayout[keyboardLayout.length - 1];
    }
  }
}

function checkStatusKeyboard() {
  if (caps.classList.contains('on') && shift.classList.contains('on') && lang.classList.contains('ru')) {
    createKeys(capsShiftKeyRu);
  }
  if (caps.classList.contains('on') && shift.classList.contains('on') && !lang.classList.contains('ru')) {
    createKeys(capsShiftKey);
  }
  if (!caps.classList.contains('on') && !shift.classList.contains('on') && lang.classList.contains('ru')) {
    createKeys(defaultKeyRu);
  }
  if (!caps.classList.contains('on') && !shift.classList.contains('on') && !lang.classList.contains('ru')) {
    createKeys(defaultKey);
  }
  if (!caps.classList.contains('on') && shift.classList.contains('on') && lang.classList.contains('ru')) {
    createKeys(capsShiftKeyRu, true);
  }
  if (!caps.classList.contains('on') && shift.classList.contains('on') && !lang.classList.contains('ru')) {
    createKeys(capsShiftKey, true);
  }
  if (caps.classList.contains('on') && !shift.classList.contains('on') && lang.classList.contains('ru')) {
    createKeys(defaultKeyRu, true);
  }
  if (caps.classList.contains('on') && !shift.classList.contains('on') && !lang.classList.contains('ru')) {
    createKeys(defaultKey, true);
  }
}

input.addEventListener('blur', () => {
  input.focus();
});

shift.addEventListener('click', () => {
  shift.classList.toggle('on');
  checkStatusKeyboard();
});

caps.addEventListener('click', () => {
  caps.classList.toggle('on');
  checkStatusKeyboard();
});

lang.addEventListener('click', () => {
  lang.classList.toggle('ru');
  checkStatusKeyboard();
  if (lang.classList.contains('ru')) {
    localStorage.setItem('5315132171214321671651', 'ru');
  } else {
    localStorage.setItem('5315132171214321671651', 'en');
  }
});

char.forEach((i) => {
  i.addEventListener('mousedown', () => {
    let cursorPosition = input.selectionStart;
    if (input.selectionStart === input.selectionEnd) {
      input.value = input.value.slice(0, cursorPosition) + i.textContent
        + input.value.slice(cursorPosition);
      input.selectionStart = cursorPosition + 1;
      input.selectionEnd = input.selectionStart;
    } else {
      input.value = input.value.slice(0, input.selectionStart)
        + i.textContent + input.value.slice(input.selectionEnd);
      input.selectionStart = cursorPosition + 1;
      input.selectionEnd = input.selectionStart;
    }
    let timer = setTimeout(function tempFuncForTimer() {
      input.value = input.value.slice(0, cursorPosition)
        + i.textContent + input.value.slice(cursorPosition);
      cursorPosition += 1;
      input.selectionStart = cursorPosition + 1;
      input.selectionEnd = input.selectionStart;
      timer = setTimeout(tempFuncForTimer, 35);
    }, 500);
    i.addEventListener('mouseup', () => {
      clearInterval(timer);
    });
    i.addEventListener('mouseout', () => {
      clearInterval(timer);
    });
  });
});

document.querySelector('.light').addEventListener('click', () => {
  key.forEach((elem) => {
    elem.classList.toggle('lighting');
  });
});

back.addEventListener('mousedown', () => {
  let cursorPosition = input.selectionStart;
  if (input.selectionStart !== 0) {
    if (input.selectionStart === input.selectionEnd) {
      input.value = input.value.slice(0, cursorPosition - 1) + input.value.slice(cursorPosition);
      input.selectionStart = cursorPosition - 1;
      input.selectionEnd = input.selectionStart;
    } else {
      input.value = input.value.slice(0, input.selectionStart)
        + input.value.slice(input.selectionEnd);
      input.selectionStart = cursorPosition;
      input.selectionEnd = input.selectionStart;
      cursorPosition += 1;
    }
  } else {
    input.value = input.value.slice(input.selectionEnd);
    input.selectionStart = 0;
    input.selectionEnd = input.selectionStart;
  }
  cursorPosition -= 1;
  let timer = setTimeout(function tempFuncForTimer() {
    if (input.selectionStart !== 0) {
      input.value = input.value.slice(0, cursorPosition - 1) + input.value.slice(cursorPosition);
      input.selectionStart = cursorPosition - 1;
      input.selectionEnd = input.selectionStart;
      cursorPosition -= 1;
    }
    timer = setTimeout(tempFuncForTimer, 35);
  }, 500);
  back.addEventListener('mouseup', () => {
    clearInterval(timer);
  });
  back.addEventListener('mouseout', () => {
    clearInterval(timer);
  });
});

document.querySelector('.tab').addEventListener('click', () => {
  const cursorPosition = input.selectionStart;
  if (input.selectionStart === input.selectionEnd) {
    input.value = `${input.value.slice(0, cursorPosition)}    ${input.value.slice(cursorPosition)}`;
    input.selectionStart = cursorPosition + 4;
    input.selectionEnd = input.selectionStart;
  } else {
    input.value = `${input.value.slice(0, cursorPosition)}    ${input.value.slice(input.selectionEnd)}`;
    input.selectionStart = cursorPosition + 4;
    input.selectionEnd = input.selectionStart;
  }
});

document.querySelector('.enter').addEventListener('click', () => {
  const cursorPosition = input.selectionStart;
  if (input.selectionStart === input.selectionEnd) {
    input.value = `${input.value.slice(0, cursorPosition)}\n${input.value.slice(cursorPosition)}`;
    input.selectionStart = cursorPosition + 1;
    input.selectionEnd = input.selectionStart;
  } else {
    input.value = `${input.value.slice(0, cursorPosition)}\n${input.value.slice(input.selectionEnd)}`;
    input.selectionStart = cursorPosition + 1;
    input.selectionEnd = input.selectionStart;
  }
});

del.addEventListener('mousedown', () => {
  const cursorPosition = input.selectionStart;
  if (input.selectionStart === input.selectionEnd) {
    input.value = input.value.slice(0, cursorPosition) + input.value.slice(cursorPosition + 1);
    input.selectionStart = cursorPosition;
    input.selectionEnd = input.selectionStart;
  } else {
    input.value = input.value.slice(0, cursorPosition) + input.value.slice(input.selectionEnd);
    input.selectionStart = cursorPosition;
    input.selectionEnd = input.selectionStart;
  }
  let timer = setTimeout(function tempFuncForTimer() {
    input.value = input.value.slice(0, cursorPosition) + input.value.slice(cursorPosition + 1);
    input.selectionStart = cursorPosition;
    input.selectionEnd = input.selectionStart;
    timer = setTimeout(tempFuncForTimer, 35);
  }, 500);
  del.addEventListener('mouseup', () => {
    clearInterval(timer);
  });
  del.addEventListener('mouseout', () => {
    clearInterval(timer);
  });
});

document.querySelector('.left').addEventListener('click', () => {
  if (input.selectionStart !== 0) {
    input.selectionStart -= 1;
    input.selectionEnd = input.selectionStart;
  }
});

document.querySelector('.right').addEventListener('click', () => {
  input.selectionStart += 1;
});

document.querySelector('.down').addEventListener('click', () => {
  let next; let
    current;
  for (let i = input.selectionStart; i < input.value.length; i += 1) {
    if (input.value[i] === '\n') {
      for (let j = i - 1; j > 0; j -= 1) {
        if (input.value[j] === '\n') {
          current = i - j;
          break;
        } else {
          current = i + 1;
        }
      }
      next = input.value.slice(i + 1).replace(/[\n].*/g, '').length;
      if (next < current && input.selectionStart + current > i + next) {
        input.selectionStart += i - input.selectionStart + next + 1;
      } else {
        input.selectionStart += current;
      }
      break;
    }
  }
});

document.querySelector('.up').addEventListener('click', () => {
  let previous; let
    current;
  for (let i = input.selectionStart - 1; i > 0; i -= 1) {
    if (input.value[i] === '\n') {
      for (let j = i + 1; j < input.value.length; j += 1) {
        if (input.value[j] === '\n') {
          current = j - i;
          break;
        } else {
          current = input.value.length - i;
        }
      }
      previous = input.value.slice(0, i).split('\n');
      previous = previous[previous.length - 1].length;
      if (previous < current && input.selectionStart - previous > i) {
        input.selectionStart -= input.selectionStart - i;
        input.selectionEnd = input.selectionStart;
      } else {
        input.selectionStart -= previous + 1;
        input.selectionEnd = input.selectionStart;
      }
      break;
    }
  }
});

function addKeyboardSound() {
  new Audio('key.mp3').play();
}

sound.addEventListener('click', () => {
  sound.classList.toggle('on');
  sound.classList.toggle('line-through');
  key.forEach((elem) => {
    if (sound.classList.contains('on')) {
      elem.addEventListener('mousedown', addKeyboardSound);
    } else {
      elem.removeEventListener('mousedown', addKeyboardSound);
    }
  });
});

document.querySelector('.hide').addEventListener('click', () => {
  document.querySelector('.keyboard').classList.add('hidden');
});
input.addEventListener('click', () => {
  document.querySelector('.keyboard').classList.remove('hidden');
  input.placeholder = '';
});

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < charCode.length; i += 1) {
    if (event.code === charCode[i]) {
      if (event.code === 'Tab') {
        event.preventDefault();
        const cursorPosition = input.selectionStart;
        if (input.selectionStart === input.selectionEnd) {
          input.value = `${input.value.slice(0, cursorPosition)}    ${input.value.slice(cursorPosition)}`;
          input.selectionStart = cursorPosition + 4;
          input.selectionEnd = input.selectionStart;
        } else {
          input.value = `${input.value.slice(0, cursorPosition)}    ${input.value.slice(input.selectionEnd)}`;
          input.selectionStart = cursorPosition + 4;
          input.selectionEnd = input.selectionStart;
        }
      }
      if (event.code === 'AltLeft') {
        event.preventDefault();
      }
      if (event.code === 'CapsLock') {
        caps.classList.toggle('on');
        checkStatusKeyboard();
        break;
      }
      if (event.code === 'ShiftLeft') {
        shift.classList.toggle('on');
        checkStatusKeyboard();
        break;
      }
      key[i].classList.add('on');
      document.addEventListener('keyup', () => {
        key[i].classList.remove('on');
      });
    }
  }
});

const keyLocalStorage = localStorage.getItem('5315132171214321671651');

if (keyLocalStorage) {
  if (keyLocalStorage === 'ru') {
    lang.classList.add('ru');
    checkStatusKeyboard();
  }
  if (keyLocalStorage === 'en') {
    lang.classList.remove('ru');
    checkStatusKeyboard();
  }
} else {
  createKeys(defaultKey);
}
