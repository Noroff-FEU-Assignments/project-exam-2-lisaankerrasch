import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Nav from "./constants/Nav";
import ContactPage from "./components/contact/ContactPage";
import LoginPage from "./components/login/LoginPage";
import AccommodationPage from "./components/accommodation/AccommodationPage";
import AccommodationDetails from "./components/accommodation/AccommodationDetails";
// import EnquirePage from "./components/enquiries/EnquirePage";
import AdminPage from "./components/admin/AdminPage";
import ActivityPage from "./components/activities/ActivityPage";
import Footer from "./constants/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route
          path="/accommodation"
          exact
          element={<AccommodationPage />}
        ></Route>
        <Route path="/activities" exact element={<ActivityPage />}></Route>
        <Route
          path="/accommodation/details/:id"
          exact
          element={<AccommodationDetails />}
        ></Route>
        <Route path="/contact" exact element={<ContactPage />}></Route>
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route path="/admin" exact element={<AdminPage />}></Route>

        {/* <Route path="/enquire" exact element={<EnquirePage />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
