import { useForm } from 'react-hook-form';
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col items-center justify-around h-80 mb-10"
      >
        <div className="flex flex-col justify-between">
          <Input 
            {...register('email', { required: "Email is required" })} 
            name="email" 
            nameForUser="Correo" 
            error={errors.email} 
          />
          <Input 
            {...register('password', { required: "Password is required" })} 
            name="password" 
            nameForUser="Contraseña" 
            isPass={true} 
            error={errors.password} 
          />
        </div>
        <Button contenido="Iniciar Sesión" />
      </form>

    </>
  );
}

export default Login;
