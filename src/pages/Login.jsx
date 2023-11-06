import LoginImg from "../assets/login.png";
function Login() {
    return (
        <div className="w-full min-h-screen px-28 flex justify-between items-center font-inter">
            
            <div className="text-center w-full max-w-sm">
                <h1 className="text-xl font-bold">Bienvenido de nuevo!</h1>
                <form action="" className="w-full mt-4">
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
                            Contraseña:
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
