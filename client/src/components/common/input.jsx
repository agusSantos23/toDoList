import PropTypes from 'prop-types';
import { useState } from 'react';
import imgEye from '../../assets/eye.svg'
import imgEyeSlash from '../../assets/eye-slash.svg'

function Input({type,name,nameForUser,isPass}){

    const [imgSrc, setImgSrc] = useState(imgEye)
    const [tipo, setTipo] = useState(type)
    
    const mostrarPass = () =>{
        
        if(imgSrc === imgEye){
            setImgSrc(imgEyeSlash)
            setTipo("text")

        }else{
            setImgSrc(imgEye)
            setTipo("password")

        }

    }

    return(
        <>
            <dir htmlFor={name} className='relative'>
                <input type={tipo} name={name} id={name} placeholder={nameForUser} className='pl-2 py-2 pr-5 w-96 text-xl border-b-2 text-white bg-transparent'/>
                
                {isPass && (
                    <img src={imgSrc} alt="passControler" onClick={mostrarPass} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"/>
                )}
            
            </dir>
        </>
    )
}


Input.propTypes = {


    type:PropTypes.string,
    name:PropTypes.string,
    nameForUser:PropTypes.string,
    isPass:PropTypes.bool

}

export default Input