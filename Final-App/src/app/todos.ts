import { prepend, remove } from "./dom-utils";
import { Todo } from "./todo";

export function todoAdd(todo: Todo, containerEl: HTMLElement) {
  /**
   * <div class="todo-row" data-todo-id="0.52356346563">
   *   <input type="checkbox" class="todo-completed">
   *   <span class="todo-title">Acheter du pain</span>
   *   <button>-</button>
   * </div>
   */
  const todoRowEl = document.createElement('div');
  todoRowEl.className = 'todo-row';
  todoRowEl.dataset.todoId = String(todo.id);

  // Exercice insérer la checkbox (comme dans le HTML ci-dessus)
  const todoCompletedEl = document.createElement('input');
  todoCompletedEl.type = 'checkbox';
  todoCompletedEl.className = 'todo-completed';
  todoRowEl.appendChild(todoCompletedEl);

  const todoTitleEl = document.createElement('span');
  todoTitleEl.className = 'todo-title';
  todoTitleEl.innerText = todo.title;
  todoRowEl.appendChild(todoTitleEl);

  // Exercice insérer le bouton (comme dans le HTML ci-dessus)
  const todoDeleteEl = document.createElement('button');
  todoDeleteEl.innerText = '-';
  todoDeleteEl.className = 'todo-remove';

  todoRowEl.appendChild(todoDeleteEl);

  prepend(containerEl, todoRowEl);
}

export function todoRemove(todoRowEl: HTMLElement) {
  remove(todoRowEl);
}
