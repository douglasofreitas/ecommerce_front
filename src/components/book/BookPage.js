import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import BookForm from './BookForm';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);

    //this.submitBook = this.submitBook.bind();
  }
  
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(NextProps) {
    console.log('componentWillReceiveProps', NextProps);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  submitBook(input){
    
    this.props.actions.createBook(input);
  }

  render(){
    console.log('book page', this.props.books);
    let titleInput;
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) => <tr key={i}>
              <td>{b.title}</td>
              <td><Link to={`/books/${b.id}`}>View</Link></td>
            </tr> )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    actions: bindActionCreators(bookActions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Book);
