import { gql, useQuery } from "@apollo/client"

const GET_BOOK = gql`
    query GetBook($id: ID!){
        Book(id: $id){
            id
            title
        }
    }
`;
export default function Book({id}){
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: id },
      });
    
      if (loading) return <p>Loading</p>;;
      if (error) return <p>Error</p>;


    return(
       <p>{data.Book.title}</p>
    )
}