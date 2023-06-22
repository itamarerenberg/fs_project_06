const pictures = require('../db_manager/pictures');
const posts = require('../db_manager/posts');
const user = require('../db_manager/user');
const todos = require('../db_manager/todos');
const comments = require('../db_manager/comments');
const albums = require('../db_manager/albums');


async function insert_users(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = await user.addUser(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

async function posts_filler(limit=20){
  const users_added = []
  fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((response) => response.json())
  .then(res => {
    for(let i = 0; i < res.length;i++){
      res = await posts.addPost(res[i])
      users_added.push(res)
    }
  })
  console.log(users_added)
}

async function comments_filler(limit=20){

  const users_added = []
  fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((response) => response.json())
  .then(res => {
    for(let i = 0; i < res.length;i++){
      res = await comments.addComment(res[i])
      users_added.push(res)
    }
  })
  console.log(users_added)

}

async function insert_albums(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/albums`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = await albums.addAlbum(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

async function insert_pictures(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/photos`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = await pictures.addNewPicture(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}

async function insert_todos(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/todos`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
          res = await todos.addTodo(res[i]);
          users_added.push(res)
        }
      })
      console.log(users_added)
}


