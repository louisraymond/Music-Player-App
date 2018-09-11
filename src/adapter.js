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

const getCurrentSongList = (token) => {
  return fetch(`${API_ROOT}/song_list `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(res => res.json())
}

const loginUser = (username, password) => {
  return fetch(`${API_ROOT}/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password })
    }).then(res => res.json())
}

const postSong = (song) => {
  return fetch(`${API_ROOT}/songs/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: song.url,
      name: song.name,
      user_id: song.user_id})
  }).then(res => res.json())
}

const getCurrentUser = (token) => {
  return fetch(`${API_ROOT}/current_user `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }).then(res => res.json())
}

export {createUser, postSong, loginUser, getCurrentUser, getCurrentSongList }
