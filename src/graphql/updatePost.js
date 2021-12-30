import { gql } from "@apollo/client";


export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(
      id: $id
      input: { 
        title: $title, 
        body: $body 
    }), {
      id
      title
      body
    }
  }
`; 