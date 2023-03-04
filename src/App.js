import { Route, Routes } from "react-router-dom";
import Footer from "./common/Footer";
import Contact from "./pages/contact/views/Contact";
import Events from "./pages/event/views/Events";
import Home from "./pages/home/views/Home";
import Laundry from "./pages/laundry/views/Laundry";
// import "./styles/bootstrap.min.css";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" index element={<Contact />} />
        <Route path="/laundry" index element={<Laundry />} />
        <Route path="/events" index element={<Events />} />
      </Routes>
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Laundry /> */}
      {/* <Events /> */}
      <Footer />
    </div>
  );
}

export default App;
