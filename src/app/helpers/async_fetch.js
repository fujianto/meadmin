import fetch from 'isomorphic-fetch';

export default async function asyncFetch(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();

    if (response.status === 200) {
      return results;
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}