import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navegacion from './Navegacion';
import url from '../server'
import axios from 'axios';
import { useForm } from 'react-hook-form'


function Crear() {

    const { register, handleSubmit } = useForm()
    return (
        <>
            <Navegacion />
            <Form onSubmit={handleSubmit(async (data) => {
                try {
                    const response = await axios.post(url + "crear", data)
                    window.location.replace('/')

                } catch (error) {
                    console.log(error)
                }

            })} className='container mt-5 w-50 bg-dark '>
                <h3 className='p-4 text-white'>Crear Tarea</h3>
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

export default Crear;