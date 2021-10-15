const express = require('express');
const cors = require('cors');

const todos = [
  {
    id: 1,
    title: 'ABC',
    completed: false,
  },
  {
    id: 2,
    title: 'DEF',
    completed: true,
  }
];

const app = express();

// plugin/middleware cors enregistré pour toutes les requetes
// permet le support des requetes cross origin/domain
app.use(cors());

// app.get('/hello/:name', (req, res) => {
//   res.json({msg: 'Hello ' + req.params.name});
// });

// EXERCICE 1
// SUR LE GET /todos répondre en JSON le tableau complet

// app.post('/todos', express.json()); // créé req.body
// app.post('/todos', (req, res) => {

// });

app.post('/todos', express.json(), (req, res) => {
  const lastId = todos[todos.length - 1].id;

  const todo = req.body;
  todo.id = lastId + 1;

  todos.push(todo);

  res.status(201);
  res.json(todo);
});

// EXERCICE 2
// SUR LE DELETE /todos/:id supprimer la todo dont l'id
// correspond (à transformer en number)
// Pour supprimer vous pourrez utiliser findIndex et splice (Array)

app.listen(3000, () => {
  console.log('server started');
});
