async function insert_users(limit=20){
    var users =  await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
      ).then((response) => response.json());

}

async function posts_filler(limit=20){

}

async function comments_filler(limit=20){

}
