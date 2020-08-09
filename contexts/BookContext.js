import React,{createContext,useState} from 'react'


export const BookContext=createContext()

const BookContextProvider=(props)=>{
  const [books,setBooks]=useState([
    {title:'Book 1', author:'author 1', id:1},
    {title:'Book 2', author:'Author 2', id:2}
  ])

  const addBooks=(title,author)=>{
    setBooks([...books,{title,author,id:Math.random()*10}])
  }

  const removeBooks=(id)=>{
    setBooks(books.filter(book=>book.id!==id))
  }

  return(
    <BookContext.Provider value={{books,addBooks,removeBooks}}>
    {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider