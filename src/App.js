import "./App.css";
import AppRouter from "./Config/router/router";
import {
  auth,
  onAuthStateChanged,
  signOut,
  getDoc,
  doc,
  db,
} from "./Config/Firebase";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setcurrentUser] = useState(false);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  const checkUserStatus = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const uid = user.uid;
        // console.log(user);
        // get single document data
        const docRef = doc(db, "Users", uid); // doc id Reference
        getDoc(docRef)
          .then((singleDoc) => {
            let userData = [singleDoc.id, singleDoc.data()];
            console.log(userData);
            dispatch({
              type: "LOGIN",
              userData: userData,
            });
            setcurrentUser(true);
            setLoader(false);
            dispatch({
              type: "USERSTATUS",
              UserStatus: true,
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        setcurrentUser(false);
        setLoader(false);
        dispatch({
          type: "USERSTATUS",
          UserStatus: false,
        });
        console.log("User is sign out");
      }
    });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <div className="App">
      {loader ? (
        <>
          <div className="loaderDiv">
            <div class="loader">Loading...</div>
          </div>
        </>
      ) : (
        <>
          <AppRouter currentUser={currentUser} />
        </>
      )}
    </div>
  );
}

export default App;
