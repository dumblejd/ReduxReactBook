import React,{Component} from 'react';
import {connect} from 'react-redux'
import  {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends  Component{
    renderList(){
        console.log(this);   //why 'this' can be used properly  without bind????????????
        return this.props.books.map((book)=>{
            return (
                <li
                    key={book.title}
                    onClick={()=>selectBook(book)}// why bother use this.props.selectBook(book)??? and why this.props can have selectBook?????
                    className="list-group-item" >
                    {book.title}
                </li>
            );
        });
    }
    render(){
        return(
            <ul className="list-gtoup col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToPorps(state){
    return {
        books:state.books
    }
}

//Anything return from this function will ends up as props on the booklist container
function mapDispatchToProps(dispatch){
    //bind is doing when the selectBook is called, the result of it will dispatch it to all reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}
//promote booklist from a component to a container - it needs to know about this new dispatch method,selectBook. Make it available as a prop
export default connect(mapStateToPorps,mapDispatchToProps)(BookList);