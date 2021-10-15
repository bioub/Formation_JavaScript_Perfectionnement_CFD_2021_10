// const url = 'https://jsonplaceholder.typicode.com/todos';
const url = 'http://localhost:3000/todos';


export async function fetchTodos() {
  const res = await fetch(url);

  // if res.status === 200

  const todos = await res.json();
  return todos.slice(0, 10);
}

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export async function postTodo(todo) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const todoFromServer = await res.json();
  return todoFromServer;
}

/**
 * @param {number} id
 */
export async function deleteTodo(id) {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  const todo = await res.json();
  return todo;
}
