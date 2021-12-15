import {
  Home,
  Profile,
  Deshboard,
  Login,
  SignUp,
  BookingForm,
  BookingListingForm,
} from ".";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter({ currentUser }) {
  console.log(currentUser);
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<ProtectedRoute currentUser={currentUser} />}>
              <Route
                path="/deshboard"
                element={<Deshboard currentUser={currentUser} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/listings" element={<BookingListingForm />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login currentUser={currentUser} />}
            />
            <Route
              path="/signup"
              element={<SignUp currentUser={currentUser} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
