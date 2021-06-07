import { useMutation } from "@apollo/client";
import { Formik, Field, Form } from "formik";
import {ADD_BOOK, GET_BOOKS} from './queries'

export default function AddBook(){

    const [createBook] = useMutation(ADD_BOOK, {

        update(cache, {data}){
          const books = cache.readQuery({
            query:  GET_BOOKS
          })

          cache.writeQuery({
            query:  GET_BOOKS,
            data: {
              allBooks: [...books.allBooks, data.createBook]
            }
          })
        }
      })
      const handleSubmit =  ( values, actions) => {
        createBook({variables: values});
        actions.setSubmitting(false);
        actions.resetForm()
      }

    return(
        <Formik 
            initialValues={{author: '', title:''}}
            onSubmit={(values, action) => handleSubmit(values, action)}
            
        >
            <Form >
                <Field 
                    name= "author"
                    type='text' />
                <Field 
                    name="title"
                    type='text' />
                <button type="submit">Add Book</button>
            </Form>
        </Formik>
    )
}