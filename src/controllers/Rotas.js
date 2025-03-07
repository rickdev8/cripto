import axios from 'axios'

export async function postUser(user) {
    const response = await axios.post('http://localhost:3000/postUser', user)
    return response
}
