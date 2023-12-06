import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"

const Home = () =>{
    const [nombreCompleto , setNombreCompleto] = useState('');
    const [pass , setPass] = useState('');
    const [gen , setGen] = useState('');
    const [direccion , setDireccion] = useState('');
    const [fecha , setFecha] = useState('');
    const [error , setError] = useState('');

    const navigate = useNavigate();

    const EnviarFormulario = () =>{
        let MensajeError = [];

        if(nombreCompleto === ''){
            MensajeError.push('Completa con tú nombre completo');
        };
        

        if(gen === ''){
            MensajeError.push('Seleccionar un genero')
        }

        if(direccion === ''){
            MensajeError.push('Completa tu dirección');
        }

        if(fecha === ''){
            MensajeError.push('Completa con su fecha de nacimiento');
        }
        if(pass === ''){
            MensajeError.push('Completa con una contraseña');
        }
        else{
            document.cookie = 'nombre=' + nombreCompleto;
            alert('Formulario Enviado...');
            navigate('/Encuesta', {state: {nombreCompleto}})
        }
        setError(MensajeError.join(' , '));

    };
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        EnviarFormulario();
        
    }



    return(
        <div className={styles.container}>
                <h1>Formulario</h1>
            <div className={styles.contact_wrapper}>
                <div className={styles.contact_form}>
                    <form onSubmit={handleSubmit} >
                        <p>
                            <label htmlFor='fullname'>Nombre Completo </label>
                            <input type="text" name="nombre" value={nombreCompleto} onChange={(event) => setNombreCompleto(event.target.value)}/>
                        </p>

                        <p>
                            <label htmlFor="direccion">Nacionalidad </label>
                            <input type="text" name="Nacionalidad" value={direccion} onChange={(event) => setDireccion(event.target.value)}/>
                        </p>

                        <p>
                            
                            <select name="" id="genero" value={gen} onChange={(event) => setGen(event.target.value)}>
                                <option value="">Seleccione su genero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </p>
                        <p>
                            <label for="FDN">Fecha De Nacimiento</label>
                            <input type="date" name="trip-start" id="FDN" min= "1970-01-01" max="2030-12-31" value={fecha} onChange={(event) => setFecha(event.target.value)} />
                        </p>

                        <p className={styles.block}>
                            <label htmlFor="">Contraseña </label>
                            <input type="password" value={pass} onChange={(event) => setPass(event.target.value)} />
                        </p>

                        <p className={styles.block}>
                            <button type="submit" onClick={EnviarFormulario}>
                                Enviar
                            </button>
                        </p>
                    </form>
                    <div className={styles.errores}>{error}</div>
                </div>
                    <div className={styles.contact_info}>
                        <p>Por Favor complete todos los campos para acceder a la encuesta. </p>
                        <h4>Todos los Derechos reservados a <br />Alejandro Saturno.</h4>
                        <h3>Redes:

                         <a target="_blanck" href="https://www.linkedin.com/in/alejandro-saturno-1b5967206/">Linkedin</a> 
                         <a target="_blanck" href="https://github.com/AleSaturno">Github</a>
                        </h3>
                    </div>
            </div>
        </div>
    )
}

export default Home;