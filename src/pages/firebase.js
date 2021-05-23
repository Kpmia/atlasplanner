
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyABR9I-8WnPTO9f_Kb0wmP32U6ezQcT_rw",
  authDomain: "atlasplanner-e530e.firebaseapp.com",
  databaseURL: "https://atlasplanner-e530e-default-rtdb.firebaseio.com",
  projectId: "atlasplanner-e530e",
  storageBucket: "atlasplanner-e530e.appspot.com",
  messagingSenderId: "466708251492",
  appId: "1:466708251492:web:449bf0c4e036f351fc3071"
};

export const db = firebase.initializeApp(firebaseConfig);