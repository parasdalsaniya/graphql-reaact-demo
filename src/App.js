import React from 'react';
import AddPost from './components/addPost';
import Posts from './components/posts';
import UpdatePost from './components/updatePost';


const App = () => {
  
  return (
    <>
      <h1>Graphql</h1>
      <AddPost />
      <UpdatePost />
      <Posts />
    </>
  );
}
 
export default App;