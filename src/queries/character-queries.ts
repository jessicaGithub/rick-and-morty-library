import gql from "graphql-tag";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: {
      name: $name
    }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        origin {
          id
        }
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      origin {
        id
      }
      image
    }
  }
`;
