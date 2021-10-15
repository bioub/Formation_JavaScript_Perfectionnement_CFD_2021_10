import { deleteTodo, fetchTodos, postTodo } from './api';
import { todoAdd, todoRemove } from './todos';

const todoFormEl = document.querySelector('.todo-form') as HTMLFormElement;
const todoInputEl = document.querySelector('.todo-input') as HTMLInputElement;
const todoDivEl = document.querySelector('.todo-div') as HTMLDivElement;
const todoToggleEl = document.querySelector('.todo-toggle') as HTMLInputElement;

todoFormEl.addEventListener('submit', async (event: Event) => {
  event.preventDefault();

  const todoFromServer = await postTodo({
    id: Math.random(),
    title: todoInputEl.value,
    completed: false,
  });

  todoAdd(todoFromServer, todoDivEl);
});

todoDivEl.addEventListener('click', async (event: Event) => {

  const target = event.target as HTMLElement;
  if (target.classList.contains('todo-remove')) {
    const todoRowEl = target.closest('.todo-row') as HTMLElement;

    const { todoId } = todoRowEl.dataset;

    await deleteTodo(todoId);

    todoRemove(todoRowEl);
  }
});

todoToggleEl.addEventListener('click', (event: Event) => {
  const checkboxes = todoDivEl.querySelectorAll<HTMLInputElement>('.todo-completed');

  for (const checkbox of checkboxes) {
    checkbox.checked = (event.target as HTMLInputElement).checked;
  }
});


fetchTodos().then((todos) => {
  for (const todo of todos) {
    todoAdd(todo, todoDivEl);
  }
})
