const Rebase = require('re-base')
const Firebase = require('firebase')

var config = {
  apiKey: "AIzaSyBcyTJT1o2K-aE9Hr9VtsaQKtohqsR-AFc",
  authDomain: "portifolio-bc59d.firebaseapp.com",
  databaseURL: "https://portifolio-bc59d.firebaseio.com",
  projectId: "portifolio-bc59d",
  storageBucket: "portifolio-bc59d.appspot.com",
  messagingSenderId: "124696401430"
};

  

  const app = Firebase.initializeApp(config)
  const firebaseconfig = Rebase.createClass(app.database())

export const storage = app.storage();
  export default firebaseconfig