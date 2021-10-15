// (function () {
//   'use strict';
//   // Module IIFE (Immediately Invoked Function Expression)

import { deleteTodo, fetchTodos, postTodo } from './api.js';
import { todoAdd, todoRemove } from './todos.js';

/** @type {HTMLFormElement} */
const todoFormEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const todoDivEl = document.querySelector('.todo-div');

/** @type {HTMLInputElement} */
const todoToggleEl = document.querySelector('.todo-toggle');


todoFormEl.addEventListener('submit', async (e) => {
  /** @type {SubmitEvent} */
  const event = e;

  event.preventDefault();

  const todoFromServer = await postTodo({
    id: Math.random(),
    title: todoInputEl.value,
    completed: false,
  });

  todoAdd(todoFromServer, todoDivEl);
});

todoDivEl.addEventListener('click', async (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todo-remove')) {
    const todoRowEl = target.closest('.todo-row');

    const { todoId } = todoRowEl.dataset;

    await deleteTodo(todoId);

    todoRemove(todoRowEl);
  }
});

todoToggleEl.addEventListener('click', (event) => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = todoDivEl.querySelectorAll('.todo-completed');

  for (const checkbox of checkboxes) {
    checkbox.checked = event.target.checked;
  }
});


fetchTodos().then((todos) => {
  for (const todo of todos) {
    todoAdd(todo, todoDivEl);
  }
})

// }());
