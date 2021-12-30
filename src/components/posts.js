import React, {useState} from 'react';
import {GET_ALL_POSTS} from '../graphql/post'
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_POST } from '../graphql/deletePost';


const Posts = () => {

  const { loading, data, error} = useQuery(
    GET_ALL_POSTS
  )
  
  const [deletePost, {deleteLoading, deleteError, deleteData}] = useMutation(DELETE_POST)

  const handleDelete = (id) => {
    deletePost({
      variables: { id: id }
    });
  };

  if(deleteLoading) return <h1>Loading delete</h1>
  if(deleteError) console.log(deleteError);
  if(deleteData) console.log(deleteData);  

  if(loading) return <h1>Loading</h1>
  // if(error) console.log(error);
  if(data) console.log(data)

  return ( 
    <>
      {data.posts.data.map( (post) => (
        <ul key={post.id}>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li><button onClick={() => handleDelete(post.id)}>Delete</button></li>

        </ul>
      ))}
    </>
   );
}
 
export default Posts;