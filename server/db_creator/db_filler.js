async function insert_users(limit=20){
  const users_added = []
      fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((response) => response.json())
      .then(res => {
        for(let i = 0; i < res.length;i++){
           id = await user.addUser({...res[i], passward: res[i].address.geo.lat.substr(-4)})
           //res2 = await user.addPassward(res.id, res[i].address.geo.lat.substr(-4))
           users_added.push(id)
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
      id = await posts.addPost(res[i])
      users_added.push(id)
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
      id = await comments.addComment(res[i])
      users_added.push(id)
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
          id = await albums.addAlbum(res[i]);
          users_added.push(id)
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
          id = await pictures.addNewPicture(res[i]);
          users_added.push(id)
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
          id = await todos.addTodo(res[i]);
          users_added.push(id)
        }
      })
      console.log(users_added)
}


