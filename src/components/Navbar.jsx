import { Link } from "react-router-dom";
import { MdBook } from "react-icons/md";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { IoPeople, IoExit } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { FaIdCardClip } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className="min-h-full w-80 bg-blue-light p-6 font-inter border-r-2 border-yellow">
            <div className="mb-16 w-full text-left">
                <LiaDumbbellSolid className="h-16 w-16 text-white" />
            </div>
            <ul className="text-left text-white text-base my-auto">
                <li className="my-6">
                    <Link
                        to="/user"
                        className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                    >
                        <MdBook className="text-white mr-1 h-5 w-5" />
                        Mis clases
                    </Link>
                </li>
                <li className="my-6">
                    <Link
                        to="/classes"
                        className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                    >
                        <BiSolidSearchAlt2 className="text-white mr-1 h-5 w-5" />
                        Explorar clases
                    </Link>
                </li>
                <li className="my-6">
                    <Link
                        to="/reservation-individual"
                        className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                    >
                        <FaIdCardClip className="text-white mr-1 h-5 w-5" />
                        Reserva - Clases Individuales
                    </Link>
                </li>
                <li className="my-6">
                    <Link
                        to="/reservation-group"
                        className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                    >
                        <IoPeople className="text-white mr-1 h-5 w-5" />
                        Reserva - Clases Grupales
                    </Link>
                </li>
                <li className="my-6">
                    <Link
                        to="/config"
                        className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                    >
                        <AiFillSetting className="text-white mr-1 h-5 w-5" />
                        Configuración
                    </Link>
                </li>
            </ul>
            <div className="w-full flex justify-end mt-[250px] mb-0">
                <Link
                    to="/login"
                    className="text-white hover:underline hover:underline-offset-8 hover:decoration-yellow hover:decoration-4 flex items-center"
                >
                    <IoExit className="text-white mr-1 h-5 w-5" />
                    Cerrar Sesión
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
