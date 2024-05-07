import React, { useState } from 'react';
import "./Login.css"
import "../../App.css"
import Logo from '../../Icons/logobig.svg';
import { Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
    return (
        <div className='loginPage flex'>
            <div className='container flex'>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={Logo} alt="Logo Image" />
                        <h3>¡Bienvenido!</h3>
                    </div>
                    <form action="" className='form grid'>
                        <span>Estado Login</span>
                        <div className='inputDiv'>
                            <label htmlFor="username">Usuario</label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input type="text" id="username" placeholder='Nombre de usuario' />

                            </div>
                        </div>
                        <div className='inputDiv'>
                            <label htmlFor="password">Usuario</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id="password" placeholder='Contraseña' />

                            </div>
                        </div>
                        <button>
                            <span>Iniciar sesión</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                        <span className='forgotPassword'>¿Olvidaste tu contraseña?</span>
                        <div className='footerDiv flex'>
                            <span className='text'>¿No tienes una cuenta?</span>
                            <Link to={"/register"}>
                                <button className='btn'>
                                    Regístrate</button></Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Login;