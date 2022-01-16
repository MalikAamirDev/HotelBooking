import "./App.css";
import AppRouter from "./Config/router/router";
import { auth, onAuthStateChanged, getDoc, doc, db } from "./Config/Firebase";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setcurrentUser] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const checkUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const uid = user.uid;
        const docRef = doc(db, "Users", uid);
        getDoc(docRef)
          .then((singleDoc) => {
            let userData = [singleDoc.id, singleDoc.data()];
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
      }
    });
  };

  useEffect(() => {
    checkUserStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loader ? (
        <>
          <div className="loaderDiv">
            <div className="loader">Loading...</div>
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
