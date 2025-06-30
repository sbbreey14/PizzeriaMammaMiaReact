{/* Importar CSS */}
import './Login.css'

{/* Importar useState */}
import { useState } from 'react'


export const Login = () => {
    
    {/* declarar useState */}
    const [ email, setEmail ]         = useState('');
    const [ password, setPassword ]   = useState('');
    const [ error, setError ]         = useState( false );
    const [ largoPass, setLargoPass ] = useState( false );

    const validar = ( e ) => {

        e.preventDefault();

        setError( false );
        setLargoPass( false );

        if ( !email.trim() || !password.trim() ) {
            setError( true )
            return
        }

        if ( password.length < 6 ) {
            setLargoPass( true );
            return
        }

        alert('Inicio de sesion correcto!')
        setEmail('');
        setPassword('');
    }


    return(
        <>
            <div className="form-container" onSubmit={ validar }>
                <form className="container" >
                    <div className="form-group">
                    { error ? <p className='error'>Todos los campos son obligatorios </p> : null }
                        <label>Email: </label>
                        <input type="text" name='email' className="form-control" onChange={ e => setEmail( e.target.value )} value={ email }/>
                    </div>
                    { largoPass ? <p className='error'>Largo de contraseña debe ser minimo de 6 caracteres </p> : null }
                    <div className="form-group">
                        <label>Constraseña: </label>
                        <input type="password" name='contraseña' className="form-control" onChange={ e => setPassword( e.target.value )} value={ password } />
                    </div>
                    <div className="boton">
                        <button type='submit' className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}