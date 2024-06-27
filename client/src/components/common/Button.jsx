import PropTypes from 'prop-types';

function Button({contenido}){


    return(
        <button type="submit" className="text-white bg-myColor_3 hover:bg-myColor_4 px-5 py-2 duration-200 ease-in rounded-3xl font-black w-40">{contenido}</button>
    )
}

Button.propTypes = {

    contenido: PropTypes.string
}

export default Button