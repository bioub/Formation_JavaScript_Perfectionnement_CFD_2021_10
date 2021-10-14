// (function () {
//   'use strict';
//   // Module IIFE (Immediately Invoked Function Expression)

import { todoAdd, todoRemove } from './todos.js';

/** @type {HTMLFormElement} */
const todoFormEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const todoDivEl = document.querySelector('.todo-div');

/** @type {HTMLInputElement} */
const todoToggleEl = document.querySelector('.todo-toggle');


todoFormEl.addEventListener('submit', (e) => {
  /** @type {SubmitEvent} */
  const event = e;

  event.preventDefault();

  todoAdd({
    id: Math.random(),
    title: todoInputEl.value,
    completed: false,
  }, todoDivEl);
});

todoDivEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todo-remove')) {
    todoRemove(target.closest('.todo-row'));
  }
});

todoToggleEl.addEventListener('click', (event) => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = todoDivEl.querySelectorAll('.todo-completed');

  for (const checkbox of checkboxes) {
    checkbox.checked = event.target.checked;
  }
});

// }());
