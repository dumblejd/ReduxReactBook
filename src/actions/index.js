export function selectBook(book){
    //console.log('selected: ',book.title);

    //it needs to return the book info
    return{
        type: 'BOOK_SKELECTED' ,  //String for now for ease but will change
        payload: book
    };
}