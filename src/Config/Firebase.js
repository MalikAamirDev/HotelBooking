// Import the functions you need from the SDKs you need
import ErrorAlert from "../assets/ErrorAlert";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc, // For getting single document data by his id
  getDocs, // get collection all documents
  addDoc, // add data to firebase
  deleteDoc,
  doc, // delete data
  updateDoc, // for updating the exsisting document
  setDoc, // for adding new data to an existing collection
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIPg-KgJzwQH-SsBWOoSh0mvhyJaYaR8",
  authDomain: "jpakhackathon.firebaseapp.com",
  projectId: "jpakhackathon",
  storageBucket: "jpakhackathon.appspot.com",
  messagingSenderId: "739748168716",
  appId: "1:739748168716:web:4e21fbf8610cdff0dd5a29",
  measurementId: "G-TYD9RCTBMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

let userLogin = (obj, navigate, setloader, setNotify) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        let uid = user.uid;
        const docRef = doc(db, "Users", uid);
        getDoc(docRef)
          .then((singleDoc) => {
            let userData = [singleDoc.id, singleDoc.data()];

            console.log(userData);
            dispatch({
              type: "LOGIN",
              userData: userData,
            });
            if (uid === "ZCJOXpL3puN64Gv7zF07JPTZDEX2") {
              console.log("admin LOged in", uid);
              navigate("/deshboard");
              setloader(false);
            } else {
              setNotify({
                isOpen: true,
                message: "Loggedin Successfull",
                type: "error",
              });
              console.log("user LOged in", uid);
              navigate("/");
              setloader(false);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setNotify({
          isOpen: true,
          message: `${[errorCode]} please check email & password`,
          type: "error",
        });
        setloader(false);
      });
  };
};
let signUp = (obj, navigate, setLoader, setNotify) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        let uid = user.uid;
        obj.uid = uid;
        setDoc(doc(db, "Users", uid), obj);

        console.log(uid, user);
        dispatch({
          type: "SIGNUPDATA",
          uid: uid,
          email: user.email,
        });
        console.log("New Data Added");
        navigate("/");
        setLoader(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
};

let Booking = (obj, navigate, setLoader, setNotify) => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const uid = user.uid;
        obj.uid = uid;
        setDoc(doc(db, "Bookings", uid), obj);

        console.log(uid, user);
        dispatch({
          type: "BOOKINGDATA",
          uid: uid,
          bookingData: obj,
        });
        setNotify({
          isOpen: true,
          message: "Submited Successfull",
          type: "error",
        });
        console.log("New Data Added");
        navigate("/profile");
      } else {
        alert("Error");
      }
    });
  };
};
let ListingData = (obj, navigate, setLoader, setNotify) => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const uid = user.uid;
        obj.uid = uid;
        setDoc(doc(db, "Hotels", uid), obj);

        console.log(uid, user);
        dispatch({
          type: "LISTINGDATA",
          uid: uid,
          bookingData: obj,
        });
        console.log("New Data Added");
        navigate("/profile");
      } else {
        alert("Error");
      }
    });
  };
};

let userSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sign Out Successful");
    })
    .catch((error) => {});
};

export {
  userLogin,
  signUp,
  userSignOut,
  auth,
  db,
  Booking,
  doc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  ListingData,
};
