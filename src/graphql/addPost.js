import { gql, useMutation } from "@apollo/client";


export const ADD_POST = gql`
  mutation createPost($title: String!, $body: String!){
    createPost(input: { 
      title: $title, 
      body: $body 
    }), {
      id
      title
      body
    }
  }
`;