//keys obj ans arr
let keys = [];

function Key(keyName, keyCode) {
   this.keyName = keyName;
   this.keyCode = keyCode;
}

let firstRow = [];
// firstRow.push(new Key('`', '192'), new Key('1', '49'), new Key('2','50'), new Key('3','51'), new Key('4','52'),
//               new Key('5','53'), new Key('6','54'), new Key('7','55'), new Key('8','56'), new Key('9','57'),
//               new Key('0','48'), new Key('-','189'), new Key('=','187'), new Key('Backspace','8')
// );
firstRow.push(new Key('`', 'Backquote'), new Key('1', 'Digit1'), new Key('2','Digit2'), new Key('3','Digit3'), new Key('4','Digit4'),
              new Key('5','Digit5'), new Key('6','Digit6'), new Key('7','Digit7'), new Key('8','Digit8'), new Key('9','Digit9'),
              new Key('0','Digit0'), new Key('-','Minus'), new Key('=','Equal'), new Key('Backspace','Backspace')
);

let secondRow = [];
secondRow.push(new Key('Tab', '9'), new Key('q', '81'), new Key('w','87'), new Key('e','69'), new Key('r','82'),
               new Key('t','84'), new Key('y','89'), new Key('u','85'), new Key('i','73'), new Key('o','79'),
               new Key('p','80'), new Key('[','219'), new Key(']','221'), new Key('\/','220'), new Key('Del','46')
);

let thirdRow = [];
thirdRow.push(new Key('CapsLock', '20'), new Key('a', '65'), new Key('s','83'), new Key('d','68'), new Key('f','70'),
               new Key('g','71'), new Key('h','72'), new Key('j','74'), new Key('k','75'), new Key('l','76'),
               new Key(';','186'), new Key('\'','222'), new Key('Enter','13')
);

let fourthRow = [];
fourthRow.push(new Key('Shift', '16'), new Key('z', '90'), new Key('x','88'), new Key('c','67'), new Key('v','86'),
               new Key('b','66'), new Key('n','78'), new Key('m','77'), new Key(',','188'), new Key('.','190'),
               new Key('/','191'), new Key('▲','38'), new Key('Shift','16')
);

let fithRow = [];
fithRow.push(new Key('Ctrl', '17'), new Key('Win', '91'), new Key('Alt','18'), new Key('Space','32'), new Key('Alt','18'),
               new Key('◄','37'), new Key('▼','40'), new Key('►','39'), new Key('Ctrl','17')
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