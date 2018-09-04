const API_ROOT = 'http://localhost:3001/api/v1'

const createUser = (username, password) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password })
  }).then(res => res.json())
}
export default createUser
