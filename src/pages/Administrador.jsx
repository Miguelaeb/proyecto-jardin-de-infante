import axios from "axios";
import { useState, useEffect } from "react";

const Administrador = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nivel, setNivel] = useState("jardin");
  const [idUsuarioEliminar, setIdUsuarioEliminar] = useState(null);
  const [idUsuarioActualizar, setIdUsuarioActualizar] = useState(null);
  const [nombreActualizar, setNombreActualizar] = useState("");
  const [apellidoActualizar, setApellidoActualizar] = useState("");
  const [generoActualizar, setGeneroActualizar] = useState("");
  const [emailActualizar, setEmailActualizar] = useState("");
  const [nombreTutorActualizar, setNombreTutorActualizar] = useState("");
  const [telefonoActualizar, setTelefonoActualizar] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [mostrarTabla, setMostrarTabla] = useState(true); //nuevo

  const handleUpdateClick = async (id) => {
    try {
      setIdUsuarioActualizar(id);

      const updatedUser = {
        nombre: nombreActualizar,
        apellido: apellidoActualizar,
        genero: generoActualizar,
        email: emailActualizar,
        nombreTutor: nombreTutorActualizar,
        telefono: telefonoActualizar,
      };
      await axios.put(
        `https://jardin-infantes.onrender.com/actualizar/${idUsuarioActualizar}`,
        updatedUser,
      );
      const response = await axios.get(
        `https://jardin-infantes.onrender.com/usuarios/${nivel}`,
      );
      setUsuarios(response.data);
      setIdUsuarioActualizar(null);
      setMostrarTabla(true); // Mostrar la tabla despues de actualizar

      setNombreActualizar("");
      setApellidoActualizar("");
      setGeneroActualizar("");
      setEmailActualizar("");
      setNombreTutorActualizar("");
      setTelefonoActualizar("");
    } catch (error) {
      console.error("Error al preparar o realizar la actualización:", error);
    }
  };

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get(
          `https://jardin-infantes.onrender.com/usuarios/${nivel}`,
        );
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    obtenerUsuarios();
  }, [nivel, idUsuarioEliminar, idUsuarioActualizar]);

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`https://jardin-infantes.onrender.com/eliminar/usuario/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario._id !== id));
      setIdUsuarioEliminar(null); // Limpia el estado después de eliminar
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 flex-shrink-0">
        <div className="h-full flex-auto bg-gray-900 ">
          <div className="flex flex-col overflow-y-auto ">
            <ul className="relative m-0 mt-[30%] h-full list-none p-0">
              <div
                className={`relative flex cursor-pointer px-4 text-white hover:bg-gray-700 ${
                  nivel === "cuna" && "bg-gray-700"
                }`}
                onClick={() => setNivel("cuna")}
              >
                <div className="my-auto mr-4">
                  <svg
                    className="h-5 w-5 fill-current"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  ></svg>
                </div>
                <div className="my-1 flex-auto">
                  <span>Cuna</span>
                </div>
              </div>

              <div
                className={`relative flex cursor-pointer px-4 text-white hover:bg-gray-700 ${
                  nivel === "jardin" && "bg-gray-700"
                }`}
                onClick={() => setNivel("jardin")}
              >
                <div className="my-auto mr-4">
                  <svg
                    className="h-5 w-5 fill-current"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  ></svg>
                </div>
                <div className="my-1 flex-auto">
                  <span>Jardín</span>
                </div>
              </div>

              <div
                className={`relative flex cursor-pointer px-4 text-white hover:bg-gray-700 ${
                  nivel === "guarderia" && "bg-gray-700"
                }`}
                onClick={() => setNivel("guarderia")}
              >
                <div className="my-auto mr-4">
                  <svg
                    className="h-5 w-5 fill-current"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  ></svg>
                </div>
                <div className="my-1 flex-auto ">
                  <span>Guarderia</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex w-full flex-col">
        <div className="flex  h-36 w-full items-end bg-blue-400 text-white no-underline ">
          <div className="ml-2 flex  h-12 overflow-hidden ">
            <button
              className={`mx-3 border-b-2 border-white ${
                nivel === "jardin" && "border-blue-400"
              }`}
              onClick={() => setNivel("jardin")}
            >
              <span>Jardín</span>
            </button>

            <button
              className={`mx-3 border-b-2 border-white ${
                nivel === "cuna" && "border-blue-400"
              }`}
              onClick={() => setNivel("cuna")}
            >
              <span>Cuna</span>
            </button>

            <button
              className={`mx-3 border-b-2 border-white ${
                nivel === "guarderia" && "border-blue-400"
              }`}
              onClick={() => setNivel("guarderia")}
            >
              <span>guarderia</span>
            </button>
          </div>
        </div>
        <div className="flex-auto p-4">
          {mostrarTabla && (
            <table className="min-w-full overflow-hidden rounded-lg border">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className=" px-4 py-2">Nombre</th>
                  <th className=" px-4 py-2">Apellido</th>
                  <th className=" px-4 py-2">Genero</th>
                  <th className=" px-4 py-2">Correo Electrónico</th>
                  <th className=" px-4 py-2">Nombre del Tutor</th>
                  <th className=" px-4 py-2">Teléfono</th>
                  <th className=" px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                {usuarios.map((usuario) => (
                  <tr key={usuario._id} className="text-black">
                    <td className=" px-4 py-2 text-center">{usuario.nombre}</td>
                    <td className=" px-4 py-2 text-center">
                      {usuario.apellido}
                    </td>
                    <td className=" px4- py-2 text-center">{usuario.genero}</td>
                    <td className=" px-4 py-2 text-center">{usuario.email}</td>
                    <td className=" px-4 py-2 text-center">
                      {usuario.nombreTutor}
                    </td>
                    <td className=" px-4 py-2 text-center">
                      {usuario.telefono}
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <button
                        className="mr-2 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        onClick={() => {
                          handleUpdateClick(usuario._id);
                          setMostrarTabla(false); //ocultar la tabla al hacer clic en modificar
                        }}
                      >
                        Modificar
                      </button>
                      <button
                        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                        onClick={() => eliminarUsuario(usuario._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!mostrarTabla && idUsuarioActualizar && (
            <div className="flex-auto p-4">
              <h2 className="mb-[26px] flex h-[40px] w-[150px] items-center justify-center rounded-lg  bg-blue-500 text-white">
                Modificar Usuario
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateClick(idUsuarioActualizar);
                }}
                className="flex flex-col"
              >
                <label className="mb-2">Nombre:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={nombreActualizar}
                  onChange={(e) => setNombreActualizar(e.target.value)}
                />
                <label className="mb-2 mt-2">Apellido:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={apellidoActualizar}
                  onChange={(e) => setApellidoActualizar(e.target.value)}
                />
                <label className="mb-2 mt-2">Genero:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={generoActualizar}
                  onChange={(e) => setGeneroActualizar(e.target.value)}
                />
                <label className="mb-2 mt-2">Email:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={emailActualizar}
                  onChange={(e) => setEmailActualizar(e.target.value)}
                />
                <label className="mb-2 mt-2">Fecha de nacimiento:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="date"
                  value={nacimiento}
                  onChange={(e) => setNacimiento(e.target.value)}
                />
                <label className="mb-2 mt-2">Nivel:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={nivel}
                  onChange={(e) => setNivel(e.target.value)}
                />
                <label className="mb-2 mt-2">Nombre de tutor:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={nombreTutorActualizar}
                  onChange={(e) => setNombreTutorActualizar(e.target.value)}
                />
                <label className="mb-2 mt-2">telefono:</label>
                <input
                  className="h-7 w-1/5 rounded-lg border border-solid border-gray-500"
                  type="text"
                  value={telefonoActualizar}
                  onChange={(e) => setTelefonoActualizar(e.target.value)}
                />
                <button
                  className="mt-[10px] h-10 w-[20%] rounded-lg bg-green-500 text-white"
                  type="submit"
                >
                  Guardar cambios
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { Administrador };


