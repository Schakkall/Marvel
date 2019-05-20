import * as endpoints from './endpoints';

export const fetchData = async () => {
  try {
    const response = await fetch(endpoints.EXAMPLE_URI);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};