import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="text-center py-5">
            <h1 className="display-4">Bienvenido a Nuestra Tienda</h1>
            <p className="lead">Descubre nuestros productos exclusivos</p>
            <Button as={Link} to="/products" variant="primary" size="lg" className="mt-3">
                Ver Catálogo Completo
            </Button>
        </div>
    );
}

export default Home;