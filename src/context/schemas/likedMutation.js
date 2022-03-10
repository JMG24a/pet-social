import { gql, useMutation } from '@apollo/client';

const LIKE = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`

export const useLikeMuation = () =>{
    const [likedMutation] = useMutation(LIKE)

    return { likedMutation }
}