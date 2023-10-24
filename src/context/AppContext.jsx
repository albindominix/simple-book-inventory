import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";


// Create context object 
const AppContext = createContext();

// Initial state for context
const initialState = {
  isLoading: false,
  isError: false,
  books: [] 
};

// Context provider component
const AppProvider = ({children}) => {

  // Initialize state and dispatch using reducer 
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action to add a book
  const addBook = (newBook) => {
    dispatch({type: 'ADD_BOOK', payload: newBook});
  }

  // Action to sell a book
  const sellBook = (book) => {
    dispatch({type: 'SELL_BOOK', payload: book});
  }


return(
  <AppContext.Provider value={{ ...state, addBook,sellBook }}>
    {children}
  </AppContext.Provider>)
};

 const useBookContext = ()=>{
    return useContext(AppContext)
}

export{AppProvider,useBookContext}