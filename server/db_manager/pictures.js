function getPictureByAlbumId(id, index = 0){
    pics = [
        {
            "albumId": 21,
            "id": 1001,
            "title": "velit corrupti odio suscipit rerum",
            "url": "https://via.placeholder.com/600/a91759",
            "thumbnailUrl": "https://via.placeholder.com/150/a91759"
        },
        {
            "albumId": 21,
            "id": 1002,
            "title": "eveniet expedita est est amet doloremque facilis velit at",
            "url": "https://via.placeholder.com/600/a8d0f4",
            "thumbnailUrl": "https://via.placeholder.com/150/a8d0f4"
        },
        {
            "albumId": 21,
            "id": 1003,
            "title": "accusantium qui aperiam ipsum ipsam vel dolores alias",
            "url": "https://via.placeholder.com/600/71cb63",
            "thumbnailUrl": "https://via.placeholder.com/150/71cb63"
        },
        {
            "albumId": 21,
            "id": 1004,
            "title": "possimus et et sint non est culpa",
            "url": "https://via.placeholder.com/600/99ba7f",
            "thumbnailUrl": "https://via.placeholder.com/150/99ba7f"
        },
        {
            "albumId": 21,
            "id": 1005,
            "title": "a aliquam quia",
            "url": "https://via.placeholder.com/600/7496a",
            "thumbnailUrl": "https://via.placeholder.com/150/7496a"
        },
        {
            "albumId": 21,
            "id": 1006,
            "title": "qui corporis quia",
            "url": "https://via.placeholder.com/600/753f7e",
            "thumbnailUrl": "https://via.placeholder.com/150/753f7e"
        },
        {
            "albumId": 21,
            "id": 1007,
            "title": "at alias qui quis accusamus",
            "url": "https://via.placeholder.com/600/896576",
            "thumbnailUrl": "https://via.placeholder.com/150/896576"
        },
        {
            "albumId": 21,
            "id": 1008,
            "title": "eius velit eligendi vitae suscipit quia voluptas",
            "url": "https://via.placeholder.com/600/d0d07f",
            "thumbnailUrl": "https://via.placeholder.com/150/d0d07f"
        },
        {
            "albumId": 21,
            "id": 1009,
            "title": "blanditiis neque quaerat sit omnis sit facere",
            "url": "https://via.placeholder.com/600/1d20b6",
            "thumbnailUrl": "https://via.placeholder.com/150/1d20b6"
        },
        {
            "albumId": 21,
            "id": 1010,
            "title": "voluptates fugiat doloremque voluptatum quia",
            "url": "https://via.placeholder.com/600/dda153",
            "thumbnailUrl": "https://via.placeholder.com/150/dda153"
        },
        {
            "albumId": 21,
            "id": 1011,
            "title": "et dicta saepe ratione corrupti odit est et ipsam",
            "url": "https://via.placeholder.com/600/c62a55",
            "thumbnailUrl": "https://via.placeholder.com/150/c62a55"
        },
        {
            "albumId": 21,
            "id": 1012,
            "title": "quos in ut quia",
            "url": "https://via.placeholder.com/600/69751a",
            "thumbnailUrl": "https://via.placeholder.com/150/69751a"
        },
        {
            "albumId": 21,
            "id": 1013,
            "title": "natus qui doloribus",
            "url": "https://via.placeholder.com/600/e90af4",
            "thumbnailUrl": "https://via.placeholder.com/150/e90af4"
        },
        {
            "albumId": 21,
            "id": 1014,
            "title": "modi rem quasi",
            "url": "https://via.placeholder.com/600/bc4536",
            "thumbnailUrl": "https://via.placeholder.com/150/bc4536"
        },
        {
            "albumId": 21,
            "id": 1015,
            "title": "quia pariatur et",
            "url": "https://via.placeholder.com/600/b29092",
            "thumbnailUrl": "https://via.placeholder.com/150/b29092"
        },
        {
            "albumId": 21,
            "id": 1016,
            "title": "maiores ipsam est",
            "url": "https://via.placeholder.com/600/ea1813",
            "thumbnailUrl": "https://via.placeholder.com/150/ea1813"
        },
        {
            "albumId": 21,
            "id": 1017,
            "title": "et enim modi aut officia sunt sint",
            "url": "https://via.placeholder.com/600/8a8674",
            "thumbnailUrl": "https://via.placeholder.com/150/8a8674"
        },
        {
            "albumId": 21,
            "id": 1018,
            "title": "velit voluptates iste architecto non incidunt illo",
            "url": "https://via.placeholder.com/600/155e0f",
            "thumbnailUrl": "https://via.placeholder.com/150/155e0f"
        },
        {
            "albumId": 21,
            "id": 1019,
            "title": "exercitationem voluptates suscipit et",
            "url": "https://via.placeholder.com/600/6374c9",
            "thumbnailUrl": "https://via.placeholder.com/150/6374c9"
        },
        {
            "albumId": 21,
            "id": 1020,
            "title": "eos quis velit dolores et est fugiat",
            "url": "https://via.placeholder.com/600/b3bc11",
            "thumbnailUrl": "https://via.placeholder.com/150/b3bc11"
        },
        {
            "albumId": 21,
            "id": 1021,
            "title": "unde similique illo ducimus voluptatum laborum",
            "url": "https://via.placeholder.com/600/80d120",
            "thumbnailUrl": "https://via.placeholder.com/150/80d120"
        },
        {
            "albumId": 21,
            "id": 1022,
            "title": "suscipit soluta qui sapiente sit reprehenderit perferendis omnis facilis",
            "url": "https://via.placeholder.com/600/7ec9f5",
            "thumbnailUrl": "https://via.placeholder.com/150/7ec9f5"
        },
        {
            "albumId": 21,
            "id": 1023,
            "title": "et nesciunt qui et",
            "url": "https://via.placeholder.com/600/63afda",
            "thumbnailUrl": "https://via.placeholder.com/150/63afda"
        },
        {
            "albumId": 21,
            "id": 1024,
            "title": "dolorem praesentium voluptas alias quia commodi illum provident porro",
            "url": "https://via.placeholder.com/600/9e8734",
            "thumbnailUrl": "https://via.placeholder.com/150/9e8734"
        },
        {
            "albumId": 21,
            "id": 1025,
            "title": "fugiat quidem commodi et quia",
            "url": "https://via.placeholder.com/600/609463",
            "thumbnailUrl": "https://via.placeholder.com/150/609463"
        },
        {
            "albumId": 21,
            "id": 1026,
            "title": "et itaque sit dicta mollitia molestiae omnis quibusdam",
            "url": "https://via.placeholder.com/600/796735",
            "thumbnailUrl": "https://via.placeholder.com/150/796735"
        },
        {
            "albumId": 21,
            "id": 1027,
            "title": "sint voluptatem reprehenderit error saepe laudantium",
            "url": "https://via.placeholder.com/600/8c5f6e",
            "thumbnailUrl": "https://via.placeholder.com/150/8c5f6e"
        },
        {
            "albumId": 21,
            "id": 1028,
            "title": "est fugit voluptas qui eveniet earum",
            "url": "https://via.placeholder.com/600/8342b3",
            "thumbnailUrl": "https://via.placeholder.com/150/8342b3"
        },
        {
            "albumId": 21,
            "id": 1029,
            "title": "dolores animi ducimus et voluptatem",
            "url": "https://via.placeholder.com/600/97164f",
            "thumbnailUrl": "https://via.placeholder.com/150/97164f"
        },
        {
            "albumId": 21,
            "id": 1030,
            "title": "dolor libero debitis",
            "url": "https://via.placeholder.com/600/64d874",
            "thumbnailUrl": "https://via.placeholder.com/150/64d874"
        },
        {
            "albumId": 21,
            "id": 1031,
            "title": "autem explicabo temporibus magnam ducimus maxime fugiat molestiae",
            "url": "https://via.placeholder.com/600/ff39e1",
            "thumbnailUrl": "https://via.placeholder.com/150/ff39e1"
        },
        {
            "albumId": 21,
            "id": 1032,
            "title": "autem ut atque aperiam harum ea",
            "url": "https://via.placeholder.com/600/f14911",
            "thumbnailUrl": "https://via.placeholder.com/150/f14911"
        },
        {
            "albumId": 21,
            "id": 1033,
            "title": "distinctio quaerat hic",
            "url": "https://via.placeholder.com/600/26d0bc",
            "thumbnailUrl": "https://via.placeholder.com/150/26d0bc"
        },
        {
            "albumId": 21,
            "id": 1034,
            "title": "pariatur accusamus occaecati consectetur",
            "url": "https://via.placeholder.com/600/7775a4",
            "thumbnailUrl": "https://via.placeholder.com/150/7775a4"
        },
        {
            "albumId": 21,
            "id": 1035,
            "title": "ut quo sunt sit quia quia corrupti eligendi nemo",
            "url": "https://via.placeholder.com/600/4b42aa",
            "thumbnailUrl": "https://via.placeholder.com/150/4b42aa"
        },
        {
            "albumId": 21,
            "id": 1036,
            "title": "temporibus et vero aut et suscipit ducimus voluptatum",
            "url": "https://via.placeholder.com/600/3fe1a",
            "thumbnailUrl": "https://via.placeholder.com/150/3fe1a"
        },
        {
            "albumId": 21,
            "id": 1037,
            "title": "necessitatibus numquam ipsam quidem iste dolor vel libero",
            "url": "https://via.placeholder.com/600/4d016f",
            "thumbnailUrl": "https://via.placeholder.com/150/4d016f"
        },
        {
            "albumId": 21,
            "id": 1038,
            "title": "ut vitae possimus esse",
            "url": "https://via.placeholder.com/600/e78950",
            "thumbnailUrl": "https://via.placeholder.com/150/e78950"
        },
        {
            "albumId": 21,
            "id": 1039,
            "title": "inventore non voluptatibus molestiae deleniti deserunt illo quaerat aut",
            "url": "https://via.placeholder.com/600/4f46b",
            "thumbnailUrl": "https://via.placeholder.com/150/4f46b"
        },
        {
            "albumId": 21,
            "id": 1040,
            "title": "rerum blanditiis nisi quam ex dolorem fugit dolorem sed",
            "url": "https://via.placeholder.com/600/99074d",
            "thumbnailUrl": "https://via.placeholder.com/150/99074d"
        },
        {
            "albumId": 21,
            "id": 1041,
            "title": "necessitatibus aut est architecto et",
            "url": "https://via.placeholder.com/600/9236f",
            "thumbnailUrl": "https://via.placeholder.com/150/9236f"
        },
        {
            "albumId": 21,
            "id": 1042,
            "title": "corrupti sed ea ipsum alias et tenetur temporibus",
            "url": "https://via.placeholder.com/600/efdaf4",
            "thumbnailUrl": "https://via.placeholder.com/150/efdaf4"
        },
        {
            "albumId": 21,
            "id": 1043,
            "title": "doloremque minima ex ut reprehenderit",
            "url": "https://via.placeholder.com/600/d65a75",
            "thumbnailUrl": "https://via.placeholder.com/150/d65a75"
        },
        {
            "albumId": 21,
            "id": 1044,
            "title": "veniam deserunt vero minima",
            "url": "https://via.placeholder.com/600/1242af",
            "thumbnailUrl": "https://via.placeholder.com/150/1242af"
        },
        {
            "albumId": 21,
            "id": 1045,
            "title": "eos consequuntur dolores nesciunt ut qui ex",
            "url": "https://via.placeholder.com/600/eb42b0",
            "thumbnailUrl": "https://via.placeholder.com/150/eb42b0"
        },
        {
            "albumId": 21,
            "id": 1046,
            "title": "amet deserunt voluptatibus dignissimos accusantium quia culpa consectetur laudantium",
            "url": "https://via.placeholder.com/600/ff8071",
            "thumbnailUrl": "https://via.placeholder.com/150/ff8071"
        },
        {
            "albumId": 21,
            "id": 1047,
            "title": "accusamus quidem rerum",
            "url": "https://via.placeholder.com/600/d3d58e",
            "thumbnailUrl": "https://via.placeholder.com/150/d3d58e"
        },
        {
            "albumId": 21,
            "id": 1048,
            "title": "reiciendis quia aut consequatur excepturi",
            "url": "https://via.placeholder.com/600/69a818",
            "thumbnailUrl": "https://via.placeholder.com/150/69a818"
        },
        {
            "albumId": 21,
            "id": 1049,
            "title": "deserunt aut ut accusamus dolores adipisci laborum dolor ex",
            "url": "https://via.placeholder.com/600/91b6c3",
            "thumbnailUrl": "https://via.placeholder.com/150/91b6c3"
        },
        {
            "albumId": 21,
            "id": 1050,
            "title": "asperiores qui aut ab odit facilis excepturi dolorum a",
            "url": "https://via.placeholder.com/600/da126",
            "thumbnailUrl": "https://via.placeholder.com/150/da126"
        }
    ]

    //return array.slice(index, index + amount);
    return pics[index]
}

module.exports.getPictureByAlbumId = getPictureByAlbumId;
