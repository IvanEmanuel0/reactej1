import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../../pure/contacto';


const ListaContacto = () => {

    const usuario = new Contacto("Iván", "Alagastino", "alagastino.ivane@gmail.com", false);

    return (
        <div>
            <div>Mis contatos: </div>
            <ContactoComponent contacto={usuario}></ContactoComponent>
        </div>
    );
};



export default ListaContacto;
