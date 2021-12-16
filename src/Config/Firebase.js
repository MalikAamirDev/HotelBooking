// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

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
// const analytics = getAnalytics(app);
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

            dispatch({
              type: "LOGIN",
              userData: userData,
            });
            if (uid === "ZCJOXpL3puN64Gv7zF07JPTZDEX2") {
              navigate("/deshboard");
              setloader(false);
            } else {
              setNotify({
                isOpen: true,
                message: "Loggedin Successfull",
                type: "error",
              });
              navigate("/");
              setloader(false);
            }
          })
          .catch((err) => {
            // console.log(err.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
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

        dispatch({
          type: "SIGNUPDATA",
          uid: uid,
          email: user.email,
        });
        navigate("/");
        setLoader(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setLoader(false);
        setNotify({
          isOpen: true,
          message: `${[errorCode]} please check email & password`,
          type: "error",
        });
      });
  };
};

let Booking = (obj, navigate, setLoader, setNotify) => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const uid = user.uid;
        setLoader(true);
        obj.uid = uid;
        setDoc(doc(db, "Bookings", uid), obj);
        dispatch({
          type: "BOOKINGDATA",
          uid: uid,
          bookingData: obj,
          bookingStatus: true,
        });
        setNotify({
          isOpen: true,
          message: "Submited Successfull",
          type: "success",
        });
        navigate("/profile");
      } else {
        alert("Error");
        setNotify({
          isOpen: true,
          message: "please fill all fields",
          type: "error",
        });
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
        dispatch({
          type: "LISTINGDATA",
          uid: uid,
          bookingData: obj,
        });
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
    .then(() => {})
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
