const pictures = require('../db_manager/pictures');
const posts = require('../db_manager/posts');
const user = require('../db_manager/user');
const todos = require('../db_manager/todos');
const comments = require('../db_manager/comments');
const albums = require('../db_manager/albums');


function insert_users(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = user.addUser(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

function posts_filler(limit=20){
  const users_added = []
  fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((response) => response.json())
  .then(res => {
    for(let i = 0; i < res.length;i++){
      res = posts.addPost(res[i])
      users_added.push(res)
    }
  })
  console.log(users_added)
}

function comments_filler(limit=20){

  const users_added = []
  fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((response) => response.json())
  .then(res => {
    for(let i = 0; i < res.length;i++){
      res = comments.addComment(res[i])
      users_added.push(res)
    }
  })
  console.log(users_added)

}

function insert_albums(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/albums`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = albums.addAlbum(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

function insert_pictures(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/photos`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = pictures.addNewPicture(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

function insert_todos(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/todos`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = todos.addTodo(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}


