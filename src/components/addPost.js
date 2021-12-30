import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { ADD_POST } from '../graphql/addPost';

const AddPost = () => {

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const [addPost, { loading, data, error }] = useMutation(ADD_POST, {
      variables: {
        title: title,
        body: body
      }
  })

  const handleAdd = (e) => {
    e.preventDefault()
    addPost()
  }

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error);
  if(data) console.log(data);

  return ( 
    <>
      <input type="text" placeholder="Enter Title" onChange={e=>setTitle(e.target.value)}></input>
      <input type="text" placeholder="Enter Body" onChange={e=>setBody(e.target.value)}></input>
      <button onClick={handleAdd}>Add Post</button><br/>

    </>
   );
}
 
export default AddPost;