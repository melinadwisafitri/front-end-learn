document.addEventListener('DOMContentLoaded', function(){
    
    const fromData = document.getElementById('from-book-data');
    const btnSearch = document.getElementById('search-button');
    
    fromData.addEventListener('submit', function(event){
        
        event.preventDefault();

        addDataBooks();
        
        document.getElementById('input-title').value = '';
        document.getElementById('input-author').value = '';
        document.getElementById("input-year").value ='';
        document.getElementById('input-number-page').value = '';
        document.getElementById('input-desc').value = '';
        document.getElementById('input-complete').checked = false;
    });

    if(storageExt()){
        getData();
    }

    btnSearch.addEventListener('click', function(e){
        e.preventDefault();
        seacrhBtn();

        document.getElementById('search-input').value = '';
    })

});

document.addEventListener('ondatasaved', () =>{
    console.log('Data has been succesfully save')
});

document.addEventListener('ondataloaded', () =>{
    refresh();
})