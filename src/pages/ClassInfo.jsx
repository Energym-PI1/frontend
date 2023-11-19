import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { PiChalkboardTeacher, PiClock } from "react-icons/pi";
import { useParams } from "react-router-dom";

const ClassInfo = () => {
    const { classId } = useParams();
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
                            <span>Nombre de la clase</span>
                        </h2>
                        <p className="text-base text-left my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Qui maxime error placeat rerum similique fuga
                            esse nesciunt, repudiandae iste laborum nulla
                            officia vitae natus sequi enim culpa, facilis earum
                            nihil.
                        </p>
                        <div className="flex justify-start gap-2">
                            <h3 className="text-base font-medium">
                                Instructor:{" "}
                            </h3>
                            <h4 className="text-base font-normal">
                                Luis Matias
                            </h4>
                        </div>
                        <div className="flex items-center justify-start gap-4 my-4">
                            <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-min px-4 py-2 ">
                                <PiChalkboardTeacher className="text-black w-5 h-5" />
                                <p className="text-left ml-1 text-base">
                                    $10.000
                                </p>
                            </div>
                            <div className="flex items-center justify-start bg-[#D9D9D9] rounded-full w-fit px-4 py-2">
                                <PiClock className="text-black w-4 h-4" />
                                <p className="text-left ml-1 text-base">
                                    30 min
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit h-80">
                        <img
                            src="https://www.bodybuilding.com/images/page-graphics/beginning-bodyweight-strength-training-for-women-1-700xh.jpg"
                            alt=""
                            className="object-cover rounded-lg"
                        />
                        <button className="w-full bg-blue-light border rounded-md text-white text-lg font-semibold py-2 hover:bg-blue transition-all duration-300 my-4">
                            <Link to={`/reservation-individual/${classId}`}>Reservar</Link>
                        </button>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
};

export default ClassInfo;
