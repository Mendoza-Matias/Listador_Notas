import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


function Navegacion() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='text-warning'>Mis Notas</Navbar.Brand>
                    <Nav className="me-auto gap-2">
                        <Nav><Link className='text-decoration-none text-warning' to={"/"}>Inicio</Link></Nav>
                        <Nav><Link className='text-decoration-none text-warning' to={"/crear"}>Crear</Link></Nav>
                    </Nav>
                </Container>
            </Navbar>
        </>);
}

export default Navegacion;