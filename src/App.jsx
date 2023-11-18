import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import User from "./pages/User";
import Classes from "./pages/Classes";
import GroupReservations from "./pages/GroupReservations";
import IndividualReservations from "./pages/IndividualReservation";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="flex flex-col h-full">
                <div>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<User />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route
                            path="/reservation-group"
                            element={<GroupReservations />}
                        />
                        <Route
                            path="/reservation-individual"
                            element={<IndividualReservations />}
                        />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
                {/* <div>
                    <Footer />
                </div> */}
            </div>
        </Router>
    );
}

export default App;
