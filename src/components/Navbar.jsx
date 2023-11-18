import { Link } from "react-router-dom";
import { LiaDumbbellSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="w-full h-20 flex justify-between items-center bg-transparent px-28 font-inter border-b-2 border-yellow">
            <div className="">
                <LiaDumbbellSolid className="h-14 w-14 text-blue-light" />
            </div>

            <div className="flex justify-end gap-10">
                <Link
                    to="/user"
                    className="hover:underline hover:underline-offset-4 hover:decoration-blue-light hover:decoration-2"
                >
                    Mis clases
                </Link>
                <Link
                    to="/classes"
                    className="hover:underline hover:underline-offset-4 hover:decoration-blue-light hover:decoration-2"
                >
                    Explorar clases
                </Link>

                <div
                    className={`relative inline-block text-left ${
                        isDropdownOpen ? "block" : ""
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                >
                    <button
                        className="hover:underline hover:underline-offset-4 hover:decoration-blue-light hover:decoration-2 cursor-pointer w-full"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleDropdownToggle}
                    >
                        Reservar clases
                    </button>

                    <div
                        className={`absolute bg-white text-black py-2 shadow-md w-full ${
                            isDropdownOpen ? "block" : "hidden"
                        }`}
                    >
                        <Link
                            to="/reservation-individual"
                            className="block py-2 px-4 hover:underline hover:underline-offset-4 hover:decoration-blue-light hover:decoration-2 cursor-pointer"
                        >
                            Individual
                        </Link>
                        <Link
                            to="/reservation-group"
                            className="block py-2 px-4 hover:underline hover:underline-offset-4 hover:decoration-blue-light hover:decoration-2 cursor-pointer"
                        >
                            Grupal
                        </Link>
                    </div>
                </div>

                <button className="">
                    <Link
                        to="/login"
                        className="text-white bg-blue-light w-full hover:bg-blue py-3 px-2 rounded-xl"
                    >
                        Cerrar Sesión
                    </Link>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
