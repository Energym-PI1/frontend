import LoginImg from "../assets/login.png";
import { useForm } from "react-hook-form";
import { useState, } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [showPasswordRules, setShowPasswordRules] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordRules = () => {
        setShowPasswordRules(!showPasswordRules);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const onSubmit = async () => {
        try {
            const response = await axios({
                method: "post",
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
                Swal.fire({
                    title: "Éxito!",
                    text: "El usuario ingresó con éxito",
                    icon: "success",
                });
                navigate("/user");
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                Swal.fire({
                    title: "Error!",
                    text: "El correo y/o contraseña son incorrectos. Vuelva a intentar",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                console.error("API request failed:", error.response);
            }
        }
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
        <div className="w-full min-h-screen px-28 flex justify-between items-center font-inter">
            <div className="text-center w-full max-w-sm">
                <h1 className="text-xl font-bold">Bienvenido de nuevo!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor="email"
                            className="text-left text-base font-normal mb-1"
                        >
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light ${
                                errors.email ? "border-red-700" : ""
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
                                <p className="text-[#B40000] text-sm my-1 text-left">
                                    El mail es incorrecto. Por favor,
                                    reingréselo siguiendo el formato
                                    mail@proveedor.xxx
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
                        className="w-full text-white text-base font-bold text-center bg-blue-light my-4 rounded-full hover:bg-blue py-2 px-3"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="text-sm text-center">
                    No tienes una cuenta?
                    <a
                        href="/register"
                        className="ml-2 text-blue-light hover:text-blue hover:underline hover:decoration-2 hover:decoration-blue hover:underline-offset-4 "
                    >
                        Registrate
                    </a>
                </p>
            </div>
            <div className="">
                <img
                    src={LoginImg}
                    alt="Login banner. Two people doing exercise"
                    className="max-w-[670px] h-auto"
                />
            </div>
        </div>
    );
}

export default Login;
