import Navegacion from "./Navegacion";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import url from '../server'
import axios from 'axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


function Editar() {
    const [notas, setNotas] = useState([]);
    const { register, handleSubmit } = useForm()
    const { id } = useParams()


    console.log(notas)

    const traerNotas = async () => {
        try {
            await axios.get(url + "Tarea/" + id)
            setNotas(response.data.tareas);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        traerNotas()
    }, [])

    return (
        <>
            <Navegacion />
            <Form onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.put(url + "editar/" + id, data)

                } catch (error) {
                    console.log(error)
                }
            })} className='container mt-5 w-50 bg-dark '>
                <h3 className='p-4 text-white'>Editar Tarea</h3>
                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>Nombre de la tarea</Form.Label>
                    <Form.Control {...register("task_name")} type="text" placeholder="Ingresa el nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>Decripcion</Form.Label>
                    <Form.Control {...register("task_data")} type="text" placeholder="Descricion" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>Fecha de la tarea</Form.Label>
                    <Form.Control {...register("task_time")} type="date" placeholder="Ingresa la fecha" />
                </Form.Group>
                <Button type="submit" className='btn btn-primary mb-5'>Enviar</Button>
            </Form>

        </>);
}

export default Editar;