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

let row = document.createElement('div');
row.className = 'keyboard__row';
keyboard.append(row);

for (let i=0; i<=5; i++){
   let key = document.createElement('div');
   key.className = 'keyboard__key';
   row.append(key);
}
