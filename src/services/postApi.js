import axios from 'axios';

export async function getAllPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch(error) {
    throw error;
  }
}