import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query GetAllBooks{
        allBooks{
            id
            title
        }
    }
`

export const ADD_BOOK = gql`
    mutation CREATE($title: String!, $author: String! ){
        createBook(title: $title, author: $author ){
            title
            author
        }
}
`