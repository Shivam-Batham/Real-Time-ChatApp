import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-hJeDqP9kaqp7Z_m_IgFZr9G6xl4lyps",
  authDomain: "reactchatapp-f46db.firebaseapp.com",
  databaseURL: "https://reactchatapp-f46db-default-rtdb.firebaseio.com",
  projectId: "reactchatapp-f46db",
  storageBucket: "reactchatapp-f46db.appspot.com",
  messagingSenderId: "1027691711489",
  appId: "1:1027691711489:web:26184a990a4560c6364400",
  measurementId: "G-ZSG10ECKM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
