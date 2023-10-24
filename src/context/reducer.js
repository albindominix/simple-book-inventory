const reducer = (state, action) => {

    switch(action.type) {
  
      // Handle adding a new book
      case 'ADD_BOOK':
  
        // Check if book already exists by matching it with ISBN
        let isBookPresent = false; 
        for(let i = 0; i < state.books.length; i++) {
          if(action.payload.isbn === state.books[i].isbn) {
            isBookPresent = true;
            alert("Book already exists");
            break; 
          }
        }
  
        // If book exists, update quantity
        if(isBookPresent) {
          
          // Map through books and update quantity 
          let updatedQuatity = state.books.map((item, index) => {
            
            // Find match and return updated quantity
            if(item.isbn === action.payload.isbn) {
              return {...item, quantity: Number(item.quantity) + Number(action.payload.quantity)}
            }
            
            // Otherwise just return book
            return item;
          });
  
          // Return state with updated books
          return {...state, books: updatedQuatity};
  
        // If its a new book, add to array  
        } 
        else {
          return {...state, books: [...state.books, action.payload]};
        }
  
      // Handle selling a book  
      case 'SELL_BOOK':
  
        // Map through books and reduce sold quantity
        let newState = state.books.map((item, index) => {
          if(item.isbn === action.payload.isbn) {
            return {...item, quantity: Number(item.quantity) - Number(action.payload.quantity)};
          }
          return item; 
        });
  
        // Return state with updated books
        return {...state, books: newState};
  
      // Default return original state
      default: 
        return state;
    }
  
  };
  
  export default reducer;