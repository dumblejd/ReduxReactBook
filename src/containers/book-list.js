import React,{Component} from 'react';
import {connect} from 'react-redux'

class BookList extends  Component{
    renderList(){
        console.log(this);   //why 'this' can be used properly  without bind????????????
        return this.props.books.map((book)=>{
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToPorps)(BookList);