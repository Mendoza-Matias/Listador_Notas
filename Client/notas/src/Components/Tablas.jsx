import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import url from '../server';
import axios from 'axios';

function Tabla() {
    const [notas, setNotas] = useState([]);

    const traerNotas = async () => {
        try {
            const response = await axios.get(url)
            setNotas(response.data.tareas);

        } catch (error) {
            console.log(error)
        }
    }

    async function eliminarNota(id, e) {
        e.preventDefault();

        try {
            await axios.delete(url + "eliminar/" + id)
            window.location.replace('/')
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        traerNotas()
    }, [])

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead className='text-center'>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {notas.map((nota) => {
                        return (
                            <tr className='text-center' key={nota.id}>
                                <td>{nota.task_name}</td>
                                <td>{nota.task_data}</td>
                                <td>{nota.task_time}</td>
                                <td className='d-flex gap-2 justify-content-center'>
                                    <button className='btn btn-dark'><Link className='text-decoration-none text-white' to={`/Editar/${nota.id}`}>Editar</Link></button>
                                    <button className='btn btn-dark' onClick={(e) => eliminarNota(nota.id, e)}>Eliminar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default Tabla;