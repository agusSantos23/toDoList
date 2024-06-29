import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

import { useAuth } from '../context/AuthContext.jsx'

import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {signup, isAutenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAutenticated) navigate('/')
    },[isAutenticated, navigate])

    const onSubmit = async(data) => {
        signup(data)
    };

    return (
        <>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-between h-80 mb-10"
            >
            <div className="flex flex-col justify-between gap-1">
                <Input
                    {...register('email', { required: 'Email is required',
                        pattern: {
                            value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address'
                        }
                    })}
                    error={errors.email}
                    type="email"
                    name="email"
                    nameForUser="Correo"
                />

                <Input
                    {...register('username', { 
                        required: 'Username is required',
                        pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                        message: 'Must contain at least uppercase and  lowercases '
                        }
                    })}
                    error={errors.username}
                    type="text"
                    name="username"
                    nameForUser="Nombre de Usuario"
                />

                <Input
                
                    {...register('password', { 
                        required: 'Password is required',
                        minLength:{
                            value:8,
                            message:'Password must be at least 8 characters'
                        } 
                    })}
                    error={errors.password}
                    type="password"
                    name="password"
                    nameForUser="Contraseña"
                    isPass={true}
                />

            </div>

            <Button contenido="Registrarse" />

            </form>

            <div className='relative'>
                {registerErrors.map((error, i) => (
                    <div key={i} className='p-3 absolute bottom-0 right-0 max-w-72 bg-red-400 text-xl text-white border-b-4 border-red-800'>
                        {error}
                    </div>
                ))}
            </div>

        </>
    );
}

export default Register;
