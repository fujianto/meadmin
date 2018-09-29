import fetch from 'isomorphic-fetch';

const request = {
  async_fetch: async (url) => {
    try {
      const response = await fetch(url);
      const results = await response.json();

      if (response.status === 200) {
        return results;
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
      
      return {
        message: error.message,
        error: true
      }
    }
  }
}

export  { request };  