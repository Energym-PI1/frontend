import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PiChalkboardTeacher, PiClock } from "react-icons/pi";

const ClassInfo = () => {
    const { classId } = useParams();
    // const [classInfo, setClassInfo] = useState({});
    const [classSession, setClassSession] = useState({});

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get(
                    `https://energym-403700.uc.r.appspot.com/energym-api/sessions/class/?id=${classId}`
                );
                if (response.status === 200) {
                    console.log(
                        `This is the session info: ${response.data[0]}`
                    );
                    setClassSession(response.data[0]);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    Swal.fire({
                        title: "Error!",
                        text: `No se ha encontrado la clase ${classId}`,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                    console.error("API request failed:", error.response);
                }
            }
        };
        fetchSessionData();

        /**const fetchClassData = async () => {
            try {
                const response = await axios.get(
                    `https://energym-403700.uc.r.appspot.com/energym-api/classes/code/?code=${classId}`
                );
                console.log(response);
                if (response.status === 302) {
                    console.log(`This is the class info: ${response.data}`);
                    setClassInfo(response.data[0]);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    Swal.fire({
                        title: "Error!",
                        text: `No se ha encontrado la clase ${classId}`,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                    console.error("API request failed:", error.response);
                }
            }
        };
        fetchClassData();*/
    }, [classId]);

    return (
        <>
            <Navbar />
            <div className="py-20 px-28">
                <div className="flex justify-between">
                    <p className="text-base font-bold">Clases</p>
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
                <article className="flex justify-between flex-row gap-x-20 my-10">
                    <div className="w-full justify-start min-h-full">
                        <h2 className="text-2xl font-semibold ">
                            <span>{classId}</span> -{" "}
                            <span>
                                {classSession.classes
                                    ? classSession.classes.name
                                    : "Desconocido"}
                            </span>
                        </h2>
                        <p className="text-base text-left my-4">
                            {classSession.classes
                                ? classSession.classes.description
                                : "Desconocido"}
                        </p>
                        <div className="flex justify-start gap-2">
                            <h3 className="text-base font-medium">
                                Instructor:{" "}
                            </h3>
                            <h4 className="text-base font-normal">
                                {classSession.owner
                                    ? classSession.owner.name
                                    : "Desconocido"}
                            </h4>
                        </div>
                        <div className="flex items-center justify-start gap-4 my-4">
                            <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-min px-4 py-2 ">
                                <PiChalkboardTeacher className="text-black w-5 h-5" />
                                <p className="text-left ml-1 text-base">
                                    $
                                    {classSession.classes
                                        ? classSession.classes.price
                                        : "Desconocido"}
                                </p>
                            </div>
                            <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-fit px-4 py-2">
                                <PiClock className="text-black w-4 h-4" />
                                <p className="text-left ml-1 text-base">
                                    {classSession.classes
                                        ? classSession.classes.duration
                                        : "Desconocido"}
                                    min
                                </p>
                            </div>
                        </div>
                        <div className="my-2">
                            <h2 className="font-semibold text-xl mb-3">
                                Sesiones
                            </h2>
                            <div>
                                <div className="bg-blue-light bg-opacity-20 rounded-md py-4 px-5 w-max">
                                    <p className="text-base font-medium">
                                        Fecha:{" "}
                                        <span className="font-normal">
                                            {classSession.date
                                                ? classSession.date
                                                : "Desconocido"}
                                        </span>
                                    </p>
                                    <p className="text-base font-medium">
                                        Hora:{" "}
                                        <span className="font-normal">
                                            {classSession.hour
                                                ? classSession.hour
                                                : "Desconocido"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit h-80">
                        <img
                            src={
                                classSession.classes
                                    ? classSession.classes.image
                                    : "Desconocido"
                            }
                            alt=""
                            className="object-cover rounded-lg"
                        />
                        <Link to={`/reservation-individual/${classId}`}>
                            <button className="w-full bg-blue-light border rounded-md text-white text-lg font-semibold py-2 hover:bg-blue transition-all duration-300 my-4">
                                Reservar
                            </button>
                        </Link>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
};

export default ClassInfo;
