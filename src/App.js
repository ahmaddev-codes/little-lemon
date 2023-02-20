import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Specials from "./components/Specials";
import CustomersSay from "./components/CustomersSay";
import Chicago from "./components/Chicago";
import BookingPage from "./components/BookingPage";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/specials" element={<Specials />}></Route>
          <Route path="/testimonial" element={<CustomersSay />}></Route>
          <Route path="/about" element={<Chicago />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
