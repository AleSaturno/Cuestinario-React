import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from './encuesta.module.css'

const Encuesta = () =>{
    

    const [pregunta1 , setPregunta1] = useState('')
    const [pregunta2 , setPregunta2] = useState('')
    const [pregunta3 , setPregunta3] = useState('')
    const [pregunta4 , setPregunta4] = useState('')
    const [pregunta5 , setPregunta5] = useState('')
    const [pregunta6 , setPregunta6] = useState('')
    const [error , setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const nombreCompleto = location?.state?.nombreCompleto || '';

    const EnviarDatos = () =>{
        const preguntas = [pregunta1, pregunta2 ,pregunta3 , pregunta4 , pregunta5 , pregunta6];
        
        let MensajeError = []

        for (let i = 0; i < preguntas.length; i++) {
            if(preguntas[i].trim() === ''){
                MensajeError.push(`Complete la pregunta ${i + 1}`);
            }
            
        }

        
        if(MensajeError.length > 0){
            setError(MensajeError.join(' , '));
        }
        else{
            setError('');
            alert('Encuesta Finalizada. ¡Gracias!');
            navigate('/')
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        EnviarDatos();
        
    }


    return(
        <div className={styles.container} >
            <h1>Encuesta</h1>
                <label  className={styles.name}>Bienvenido: {nombreCompleto}</label>
            <div className={styles.contact_wrapper }>

                <div className={styles.contact_form} >
                    
                    <form onSubmit={handleSubmit} >

                        <p>
                            <label>¿Que te gusta hacer cuando estas en tu tiempo libre?</label>
                            <input type="text" id="pregunta1" value={pregunta1} onChange={(event) => setPregunta1(event.target.value)} />
                        </p>

                        <p>
                            <label>¿Que tipo de música escuchas?</label>
                            <input type="text" id="pregunta2" value={pregunta2} onChange={(event) => setPregunta2(event.target.value)} />
                        </p>

                        <p>
                            <label>¿Haces algun deporte, Justifica?</label>
                            <input type="text" id="pregunta3" value={pregunta3} onChange={(event) => setPregunta3(event.target.value)} />
                        </p>

                        <p>
                            <label>¿Te gusta programar?</label>
                            <input type="text" id="pregunta4" value={pregunta4} onChange={(event) => setPregunta4(event.target.value)} />
                        </p>

                        <p >
                            <label>¿Tienes Hermanos/as, Cuantos?</label>
                            <input type="text" id="pregunta5" value={pregunta5} onChange={(event) => setPregunta5(event.target.value)} />
                        </p>

                        <p>
                            <label>¿Como te ves en 10 años?</label>
                            <input type="text" id="pregunta6" value={pregunta6} onChange={(event) => setPregunta6(event.target.value)} />
                        </p>
                        <button className={styles.block} onClick={EnviarDatos}>Enviar</button>
                    </form>
                    {error && <div className= {styles.errores}>{error}</div>}

                    
                </div>
                <div className={styles.contact_info}>
                        <p>Tomate tu tiempo para llenar el cuestionario</p>

                        <p>
                            Muchas Gracias!
                        </p>
                        
                    </div>
            </div>
        </div>
    )
}

export default Encuesta;