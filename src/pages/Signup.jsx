import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Signup = () => {

    const [formData, setFormData] = useState({
      
        email:'',
        password:''
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  const handleFormSubmit  = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post('https://jardin-infantes.onrender.com/registro', formData);
        console.log(response.data);
    } catch (error) {
        console.error('Error en el registro:', error.response ? error.response.data : error.message);
      }
  }
  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center">
          <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
            <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
              Registro
            </h1>
          </div>
        </header>
        <div className="flex justify-center items-center">
            <div className="bg-white p-3 rounded w-25 border-2 m-2">
                <h2 className="size-[2rem] p-4 w-[100%] mx-auto font-bold flex items-center justify-center">
                REGISTRO
                </h2>
                <form onSubmit={handleFormSubmit} className="p-3 flex flex-col gap-3">
                            
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="email">
                                    <strong>E-mail</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su email"
                                    name="email"
                                    className="border-2 p-1 appearance-none"
                                    value={formData.email} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label htmlFor="email">
                                    <strong>Contraseña</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    name="password"
                                    className="border-2 p-1"
                                    value={formData.password} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button
                    type="submit"
                    className="border-2 text-white p-2 w-100 rounded-none bg-light-green-300 hover:bg-light-green-500 w-[100%] mx-auto"
                >
                    Registrarse
                </button>
                </form>
                <p className='p-3'>El mail ya se encuentra registrado</p>
                <Link to="/login"
                type="button"
                className="border-2 w-100 p-1 rounded-none bg-white hover:bg-light-blue-100 w-[90%] flex justify-center items-center mx-auto"
                >
                Ingresar
                </Link>
        </div>
    </div>
  </>
  );
};

