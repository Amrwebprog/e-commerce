import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDUP9o2nHDxcMjD8IMBlTayVFxtthE46hs',
  authDomain: 'e-commercy-f26f1.firebaseapp.com',
  projectId: 'e-commercy-f26f1',
  storageBucket: 'e-commercy-f26f1.appspot.com',
  messagingSenderId: '882760628747',
  appId: '1:882760628747:web:95be084566a6eac010a50e',
  measurementId: 'G-178CXJGK1M',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
