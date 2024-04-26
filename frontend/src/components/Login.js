import Logo from "../icons/logobig.svg";
import React, { useState } from "react";
const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const loginSignupHandler = () => {
		setIsLogin(!isLogin);
	};
	return (
		<div className=" flex  justify-center">
			<div className="  flex  ">
				<div className="pr-32 mt-52">
					<img className="" width={"400px"} src={Logo} alt="Acecriollo-logo-full" />
				</div>
				<div className="max-w-[500px]">
					<div className="my-7  ">
						<h1 className="  font-bold tracking-[-1.2px] text-[64px] leading-[84px]">Lo que se está jugando ahora</h1>
					</div>
					<h1 className=" mb-20 text-2xl font-bold">{!isLogin ? "Únete Hoy" : "Ingresa a AceCriollo"}</h1>
					<form className="flex flex-col w-[60%]">
						{!isLogin && (
							<>
								<input type="text" placeholder="Nombre" className="text-fc outline-greeno border border-white px-4 py-2 rounded-full my-1" />
								<input type="text" placeholder="Usuario" className="text-fc outline-greeno border border-white px-4 py-2 rounded-full my-1" />
							</>
						)}
						<input type="email" placeholder="Email" className="text-fc outline-greeno border border-white px-4 py-2 rounded-full my-1" />
						<input type="password" placeholder="Contraseña" className="text-fc outline-greeno border border-white px-4 py-2 rounded-full my-1" />
						<button id="login" className="bg-greeno border-none py-1 my-4 font-bold rounded-full text-lg">
							{!isLogin ? "Crear Cuenta" : "Iniciar sesión"}
						</button>
						<h1 className="flex gap-1">
							{isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}

							<span className=" font-bold text-greeno cursor-pointer" onClick={loginSignupHandler}>
								{isLogin ? "Regístrate" : "Inicia Sesión"}
							</span>
						</h1>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
