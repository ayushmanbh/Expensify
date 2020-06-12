import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDnXTtLfnoCezLtFCZJW4fSP0uTBvy4vZ0",
  authDomain: "expensify-23e69.firebaseapp.com",
  databaseURL: "https://expensify-23e69.firebaseio.com",
  projectId: "expensify-23e69",
  storageBucket: "expensify-23e69.appspot.com",
  messagingSenderId: "165085635536",
  appId: "1:165085635536:web:6a679b45c8b3e6a2020fd5"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()
db.ref().set({
  name: 'Andrew mead',
  age: 26,
  isSingle: true,
  location: {
    city: 'india',
    country: 'Asia'
  }
})

db.ref('age').set(27)
db.ref('location/city').set('Agra')
db.ref('location/country').set('India')
db.ref('attributes').set({
  height: 175,
  weight: 62
})