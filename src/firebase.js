import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCrHk-cCsZqAO5QRNVecKiO36iQGAhDOfY',
  authDomain: 'portfolios-ellisarn.firebaseapp.com',
  projectId: 'portfolios-ellisarn',
  storageBucket: 'portfolios-ellisarn.appspot.com',
  messagingSenderId: '800764911155',
  appId: '1:800764911155:web:57e3001bb44e92463c0d46',
  measurementId: 'G-BBYCP7XN06',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
export const db = getFirestore(app)
