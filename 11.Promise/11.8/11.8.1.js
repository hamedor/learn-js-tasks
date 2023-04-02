const fetch = require("node-fetch");

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new Error(response.status);
    }
}
  
loadJson('https://stackoverflow.com')
    .catch(console.log);