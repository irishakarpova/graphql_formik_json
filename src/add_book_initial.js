import { useMutation, gql } from "@apollo/client";
import { useState } from 'react'

const ADD_BOOK=gql`
    mutation CREATE($title: String!, $author: String! ){
        createBook(title: $title, author: $author ){
            title
            author
        }
}
`
export default function AddBook(){

    const [addBook] = useMutation(ADD_BOOK)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({ variables: { 
            title: title,
            author: author
         } });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={author}
                onChange={e => (setAuthor(e.target.value))}
                type='text' />
            <input 
                value={title}
                onChange={e => (setTitle(e.target.value))}
                type='text' />
            <button type="submit">Add Book</button>
        </form>
    )
}