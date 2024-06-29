import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import imgEye from '../assets/eye.svg';
import imgEyeSlash from '../assets/eye-slash.svg';

const Input = forwardRef(({ name,type = 'text', nameForUser, isPass, error, ...rest }, ref) => {

  const [imgSrc, setImgSrc] = useState(imgEye);
  const [inputType, setInputType] = useState(type);

  const mostrarPass = () => {
    if (inputType === 'password') {
      setImgSrc(imgEyeSlash);
      setInputType('text');
    } else {
      setImgSrc(imgEye);
      setInputType('password');
    }
  };

  return (
    <>
        <div className='relative'>

            <input
            ref={ref}
            {...rest}
            type={inputType}
            name={name}
            id={name}
            placeholder={nameForUser}
            className='pl-2 py-2 pr-5 min-w-96 text-xl border-b-2 text-white bg-transparent'
            />

            {isPass && (
            <img
                src={imgSrc}
                alt="passControler"
                onClick={mostrarPass}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
            />
            )}


        </div>
        {error && <p className='text-red-400'>{error.message}</p>}


    </>
    
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  name: PropTypes.string.isRequired,
  nameForUser: PropTypes.string,
  isPass: PropTypes.bool,
  error: PropTypes.object,
  type: PropTypes.string,
};

export default Input;
