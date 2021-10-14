# Exercices

## Charger les todos initiales

Créer une fonction `fetchTodos` dans `api.js` et l'exporter

Cette fonction doit retourner la promesse faites par l'API `fetch` vers
l'URL https://jsonplaceholder.typicode.com/todos

## Insérer une nouvelle todo

Au submit du formulaire, envoyer une requete
`POST https://jsonplaceholder.typicode.com/todos`

Avec comme body le JSON de la todo

Et comme entete de requete `Content-type: application/json`

## Supprimer les todos

Au clic du bouton delete

envoyer une requete
`DELETE https://jsonplaceholder.typicode.com/todos/123` (où `123` est l'id de la todo)
