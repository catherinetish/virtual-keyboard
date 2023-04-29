//keys obj ans arr
let keys = [];

function Key(keyName, keyCode) {
   this.keyName = keyName;
   this.keyCode = keyCode;
}

let firstRow = [];
firstRow.push(new Key('`', 'Backquote'), new Key('1', 'Digit1'), new Key('2','Digit2'), new Key('3','Digit3'), new Key('4','Digit4'),
              new Key('5','Digit5'), new Key('6','Digit6'), new Key('7','Digit7'), new Key('8','Digit8'), new Key('9','Digit9'),
              new Key('0','Digit0'), new Key('-','Minus'), new Key('=','Equal'), new Key('Backspace','Backspace')
);

let secondRow = [];
secondRow.push(new Key('Tab', 'Tab'), new Key('q', 'KeyQ'), new Key('w','KeyW'), new Key('e','KeyE'), new Key('r','KeyR'),
               new Key('t','KeyT'), new Key('y','KeyY'), new Key('u','KeyU'), new Key('i','KeyI'), new Key('o','KeyO'),
               new Key('p','KeyP'), new Key('[','BracketLeft'), new Key(']','BracketRight'), new Key('\/','Backslash'), new Key('Del','Delete')
);

let thirdRow = [];
thirdRow.push(new Key('CapsLock', 'CapsLock'), new Key('a', 'KeyA'), new Key('s','KeyS'), new Key('d','KeyD'), new Key('f','KeyF'),
               new Key('g','KeyG'), new Key('h','KeyH'), new Key('j','KeyJ'), new Key('k','KeyK'), new Key('l','KeyL'),
               new Key(';','Semicolon'), new Key('\'','Quote'), new Key('Enter','Enter')
);

let fourthRow = [];
fourthRow.push(new Key('Shift', 'ShiftLeft'), new Key('z', 'KeyZ'), new Key('x','KeyX'), new Key('c','KeyC'), new Key('v','KeyV'),
               new Key('b','KeyB'), new Key('n','KeyN'), new Key('m','KeyM'), new Key(',','Comma'), new Key('.','Period'),
               new Key('/','Slash'), new Key('▲','ArrowUp'), new Key('Shift','ShiftRight')
);

let fithRow = [];
fithRow.push(new Key('Ctrl', 'ControlLeft'), new Key('Win', 'MetaLeft'), new Key('Alt','AltLeft'), new Key('Space','Space'),
             new Key('Alt','AltRight'), new Key('◄','ArrowLeft'), new Key('▼','ArrowDown'), new Key('►','ArrowRight'),
             new Key('Ctrl','ControlRight')
);

keys.push(firstRow, secondRow, thirdRow, fourthRow, fithRow);


//html creation

let createContainer = document.createElement('div');
createContainer.className = 'container';
document.body.append(createContainer);

let container = document.querySelector('.container');

let outputField = document.createElement('textarea');
outputField.className = 'keyboard-textarea';
createContainer.append(outputField);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
createContainer.append(keyboard);

let desc = document.createElement('p');
desc.innerHTML = 'Клавиатура создана в операционной системе Windows';
createContainer.append(desc);



//create keys

for (let i=0; i<=keys.length-1; i++){

   let row = document.createElement('div');
   row.className = 'keyboard__row';
   keyboard.append(row);

      for(let key of keys[i]){
         let keyboardKey = document.createElement('div');
         keyboardKey.className = 'keyboard__key' + ` ${key.keyCode}`;
         keyboardKey.innerHTML = `${key.keyName}`;
         row.append(keyboardKey);
      }
}

//нажатие на клавишу на клавиатуре выделяет нажатую клавишу цветом
outputField.onkeydown = outputField.onkeyup = function(event){
   for (let i=0; i<=keys.length-1; i++){
      for(let key of keys[i]){

         if(event.code == key.keyCode){

            let codeOfKey = '.'+ key.keyCode;
            let choosenKey = document.querySelector(codeOfKey);

            choosenKey.classList.toggle('keyDown');
         }
      }
   }
}


keyboard.onclick = function(event){
   // let clickedKey = event.target.className;

   // console.log(event.target.className);

   console.log(event.type);
}

//смена внешнего вида кнопок по нажатию на экране
keyboard.onmousedown = function(event){
   event.target.style.borderRadius = '100px';
}
keyboard.onmouseup = function(event){
   event.target.style.borderRadius = '3px';
}
