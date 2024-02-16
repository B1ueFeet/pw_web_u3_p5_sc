import axios from "axios"
const consultarEstudiante = async (id)=> {
    // AXIOS TIENE INCLUIDO IMPLICITAMENTE AWAIT (NO HACE FALTA DECLARARLO)
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}/info`).then(r => r.data)
    console.log(data)
    return data
}

export const consultarEstudianteFacade = async (id)=> {
    return await consultarEstudiante(id);
}


const insertar = async (body) => {
    const data = axios.post("http://localhost:8080/API/v1.0/Matricula/estudiantes",body).then(r=>r.data)
    console.log(data)
}

export const insertarFacade = async(body) => {
    return await insertar(body);
}


const actualizar = async (id,body) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,body).then(r=>r.data)
    console.log(data)
}

export const actualizarFacade = async(id, body) => {
    return await actualizar(id, body);
}

const eliminar =  async (id) =>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r=>r.data)
    console.log(data)
}

export const eliminarFacade = async(id, body) => {
    return await eliminar(id);
}