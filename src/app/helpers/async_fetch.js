export default async function asyncFetch(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();

    return results;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}