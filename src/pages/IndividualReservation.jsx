import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { IoIosAlert } from "react-icons/io";

import { useForm } from "react-hook-form";

const IndividualReservations = () => {
    const { classId } = useParams();
    const navigate = useNavigate();
    const [classSession, setClassSession] = useState({});
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get(
                    `https://energym-403700.uc.r.appspot.com/energym-api/sessions/class/?id=${classId}`
                );
                if (response.status === 200) {
                    console.log(response.data[0]);
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
    }, [classId]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            id: "",
            name: "",
            email: "",
            telephone: "",
        },
    });

    const onSubmit = async () => {
        Swal.fire({
            title: "Éxito!",
            text: "El usuario fue registrado con éxito",
            icon: "success",
        });
        navigate("/classes");
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]*$/;

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
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex gap-10 mt-5"
                >
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
                                    value={classId}
                                    className="hover:bg-blue-greenLight"
                                >
                                    {classSession.date
                                        ? classSession.date
                                        : "Desconocido"}{" "}
                                    -{" "}
                                    {classSession.hour
                                        ? classSession.hour
                                        : "Desconocido"}{" "}
                                    | {classId}{" "}
                                    {classSession.classes
                                        ? classSession.classes.name
                                        : "Desconocido"}
                                </option>
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
                                            name="id"
                                            id=""
                                            className={`border border-blue-light rounded-md py-2 px-3 ${
                                                errors.id
                                                    ? "border-red-700"
                                                    : ""
                                            }`}
                                            {...register("id", {
                                                required: true,
                                                minLength: 3,
                                                maxLength: 20,
                                                pattern:
                                                    /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\-']+$/,
                                            })}
                                            value={id}
                                            onChange={(e) =>
                                                setId(e.target.value)
                                            }
                                        />
                                        {errors.id?.type === "minLength" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    El campo debe tener al menos
                                                    3 caracteres
                                                </p>
                                            </div>
                                        )}
                                        {errors.id?.type === "maxLength" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    El campo debe tener menos de
                                                    20 caracteres
                                                </p>
                                            </div>
                                        )}

                                        {errors.id?.type === "required" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    Falta completar el número de
                                                    identificación
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label
                                            htmlFor="email"
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Correo electrónico:
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className={`border border-blue-light rounded-md py-2 px-3 ${
                                                errors.id
                                                    ? "border-red-700"
                                                    : ""
                                            }`}
                                            {...register("email", {
                                                required: true,
                                                pattern: emailPattern,
                                            })}
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {errors.email?.type === "required" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-[#B40000]">
                                                    Falta completar el email
                                                </p>
                                            </div>
                                        )}
                                        {errors.email?.type === "pattern" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-[#B40000]">
                                                    El mail es incorrecto. Por
                                                    favor, reingréselo siguiendo
                                                    el formato
                                                    mail@proveedor.xxx
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col w-full my-4">
                                        <label
                                            htmlFor="name"
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Nombre completo:
                                        </label>
                                        <input
                                            type="email"
                                            name="name"
                                            id="name"
                                            className={`border border-blue-light rounded-md py-2 px-3 ${
                                                errors.id
                                                    ? "border-red-700"
                                                    : ""
                                            }`}
                                            {...register("name", {
                                                required: true,
                                                minLength: 3,
                                                maxLength: 80,
                                                pattern:
                                                    /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\-']+$/,
                                            })}
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        {errors.name?.type === "minLength" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    El campo debe tener al menos
                                                    3 caracteres
                                                </p>
                                            </div>
                                        )}
                                        {errors.name?.type === "maxLength" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    El campo debe tener menos de
                                                    80 caracteres
                                                </p>
                                            </div>
                                        )}

                                        {errors.name?.type === "required" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-red-700">
                                                    Falta completar el nombre
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label
                                            htmlFor="phone"
                                            className="text-base text-left text-black mb-2"
                                        >
                                            Teléfono:
                                        </label>
                                        <input
                                            type="tel"
                                            name="telephone"
                                            id="phone"
                                            className={`border border-blue-light rounded-md py-2 px-3 ${
                                                errors.id
                                                    ? "border-red-700"
                                                    : ""
                                            }`}
                                            {...register("telephone", {
                                                required: true,
                                                pattern: phonePattern,
                                            })}
                                            inputMode="numeric"
                                            value={telephone}
                                            onChange={(e) =>
                                                setTelephone(e.target.value)
                                            }
                                        />
                                        {errors.telephone?.type ===
                                            "required" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-[#B40000]">
                                                    Falta completar el teléfono
                                                </p>
                                            </div>
                                        )}
                                        {errors.telephone?.type ===
                                            "pattern" && (
                                            <div className="inline-flex justify-start items-center">
                                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                                <p className="text-[#B40000]">
                                                    El teléfono debe contener
                                                    solo números
                                                </p>
                                            </div>
                                        )}
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
                        <h5 className="text-sm font-bold mb-2">{classId}</h5>
                        <h3 className="text-2xl">
                            {classSession.classes
                                ? classSession.classes.name
                                : "Desconocido"}
                        </h3>
                        <div className="flex flex-start items-center gap-5 my-2">
                            <div className=" border-2 border-blue-light py-2 px-3 text-base font-medium border-opacity-50">
                                {classSession.classes
                                    ? classSession.classes.duration
                                    : "Desconocido"}
                                min
                            </div>
                            <p className="font-medium text-2xl ">
                                <span className="text-xs align-text-top mr-1">
                                    $
                                </span>
                                {classSession.classes
                                    ? classSession.classes.price
                                    : "Desconocido"}
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
