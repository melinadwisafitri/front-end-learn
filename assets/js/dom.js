const BOOK_LIST_COMP = 'book-list-comp';
const BOOK_LIST_UNCOP = 'book-list-uncomp';

const ID_STORAGE = 'id-storage';

function addDataBooks(){
    const uncompleteReading = document.getElementById(BOOK_LIST_UNCOP);
    const completeReading = document.getElementById(BOOK_LIST_COMP);

    const inTitle = document.getElementById('input-title').value;
    const inAuthor = document.getElementById('input-author').value;
    const inYear = document.getElementById('input-year').value;
    const inNumPage = document.getElementById('input-number-page').value;
    const inDesc = document.getElementById('input-desc').value;
    const inCompleteCheck = document.getElementById('input-complete').checked;

    const text = 'Number of Pages: '

    const textPages = text + inNumPage;

    console.log('title ' + inTitle);
    console.log('years ' + inYear);

    const bookToObject = changeDataToObject(inTitle, inAuthor,
        inYear, inNumPage, inDesc, inCompleteCheck);
    const addReadDataBooks = createDatasetBook(
        inTitle, inAuthor, inYear, textPages, inDesc, 
        inCompleteCheck
    );

    addReadDataBooks[ID_STORAGE] == bookToObject.id;
    readBook.push(bookToObject);

    uncompleteReading.append(addReadDataBooks);
    if (inCompleteCheck){
        completeReading.append(addReadDataBooks);
        changeData();
    }else{
        uncompleteReading.append(addReadDataBooks);
        changeData();
    }

}

function createDatasetBook(in_title, in_author, in_years, in_page_number, 
    in_description, completeOrnot){
    const addtitle = document.createElement('h2');
    const addAuthor = document.createElement('p');
    const addYears = document.createElement('p');
    const addPage = document.createElement('p')
    const addDescription = document.createElement('p');
    const line = document.createElement('hr')

    const divContent = document.createElement('div');
    const divContent1 = document.createElement('div');
    addtitle.classList.add('input-title');
    addAuthor.classList.add('input-author');
    addYears.classList.add('input-year');
    addPage.classList.add('input-pages');
    addDescription.classList.add('input-description');

    divContent.classList.add('inputs');
    divContent1.classList.add('item-btn','shadow');

    addtitle.innerText =  in_title;
    addAuthor.innerText = in_author;
    addYears.innerText = in_years;
    addPage.innerText = in_page_number;
    addDescription.innerText = in_description;

    
    divContent.append(addtitle, line, addAuthor, 
        addYears, addPage, addDescription);
    divContent1.append(divContent);

    if(completeOrnot){
        divContent1.append(addBtnComplete(), addBtnDelete());
    }else{
        divContent1.append(addBtnUncomplete(), addBtnDelete());
    };

    return divContent1;
}

function addButtonInList(btn, eventListener){
    const addButton = document.createElement('button');
    addButton.classList.add(btn);
    addButton.addEventListener('click', function(e){
        eventListener(e);
    })

    return addButton;
}


function addBtnComplete(){
    return addButtonInList('btn-unread', function(e){
        changeUncomplete(e.target.parentElement);
    })
}

function addBtnUncomplete(){
    return addButtonInList('btn-read', function(e){
        changeComplete(e.target.parentElement);
    })
}

function addBtnDelete(){
    return addBtnDeleteAction('btn-delete', function(e){
        deleteDataRead(e.target.parentElement)
    });
}

function changeComplete(taskElement){
    const title = taskElement.querySelector('.input-title').innerText;
    const author = taskElement.querySelector('.input-author').innerText;
    const year = taskElement.querySelector('.input-year').innerText;
    const description = taskElement.querySelector('.input-description').innerText;
    const pageNumber = taskElement.querySelector('.input-pages').innerText;

    const completeReading = document.getElementById(BOOK_LIST_COMP);
    
    const reads = createDatasetBook(title, author, year, pageNumber, 
        description, true);

    const changeBook = idBook(taskElement[ID_STORAGE]);
    changeBook.completeOrnot = true;

    reads[ID_STORAGE] = changeBook.id;
    completeReading.append(reads);
    taskElement.remove();

    changeData();
    
}

function changeUncomplete(taskElement){
    const in_title = taskElement.querySelector('.input-title').innerText;
    const in_author = taskElement.querySelector('.input-author').innerText;
    const in_page_number = taskElement.querySelector('.input-pages').innerText;
    const in_description = taskElement.querySelector('.input-description').innerText;
    const in_year = taskElement.querySelector('.input-year').innerText;

    const unCompleteReading = document.getElementById(BOOK_LIST_UNCOP);

    const unRead = createDatasetBook(in_title, in_author, in_year, in_page_number,
        in_description, false);
    
    const changeBook = idBook(taskElement[ID_STORAGE]);
    changeBook.completeOrnot = false;
    unRead[ID_STORAGE] = changeBook.id;

    unCompleteReading.append(unRead);
    taskElement.remove();
    changeData();
}

function addBtnDeleteAction(btn, event){
    const addBtn = document.createElement('button');
    addBtn.classList.add(btn)
    addBtn.addEventListener('click', function(e){
        let alerts = confirm('Do you really delete the item?');
        if(alerts == true){
            changeData();
            event(e);
            console.log('delete the item successfully')
        }else{
            console.log('not delete')
        }
    });
    return addBtn;
}

function deleteDataRead(taskElement){
    const loc = idBook(taskElement[ID_STORAGE]);

    readBook.splice(loc, 1);
    taskElement.remove();
    changeData();
}


function refresh(){
    const uncompleteReading = document.getElementById(BOOK_LIST_UNCOP);

    let completeReading = document.getElementById(BOOK_LIST_COMP);
    for (book of readBook){
        const read = createDatasetBook(book.title, 
            book.author, book.year, book.pageNumber, book.description,
            book.completeOrnot);
        read[ID_STORAGE] = book.id;
        if(book.completeOrnot){
            completeReading.append(read);
        }else{
            uncompleteReading.append(read);
        }
    }
}

function createSearch(titleBook){
    const div = document.createElement('div')
    div.classList.add('earch');

    for (let b of titleBook){
        const in_title = document.createElement('h2');
        const in_author = document.createElement('p');
        const in_year = document.createElement('p');
        const in_desc = document.createElement('p');

        in_title.innerText = b.title;
        in_author.innerText = b.author;
        in_year.innerText = b.year;
        in_desc.innerText = b.description;

        const div1 = document.createElement('div');
        div1.classList.add('search-data');

        div.append(div1);
        div1.append(in_title, in_author, in_year, in_desc);
    }
    return div;
    
}

function seacrhBtn(){
    const inputBtn = document.getElementById('search-div');
    const input = document.getElementById('search-input').value;
    const inputLower = input.toLowerCase();

    const localStoragesItem = localStorage.getItem(KEY);
    let json = JSON.parse(localStoragesItem);
    console.log(json)
    const filter = json.filter(item => item.title.toLowerCase() == inputLower);

    if(filter.length){
        const booksName = createSearch(filter);
        inputBtn.append(booksName)
        console.log('found item')
    }else{
        console.log('not found')
        alert('not found title');
        inputBtn.remove()
    }

}