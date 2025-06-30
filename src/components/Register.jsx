{/* Importacion CSS */}
import './Register.css'

{/* Importacion useState */}
import { useState } from 'react'


export const Register = () => {

    {/* declaraciones useState */}
    const [ correo, setCorreo ] = useState('');
    const [ contraseña, setContraseña ] = useState('');
    const [ confirmarContraseña, setConfirmarContraseña ] = useState('');
    const [ error, setError ] = useState( false );
    const [ errorPass, setErrorPass ] = useState( false );
    const [ largoPass, setLargoPass ] = useState( false );

    const validar = (e) => {
        e.preventDefault();

        setError(false);
        setErrorPass(false);
        setLargoPass(false);
        
        if (!correo.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
            setError(true);
            return;
        }

        if (contraseña !== confirmarContraseña) {
            setErrorPass(true);
            return;
        }

        if (contraseña.length < 6 || confirmarContraseña.length < 6) {
            setLargoPass(true);
            return;
        }
        
        alert('Inicio de sesion correcto!')
        setCorreo('');
        setContraseña('');
        setConfirmarContraseña('');

    }

    return(
        <>
            <div className="formulario-container">
                <form className='formulario' onSubmit={ validar }>
                    { error ? <p className='error'>Todos los campos son obligatorios</p> : null}
                    <div className="form-group">
                        <label>Correo: </label>
                        <input type="text" name="correo" className='form-control' onChange={ e => setCorreo( e.target.value )} value={ correo }/>
                    </div>
                    { errorPass ? <p className='error'>Error en la contraseña, no coinciden </p> : null}
                    { largoPass ? <p className='error'>Error en la contraseña, mininmo 6 caracteres </p> : null}
                    <div className="form-group">
                        <label>Contraseña : </label>
                        <input type="password" name="correo" className='form-control' onChange={ e => setContraseña( e.target.value )} value={ contraseña } />
                    </div>
                    <div className="form-group">
                        <label>Confirmar contraseña : </label>
                        <input type="password" name="correo" className='form-control' onChange={ e => setConfirmarContraseña( e.target.value )} value={ confirmarContraseña } />
                    </div>
                    <div className='boton'>
                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}