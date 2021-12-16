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
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<ProtectedRoute currentUser={currentUser} />}>
              <Route path="/deshboard" element={<Deshboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/listings" element={<BookingListingForm />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
