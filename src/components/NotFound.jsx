import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function NotFound() {
    return (
        <Container className="text-center py-5 my-5">
            <div className="bg-white p-5 rounded-3 shadow">
                <h1 className="display-1 text-danger fw-bold">404</h1>
                <h2 className="mb-4">¡Ups! Página no encontrada</h2>
                <p className="lead mb-4">
                    La página que buscas no existe o ha sido movida.
                </p>
                <Button as={Link} to="/" variant="primary" size="lg">
                    Volver al inicio
                </Button>
            </div>
        </Container>
    );
}

export default NotFound;