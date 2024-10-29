import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginApp = () => {
    
    const [isLoginOpen, setLoginOpen] = useState(true);
        
    const {
            register, 
            handleSubmit, 
            formState:{errors}
            } = useForm();
   
    const navigate = useNavigate();

    //const openModal = ()=>{
     //   setLoginOpen(true);
    //};
    const closeModal = ()=>{
        setLoginOpen(close);
    };

    const user = {
      correo: "user@user.com",
      pass: "user12345678",
      role: "user",
    };
    const admin = {
      correo: "admin@admin.com",
      pass: "admin12345678",
      role: "admin",
    };
  
  
    const logIn = (data,e) => {
    //e.preventDefault();
     const {correo, pass} = data;
      
     if (correo === user.correo && pass === user.pass) {
       localStorage.setItem("auth", JSON.stringify(user.role));
       navigate("/");
      } else if (correo === admin.correo && pass === admin.pass) {
        localStorage.setItem("auth", JSON.stringify(admin.role));
        navigate("/admin");
      } else {
        alert("Correo o contraseña incorrectos");
        setCorreo('')
        setPass('')
        e.target[0].focus();
      }
 };


    return (
        
        <div className="container vh-100">
            {isLoginOpen && (
        <div className="row h-100  justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inicio de sesión</h5>
              
              <form onSubmit={handleSubmit(logIn)}>
                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    className={
                      errors.correo?.type === "required"
                        ? "form-control bg-danger"
                        : "form-control"
                    }
                    placeholder="name@example.com"
                    {...register("correo", {
                      required: true,
                    })}
                  />
                  {errors.correo?.type === "required" && (
                    <p className="text-danger">Correo obligatorio</p>
                  )}
                  {errors.correo?.type === "pattern" && (
                    <p className="text-danger">
                      No es un formato válido de correo
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    {...register("pass", {
                      required: true,
                      pattern: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,16}$/,
                    })}
                    type="password"
                    className="form-control"
                  />
                  {errors.pass?.type === "required" && (
                    <p className="text-danger">Contraseña obligatoria</p>
                  )}
                  {errors.pass?.type === "pattern" && (
                    <p className="text-danger">
                      Debe tener solo minúsculas y números. Mínimo 8 caracteres
                      máximo 16 caracteres.
                    </p>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success">Iniciar</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

        )}
    </div>
  )
}

export default LoginApp
