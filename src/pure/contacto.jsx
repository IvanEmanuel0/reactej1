import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ContactoComponent = ({contacto}) => {

    const [conectado, setConectado] = useState(false);

    const cambiarEstado = () => {
        conectado ? setConectado(false) : setConectado(true)
    }

    return (
        <div>
            <h4>Nombre: {contacto.nombre} </h4>
            <h4>Apellido: {contacto.apellido} </h4>
            <h4>Email: {contacto.email} </h4>
            <h4>Estado: {conectado? "Contacto en linea" : "Contacto no disponible" } </h4>
            
            <button onClick={cambiarEstado}>
                Cambiar Estado
            </button>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
