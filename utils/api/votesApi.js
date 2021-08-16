import fetchApi from "./fetchApi";

const mainRoute = "votes";
async function findAll() {
  try {
    console.log(`findAll`, findAll);
    const { data } = await fetchApi.get(mainRoute);
    return data;
    // const data = await fetch("/api/votes");
    // const json = data.json();
    // return json;
  } catch (error) {
    console.log(`findAll error`, error);
    return null;
  }
}
async function addVotes(id, type) {
  try {
    const { data } = await fetchApi.put(`${mainRoute}/${id}/${type}`);
    return data;
  } catch (error) {
    console.log(`addVotes error`, error);
    return null;
  }
}

const votesApi = { findAll, addVotes };
export default votesApi;
