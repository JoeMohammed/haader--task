import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <section>
      <Container>
        <div className="text-center">
          <h1 className='mb-3'>Hello In Our Movies App</h1>
          <h2>
            <Link to="/movies" className='h2'>Go to see our Movies</Link>
          </h2>
        </div>
      </Container>
    </section>
  );
}
