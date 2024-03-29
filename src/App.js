import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Nav from "./components/layout/Nav";
import ContactPage from "./components/contact/ContactPage";
import LoginPage from "./components/login/LoginPage";
import AccommodationPage from "./components/accommodation/AccommodationPage";
// import AccommodationDetails from "./components/accommodation/AccommodationDetails";
import EnquiryPage from "./components/enquiries/EnquiryPage";
import AdminPage from "./components/admin/AdminPage";
import ActivityPage from "./components/activities/ActivityPage";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import DetailPage from "./components/accommodation/DetailPage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
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
            element={<DetailPage />}
          ></Route>
          <Route path="/contact" exact element={<ContactPage />}></Route>
          <Route path="/login" exact element={<LoginPage />}></Route>
          <Route path="/admin" exact element={<AdminPage />}></Route>
          <Route path="/enquiries/:id" exact element={<EnquiryPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
