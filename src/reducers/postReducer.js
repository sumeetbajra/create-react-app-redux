import * as Api from '../services/postApi';

const GET_ALL_POSTS         = 'post/GET_ALL_POSTS';
const GET_ALL_POSTS_SUCCESS = 'post/GET_ALL_POSTS_SUCCESS';
const GET_ALL_POSTS_FAIL    = 'post/GET_ALL_POSTS_FAIL';

const initialState = {
  data: []
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        data: action.result
      }

    default:
      return { ...state };
  }
}

export function getAllPosts() {
  return {
    types: [GET_ALL_POSTS, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL],
    promise: Api.getAllPosts
  }
}