import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = import.meta.env.VITE_EMAIL
const password = import.meta.env.VITE_PASSWORD

function auth() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
}

export default auth
