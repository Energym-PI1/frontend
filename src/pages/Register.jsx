import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import RegisterImg from "../assets/register.png";
import { useNavigate } from "react-router-dom";

function Register() {
    const urlAPI = "https://energym-403700.uc.r.appspot.com/energym-api";

    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            id: "",
            name: "",
            email: "",
            password: "",
            telephone: "",
        },
    });

    const onSubmit = async () => {
        try {
            const response = await axios({
                method: "POST",
                url: `${urlAPI}/user`,
                headers: { "Content-Type": "application/json" },
                data: {
                    id,
                    name,
                    email,
                    password,
                    telephone,
                    role: {
                        id: 1,
                        name: "ADMINISTRADOR",
                    },
                },
            });

            if (response.status === 200 || response.status === 201) {
                console.log(response);
                navigate("/login");
            } else {
                console.error("API request failed:", response);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const [showPasswordRules, setShowPasswordRules] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordRules = () => {
        setShowPasswordRules(!showPasswordRules);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]*$/;

    return (
        <div className="w-full min-h-screen px-28 flex justify-between items-center font-inter">
            <div className="">
                <img
                    src={RegisterImg}
                    alt="Register banner. Two people doing exercise"
                    className="max-w-[670px] h-auto"
                />
            </div>
            <div className="text-center w-full max-w-sm">
                <h1 className="text-2xl font-bold">Registro</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="id"
                            className="text-left text-base font-normal mb-1"
                        >
                            Número de identificación:
                        </label>
                        <input
                            id="id"
                            type="number"
                            className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                errors.id ? "border-red-700" : ""
                            }`}
                            {...register("id", {
                                required: true,
                                minLength: 3,
                                maxLength: 20,
                                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\-']+$/,
                            })}
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            name="id"
                        />
                        {errors.id?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener al menos 3 caracteres
                                </p>
                            </div>
                        )}
                        {errors.id?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener menos de 20 caracteres
                                </p>
                            </div>
                        )}

                        {errors.username?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta completar el número de identificación
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="name"
                            className="text-left text-base font-normal mb-1"
                        >
                            Nombre completo:
                        </label>
                        <input
                            id="name"
                            type="text"
                            className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                errors.name ? "border-red-700" : ""
                            }`}
                            {...register("name", {
                                required: true,
                                minLength: 3,
                                maxLength: 80,
                                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\-']+$/,
                            })}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                        />
                        {errors.name?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener al menos 3 caracteres
                                </p>
                            </div>
                        )}
                        {errors.name?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener menos de 80 caracteres
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

                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="email"
                            className="text-left text-base font-normal mb-1"
                        >
                            Correo:
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                errors.username ? "border-red-700" : ""
                            }`}
                            {...register("email", {
                                required: true,
                                pattern: emailPattern,
                            })}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
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
                                    El mail es incorrecto. Por favor,
                                    reingréselo siguiendo el formato
                                    mail@proveedor.xxx
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="telephone"
                            className="text-left text-base font-normal mb-1"
                        >
                            Teléfono:
                        </label>
                        <input
                            id="telephone"
                            type="tel"
                            className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                errors.telephone ? "border-red-700" : ""
                            }`}
                            {...register("telephone", {
                                required: true,
                                pattern: phonePattern,
                            })}
                            inputMode="numeric"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            name="telephone"
                        />
                        {errors.telephone?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    Falta completar el teléfono
                                </p>
                            </div>
                        )}
                        {errors.telephone?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    El teléfono debe contener solo números
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="password"
                            className="text-left text-base font-normal mb-1"
                        >
                            Contraseña:
                        </label>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+/?@[\]^_{|}])[A-Za-z\d!#$%&()*+/?@[\]^_{|}]+$/,
                                })}
                                className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                    errors.password ? "border-red-700" : ""
                                }`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                onClick={togglePasswordRules}
                            />
                            <div
                                className="absolute right-0 mr-3 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <AiFillEyeInvisible className="text-blue-light" />
                                ) : (
                                    <AiFillEye className="text-blue-light" />
                                )}
                            </div>
                        </div>
                        {showPasswordRules && (
                            <div className="tooltip text-[9px] text-left my-2">
                                - Entre 6 y 10 caracteres. <br />
                                - Al menos una mayúscula. <br />
                                - Al menos una minúscula. <br />
                                - Al menos un número. <br />- Al menos un
                                caracter especial. Listado aceptado: ! # $ % & (
                                ) * + - /? @ [ \ ] ^ _ [ | ].
                            </div>
                        )}

                        {errors.password?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener al menos 6
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener menos de 10
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.password?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña no cumple con las reglas. Por
                                    favor, ingrese una contraseña correcta.
                                </p>
                            </div>
                        )}
                        {errors.password?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta completar la contraseña
                                </p>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`w-full text-white text-base font-bold text-center bg-blue-light my-4 rounded-full hover:bg-blue py-2 px-3 ${
                            Object.keys(errors).length > 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        disabled={Object.keys(errors).length > 0}
                    >
                        Registrar
                    </button>
                </form>
                <p className="text-sm text-center">
                    Ya tienes una cuenta?
                    <a
                        href="/login"
                        className="ml-2 text-blue-light hover:text-blue hover:underline hover:decoration-2 hover:decoration-blue hover:underline-offset-4 "
                    >
                        Inicia Sesión
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
