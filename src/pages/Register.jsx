import RegisterImg from "../assets/register.png";
function Register() {
    return (
        <div className="w-full min-h-screen px-28 flex justify-between items-center font-inter">
            <div className="">
                <img
                    src={RegisterImg}
                    alt="Register banner. Two people doing exercise"
                    className="max-w-[670px] h-auto bg-red-500"
                />
            </div>
            <div className="text-center w-full max-w-sm">
                <h1 className="text-2xl font-bold">Registro</h1>
                <form action="" className="w-full mt-4">
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor=""
                            className="text-left text-base font-normal mb-1"
                        >
                            Nombre completo:
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light "
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor=""
                            className="text-left text-base font-normal mb-1"
                        >
                            Usuario:
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light "
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor=""
                            className="text-left text-base font-normal mb-1"
                        >
                            Correo:
                        </label>
                        <input
                            type="email"
                            className="w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light "
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label
                            htmlFor=""
                            className="text-left text-base font-normal mb-1"
                        >
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            className="w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light "
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor=""
                            className="text-left text-base font-normal mb-1"
                        >
                            Confirmar contraseña:
                        </label>
                        <input
                            type="password"
                            className="w-full border-2 border-blue-light py-2 px-3 rounded-full focus:border-blue-light "
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white text-base font-bold text-center bg-blue-light my-4 rounded-full hover:bg-blue py-2 px-3"
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
