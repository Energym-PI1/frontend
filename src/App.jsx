import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import Classes from "./pages/Classes";
import GroupReservations from "./pages/GroupReservations";
import IndividualReservations from "./pages/IndividualReservation";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClassInfo from "./pages/ClassInfo";

function App() {
    const shouldRedirect = true;
    return (
        <Router>
            <div className="flex flex-col h-full">
                <Routes>
                    <Route
                        path="/"
                        element={
                            shouldRedirect ? (
                                <Navigate replace to="/login" />
                            ) : (
                                <Login />
                            )
                        }
                    />
                    <Route path="/user" element={<User />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/class-info" element={<ClassInfo />} />
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
        </Router>
    );
}

export default App;
