import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
const Login = () => {
    return (
        <><Navbar />
            <div className='flex items-center justify-center mt-28 text-white'>
                <div className=' w-96 border rounded bg-secondary px-7 py-10'>
                    <form onSubmit={() => {}}>
                        <h4 className='text-2xl mb-7'>Ingresa</h4>
                        <input type="text" placeholder='Email' className='input-box' />
                        <PasswordInput />

                        <button type='submit' className='btn-primary'>Ingresa
                        </button>
                        <p className='text-sm text-center mt-4'>¿Aún no has creado tu cuenta en Ace Criollo?{""}
                            <Link to='/signUp' className=''>Regístrate</Link>

                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;