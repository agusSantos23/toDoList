import { useEffect, useRef } from "react"
import {useForm} from 'react-hook-form'
import Button from "../components/Button.jsx";

function Home(){
    const {register, handleSubmit} = useForm()
    const textareaRef = useRef(null);

    const onSubmit = (data) =>{
        console.log(data);
    }


    useEffect(() => {

        const textarea = textareaRef.current;
        
        const handleInput = (event) => {
            const textarea = event.target;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        textarea.addEventListener('input', handleInput);

        return () => {
            textarea.removeEventListener('input', handleInput);
        };
           
    }, []);
    
    const frases = ["Tengo que terminar","Mañana tengo que ir a", "Antes de irme de vacaciones", "Enviar correo a"]
    
    const frase = frases[Math.floor(Math.random() * frases.length)] + " . . ."

    return(
        <>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="flex justify-between gap-8  mx-5">

                <textarea 
                    {...register('task')}  
                    name="task"
                    id="task"
                    ref={textareaRef} 
                    rows="1" 
                    className="text-xl text-white bg-transparent w-full overflow-hidden p-2 border border-gray-300 rounded resize-none" 
                    autoFocus 
                    placeholder={frase}

                ></textarea>

                <Button contenido="Agregar" />
            </form>

            <hr className="my-5"/>

            <div id="tareas">

            </div>
        </>
    )
}

export default Home