import React from 'react';
import { useNavigate } from 'react-router-dom';



const FormCv = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        
        navigate('/FormCv');
    };

    return (
       <div className='div1'>
         <form onSubmit={handleSubmit}>
         <h2>Créez votre CV professionnel</h2>
            <input type="submit" value="Crée un Cv "/>
        </form>
       </div>
    );
};

export default FormCv;
