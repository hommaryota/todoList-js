'use strict';

const addOn = document.querySelector('.add-btn');

addOn.addEventListener('click', () => {
  const inputText = document.getElementById('add-area');
  let value = inputText.value;
  const li = document.createElement('li');

  if (value !== '') {
    const todo = document.getElementById('todo');
    const list = todo.appendChild(li);
    list.innerHTML = `${value} <button class="delete">Delete</button><button class="done">Done</button>`;
    inputText.value = '';
  } else {
    alert('入力してください')
  }

  Delete();
  Done();
})

const Delete = () => {
  const deleteBtn = document.querySelectorAll('.delete');
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function() {
      this.parentNode.remove();
    })
  }
}

// タスク完了
const Done = () => {
  const doneBtn = document.querySelectorAll('.done');
  const done = document.getElementById('done');
  for (let i = 0; i < doneBtn.length; i++) {
    doneBtn[i].addEventListener('click', function () {
      let _this = this.parentNode;
      _this.remove();
      done.appendChild(_this);
      this.innerHTML = 'Return'
      this.classList.remove('done');
      this.classList.add('return');

      Return();
    })
  }
}

// タスク戻す
const Return = () => {
  let returnBtn = document.querySelectorAll('.return');
  const todo = document.getElementById('todo');
  for (let i = 0; i < returnBtn.length; i++) {
    returnBtn[i].addEventListener('click', function () {
      let _this = this.parentNode;
      _this.remove();
      todo.appendChild(_this);
      this.innerHTML = 'Done'
      this.classList.remove('return');
      this.classList.add('done');

      Done();
    })
  }
}
