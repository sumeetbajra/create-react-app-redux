import axios from 'axios';

export function getAllPosts() {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  });
}