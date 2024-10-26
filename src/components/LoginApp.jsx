import {useState} from 'react';
import "./LoginApp.css";

const LoginApp = () => {
    
    const [isLoginOpen, setLoginOpen] = useState(false);
    
    const openModal = ()=>{
        setLoginOpen(true);
    };
    const closeModal = ()=>{
        setLoginOpen(close);
    };

    return (
    <div className='contenedor-modal'>
        <button onClick={openModal}>Abrir</button>
        {isLoginOpen && (
            <div className='ventana-modal'>
                <div className='contenido-modal'>
                    <h3 className='text-center mb-3'>Ingresar</h3>
                    <div>
                    <form className='mb-3'> 
                    <div>
                    <label for="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie</div>
                    </div>
                    <div>
                    <label for="exampleInputPassword1" className="form-label mt-1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="d-flex mb-3 mt-2 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label ml-2" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Submit</button>
                    </form>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-start mt-3'> 
                    <div>
                        <h8 className='mr-4'>Si aun no eres cliente:</h8> 
                    </div>
                    <div>
                        <a href="">Registrate</a>
                    </div>
                    </div>
                    <button className='btn btn-dark mt-3 w-100' onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default LoginApp