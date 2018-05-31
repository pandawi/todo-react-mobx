import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyDVwi_JVO3GDikj37iWghoDd2gBk6syNfk',
  authDomain: 'my-home-54742.firebaseapp.com',
  databaseURL: 'https://my-home-54742.firebaseio.com',
  projectId: 'my-home-54742',
  storageBucket: 'my-home-54742.appspot.com',
  messagingSenderId: '674095477081'
}

export default firebase.initializeApp(config)
