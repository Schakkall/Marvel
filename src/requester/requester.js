const axios = require('axios');

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};


export async function getData(url) {
  return await axios.get(url);
}