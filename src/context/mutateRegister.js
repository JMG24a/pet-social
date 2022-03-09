import { gql } from '@apollo/client';

export const Registro = gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`
