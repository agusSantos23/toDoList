import Input from "./common/input"
import Button from "./common/Button";

function Login(){

    return(
        <>
            
            <form action="" className="flex flex-col items-center justify-around h-80 mb-10">

                <div className="flex flex-col justify-between">
                    <Input type="email" name="correo" nameForUser="Correo"/>
                    <Input type="password" name="pass" nameForUser="Contraseña" isPass={true}/>
                </div>
                

                <Button contenido="Iniciar Session" />
            </form>

            <hr />
            
            
            
            
        </>
    )

}

export default Login