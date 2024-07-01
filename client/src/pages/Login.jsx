import { useForm } from 'react-hook-form';
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from '../context/AuthContext';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {signin, errors: signinErrors} = useAuth()

    const onSubmit = (data) => {
        signin(data)
    };

    return (
    <>
        <h2 className='text-white text-3xl font-extrabold'>Login</h2>

        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col items-center justify-start gap-10 h-80 mb-10"
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
        <Button contenido="Iniciar Sesión" />
      </form>
      <div className='relative'>
                {signinErrors.map((error, i) => (
                    <div key={i} className='p-3 absolute bottom-0 right-0 w-72 bg-red-400 text-xl text-white border-b-4 border-red-800'>
                        {error}
                    </div>
                ))}
            </div>

    </>
  );
}

export default Login;
