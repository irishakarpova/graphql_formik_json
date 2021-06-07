import { useQuery, gql } from "@apollo/client"

export const GET_BOOKS = gql`
    query GetAllBooks{
        allBooks{
            id
            title
        }
    }
`

export default function AllBooks({onSelect}){
    const {loading, data, error} = useQuery(GET_BOOKS)
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    return(
        data.allBooks.map(book => {
            return (
            <div key={book.id}>
                <h1>{book.title}</h1>
                <button onClick={() => onSelect(book.id)}>click</button>
            </div>)
        })
    )


}