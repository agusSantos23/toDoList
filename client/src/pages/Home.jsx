import { useEffect, useRef } from "react"
import Button from "../components/Button";

function Home(){
    const textareaRef = useRef(null);

    useEffect(() => {

        const textarea = textareaRef.current;
        
        textarea.addEventListener('input', (event) => {

            const textarea = event.target;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });

           
    }, []);
    
    const frases = ["Tengo que terminar","Mañana tengo que ir a", "Antes de irme de vacaciones", "Enviar correo a"]
    
    const frase = frases[Math.floor(Math.random() * frases.length)] + " . . ."

    return(
        <>
            <form action="" className="flex justify-between gap-8  mx-5">
                <textarea ref={textareaRef} rows="1" className=" text-xl text-white bg-transparent w-full overflow-hidden p-2 border border-gray-300 rounded resize-none" placeholder={frase}></textarea>

                <Button contenido="Agregar" />
            </form>

            <hr className="my-5"/>

            <div id="tareas">

            </div>
        </>
    )
}

export default Home