const URL = 'http://localhost:4040';
function fetchApi() {
  return fetch(`${URL}/contacts`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}
const apiFetch = { fetchApi };
export default apiFetch;
