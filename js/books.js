const json = {
    "books":
    [{
        "isbn":"9780099590088",
        "title": "Sapiens",
        "author":"Yuval Noah Harari",
    },
    {
        "isbn":"9780062464347",
        "title": "Homo Deus",
        "author":"Yuval Noah Harari",
    },
    {
        "isbn":"9781784708283",
        "title": "21 Lessons For the 21st Century",
        "author":"Yuval Noah Harari",
    },
    {
        "isbn":"9781781251492",
        "title": "Obstacle Is The Way",
        "author":"Ryan Holiday",
    },
    {
        "isbn":"9780525538585",
        "title": "Stillness Is The Key",
        "author":"Ryan Holiday",
    },
    {
        "isbn":"9781781257029",
        "title": "Ego Is The Enemy",
        "author":"Yuval Noah Harari",
    },
    {
        "isbn":"9780525541875",
        "title": "Lives of the Stoics",
        "author":"Ryan Holiday",
    },
    {
        "isbn":"9783462037043",
        "title": "Limit",
        "author":"Frank Schätzing",
    },
    {
        "isbn":"9783462050844",
        "title": "Die Tyrannei des Schmetterlings",
        "author":"Frank Schätzing",
    },
    {
        "isbn":"9783462033748",
        "title": "Der Schwarm",
        "author":"Frank Schätzing",
    }]
};

function getCoverURL(isbn){
    return `http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
}

function getBooks(){
    return json;
}