import { Todo } from "./todo";

// const url = 'https://jsonplaceholder.typicode.com/todos';
const url = 'http://localhost:3000/todos';


export async function fetchTodos() {
  const res = await fetch(url);

  // if res.status === 200

  const todos = await res.json();
  return todos.slice(0, 10);
}

export async function postTodo(todo: Todo) {
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

export async function deleteTodo(id: string | number) {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  const todo = await res.json();
  return todo;
}
