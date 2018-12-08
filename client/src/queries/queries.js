import { gql } from 'apollo-boost';


const getBooksQuery = gql`
 {
   books {
     name
     id
   }
 }`

 const getAuthorsQuery = gql`
 {
   authors {
       name
       id
   }
 }`

 //set variables as an argument to mutation then use when adding book
 const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre authorId: $authorId) {
      name
      id
    }
  }
 `

 const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
 `

 export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery}