const KEY = "READ_BOOK_APP";

let readBook = [];

function storageExt(){
    if(typeof(Storage) === undefined){

        alert("Browser kamu tidak mendukung local storage maupun session storage");
        return false;
    }
    return true;
}

function getData(){
    const getDataStorage = localStorage.getItem(KEY);
    let jsonData = JSON.parse(getDataStorage);
    if(jsonData !== null){
        readBook = jsonData;
    
    
    document.dispatchEvent(new Event("ondataloaded"));
    }
}

function createDatabase(){
    const stringJSON = JSON.stringify(readBook);

    localStorage.setItem(KEY, stringJSON);
    document.dispatchEvent(new Event("ondatasaved"));
}

function changeData(){
    if(storageExt()){
        createDatabase();
    }
}

function changeDataToObject(title, author, year, pageNumber, description, completeOrnot){
    return {
        id: +new Date(), 
        title, author,
        year, pageNumber, 
        description, 
        completeOrnot
    };
}

function idBook(id){
    
    for(let book of readBook){
        if(book.id === id)
            return book;
    }
    return null;
}

function index(id){
    let indexs = 0;

    for(let book of readBook){
        if(book.id === id)
            return indexs;

        indexs++;
    }
    return -1;
}
