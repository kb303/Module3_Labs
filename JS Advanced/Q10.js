// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

//a) Write new version of this function using async/await
async function fetchURLData2(url) {
  let fetchPromise = fetch(url);
  let response = await fetchPromise;
  if (response.status === 200) {
    console.log(response.json);
    return response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

fetchURLData2("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

//(Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.
async function fetchURLData3(...urls) {
  let responses = urls.map((url) => fetch(url));
  let finalResponse = await Promise.all(responses);
  if (finalResponse.status === 200) {
    console.log(finalResponse.json);
    return finalResponse.json();
  } else {
    throw new Error(`Request failed with status ${finalResponse.status}`);
  }
}

fetchURLData3("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
