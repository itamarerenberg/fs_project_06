function getAlbumsByUserId(id){
    
    // return [
    //     {
    //         "userId": 3,
    //         "id": 21,
    //         "title": "repudiandae voluptatem optio est consequatur rem in temporibus et"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 22,
    //         "title": "et rem non provident vel ut"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 23,
    //         "title": "incidunt quisquam hic adipisci sequi"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 24,
    //         "title": "dolores ut et facere placeat"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 25,
    //         "title": "vero maxime id possimus sunt neque et consequatur"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 26,
    //         "title": "quibusdam saepe ipsa vel harum"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 27,
    //         "title": "id non nostrum expedita"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 28,
    //         "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 29,
    //         "title": "inventore ut quasi magnam itaque est fugit"
    //     },
    //     {
    //         "userId": 3,
    //         "id": 30,
    //         "title": "tempora assumenda et similique odit distinctio error"
    //     }
    // ];
}

function updateAlbum(updatedAlbum){

}

function getAlbumById(id){
    return {id: id, title: 'title'}
}

function addAlbum(newAlbum){
    return {...newAlbum, id: '101'}
}

module.exports.getAlbumsByUserId = getAlbumsByUserId;
module.exports.updateAlbum = updateAlbum;
module.exports.getAlbumById = getAlbumById;
module.exports.addAlbum = addAlbum;
