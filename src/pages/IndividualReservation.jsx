import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const IndividualReservations = () => {
    return (
        <>
            <Navbar />

            <div className="py-20 px-28">
                <div className="flex justify-between">
                    <p className="text-base font-normal">
                        Clases/
                        <span className="font-bold">
                            Reservar clase individual
                        </span>
                    </p>
                    <Link
                        to="/classes"
                        className="group hover:text-blue-light transition-all duration-300"
                    >
                        {" "}
                        <span className="group-hover:translate-x-[-4px] transform inline-block">
                            {" "}
                            &#x2B9C;{" "}
                        </span>{" "}
                        Volver
                    </Link>
                </div>
                <form action="" className="flex gap-10 mt-5">
                    <div className="flex flex-col w-full h-full">
                        <div className="my-5">
                            <div className=" text-left font-semibold text-xl flex mb-3">
                                <div className="px-5 bg-blue-light bg-opacity-50 py-3">
                                    1
                                </div>
                                <h2 className=" bg-blue-light bg-opacity-20 py-3 px-3 w-full">
                                    Selecciona una sesión de entrenamiento
                                </h2>
                            </div>
                            <select
                                name="class"
                                id=""
                                className="w-full text-base border-2 border-blue-light rounded-md py-3 px-3"
                            >
                                <option
                                    value="clase1"
                                    className="hover:bg-blue-greenLight"
                                >
                                    Clase 1
                                </option>
                                <option value="clase2">Clase 2</option>
                                <option value="clase3">Clase 3</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <div className="text-left font-semibold text-xl flex mb-3">
                                <div className="px-5 bg-blue-light bg-opacity-50 py-3">
                                    2
                                </div>
                                <h2 className=" bg-blue-light bg-opacity-20 py-3 px-3 w-full">
                                    Ingresa tus datos
                                </h2>
                            </div>
                            <div className="flex justify-between gap-8">
                                <div className="w-full">
                                    <div className="flex flex-col w-full my-4">
                                        <label
                                            htmlFor=""
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Número de identidad:
                                        </label>
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            className="border border-blue-light rounded-md py-2 px-3"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label
                                            htmlFor=""
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Correo electrónico:
                                        </label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border border-blue-light rounded-md py-2 px-3"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col w-full my-4">
                                        <label
                                            htmlFor=""
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Nombre completo:
                                        </label>
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            className="border border-blue-light rounded-md py-2 px-3"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label
                                            htmlFor=""
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Teléfono:
                                        </label>
                                        <input
                                            type="tel"
                                            name=""
                                            id=""
                                            className="border border-blue-light rounded-md py-2 px-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full my-4">
                                <label
                                    htmlFor=""
                                    className="text-base text-left text-black mb-2"
                                >
                                    Mensaje:
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="border border-blue-light rounded-md py-2 px-3"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-light bg-opacity-20 p-4 w-2/5 h-min">
                        <h5 className="text-sm font-bold mb-2">
                            Código de la clase
                        </h5>
                        <h3 className="text-2xl">Nombre de la clase</h3>
                        <div className="flex flex-start items-center gap-5 my-2">
                            <div className=" border-2 border-blue-light py-2 px-3 text-base font-medium border-opacity-50">
                                35 min
                            </div>
                            <p className="font-medium text-2xl ">
                                <span className="text-xs align-text-top mr-1">
                                    $
                                </span>
                                1100
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-light border rounded-md text-white text-lg font-semibold py-2 hover:bg-blue transition-all duration-300 my-2"
                        >
                            <Link>Reservar</Link>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default IndividualReservations;
