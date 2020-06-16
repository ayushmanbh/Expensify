import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

export { firebase, db as default }

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// db.ref('expenses').once('value').then((snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// db.ref('expenses').push({
//   description: 'gas',
//   note: '',
//   amount: 109500,
//   createdAt: 973737333
// })

// db.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109870,
//   createdAt: 9737363633
// })

// db.ref('location/city').
//   once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// db.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job} at ${val.age}`)
// }, (e) => {
//   console.log('Error', e)
// })

// db.ref().set({
//   name: 'Andrew mead',
//   age: 26,
//   isSingle: true,
//   location: {
//     city: 'Agra',
//     country: 'India'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('save failed', e)
// })

// db.ref('attributes').set({
//   height: 175,
//   weight: 62
// }).then(() => {
//   console.log('data is updated')
// }).catch((e) => {
//   console.log('update failed', e)
// })

// db.ref().update({
//   isSingle: null,
//   job: 'Manager',
//   'location/city': 'Boston'
// })

// db.ref().remove().then(() => {
//   console.log('Removed')
// }).catch((e) => {
//   console.log('Error', e)
// })