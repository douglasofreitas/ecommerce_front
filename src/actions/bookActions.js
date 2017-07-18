import Axios from 'axios';
import * as actionTypes from './actionTypes';

// API URL
const apiUrlBooks = 'http://595d8a5d67ae210011cf3e68.mockapi.io/bookstore/books';
const apiUrlCarts = 'http://595d8a5d67ae210011cf3e68.mockapi.io/bookstore/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};
//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrlBooks)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
};
export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrlBooks, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  }
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrlBooks + '/' +bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};


// Sync add to cart
export const addToCartSuccess = (item) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    item
  }
};
// Async add to cart
export const addToCart = (item) => {
  console.log('init add cart');
  return (dispatch) => {
    return Axios.post(apiUrlCarts, item)
      .then(response => {
        console.log('add cart', response.data);
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
};
// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get(apiUrlCarts)
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

//old method
export const createBookLocal = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_BOOK',
    // Payload
    book: book
  }
};
