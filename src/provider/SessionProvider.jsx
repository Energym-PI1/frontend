import axios from "axios";
import { createContext, useState } from "react"; // Import useContext
import PropTypes from "prop-types";

// Create the SessionContext if not already defined
export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [sessionData, setSessionData] = useState({
        userData: null,
        token: window.localStorage.getItem("jwtToken"),
    });

    const login = async (email, password) => {
        try {
            const response = await axios({
                method: "get",
                url: "https://energym-403700.uc.r.appspot.com/energym-api/login",
                data: {
                    id: "",
                    name: "",
                    email,
                    password,
                    telephone: "",
                    role: {
                        id: 1,
                        name: "ADMINISTRADOR",
                    },
                },
            });

            if (response.status === 200) {
                const userData = response;

                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("jwtToken", userData.jwtToken);

                setSessionData({
                    userData: userData,
                    token: userData.jwtToken,
                });
            } else {
                console.error("API request failed:", response);
            }
        } catch (error) {
            setSessionData({
                userData: null,
                token: window.localStorage.getItem("jwtToken"),
            });
            setError("Error in the entered data");
        }
    };

    return (
        <SessionContext.Provider
            value={{ login, sessionData, error, setError }}
        >
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node,
};

export default SessionProvider;
