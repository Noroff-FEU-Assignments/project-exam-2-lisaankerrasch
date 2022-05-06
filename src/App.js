import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Nav from "./constants/Nav";
// import ContactPage from "./components/contact/ContactPage";
// import LoginPage from "./components/login/LoginPage";
// import AccommodationPage from "./components/accommodation/AccommodationPage";
// import AccommodationDetail from "./components/accommodation/AccommodationDetail";
// import EnquirePage from "./components/enquiries/EnquirePage";
import Footer from "./constants/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        {/* <Route path="/contact" exact element={<ContactPage />}></Route>
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route
          path="/accommodation"
          exact
          element={<AccommodationPage />}
        ></Route>
        <Route path="/enquire" exact element={<EnquirePage />}></Route>
        <Route
          path="/accommodation/:id"
          exact
          element={<AccommodationDetail />}
        ></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
