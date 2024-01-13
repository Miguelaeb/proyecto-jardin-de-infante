import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      // Verificamos si formData.email y formData.password están definidos
      if (!formData.email || !formData.password) {
        console.error("Email o contraseña no definidos");
        return;
      }

      const response = await axios.post(
        "https://jardin-infantes.onrender.com/api/login",
        formData,
      );

      if (response.data.success) {
        navigate("/Administrador");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center" id="header">
        <div className="mx-auto flex h-72 pb-[60px] pt-[172px] lg:max-w-[54rem] 2xl:max-w-[76rem] px-5 lg:px-0">
          <h1 className="text-[58px] font-semibold leading-[72px] text-white">
            Iniciar sesión
          </h1>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className="w-[350px] p-3 m-2 bg-white border-2 rounded">
          <h2 className="size-[2rem] mx-auto flex w-[100%] items-center justify-center p-4 font-bold">
            Iniciar Sesión
          </h2>
          <form className="flex flex-col gap-3 p-3" onSubmit={handleLogin}>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                type="text"
                placeholder="Ingrese su email"
                autoComplete="off"
                name="email"
                className="p-1 border-2"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password">
                <strong>Contraseña</strong>
              </label>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                className="p-1 border-2"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-100 h-[50px] w-full rounded-[11px] bg-black text-white"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
