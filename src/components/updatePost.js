import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { UPDATE_POST } from '../graphql/updatePost';

const UpdatePost = () => {

  const [id, setID] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()



  const [updatePost, { loading, data, error }] = useMutation(UPDATE_POST, {
    variables: {
      id: id,
      title: title,
      body: body
    }
  })

  const handleupdate = (e) => {
    e.preventDefault()
    updatePost()
  }

  if(loading) return <h1>Loading</h1>
  if(error) console.log(Error);
  if(data) console.log("updated data",data);

  return ( 
    <>
      <input type="text" placeholder="Enter id for Update" onChange={e=>setID(e.target.value)}></input>
      <input type="text" placeholder="Enter Title for Update" onChange={e=>setTitle(e.target.value)}></input>
      <input type="text" placeholder="Enter Body for Update" onChange={e=>setBody(e.target.value)}></input>
      <button onClick={handleupdate}>Update Post</button>

    </>
   );
}
 
export default UpdatePost;