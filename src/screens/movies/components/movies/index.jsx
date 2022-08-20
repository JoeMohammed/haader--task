import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from 'utils/card';
import spidermanPoster from 'assets/movies/spider-man.jpg';
import useMovies from 'screens/movies/hooks/useMovies';
import EditForm from 'utils/portal/editForm';

export default function MoviesSection() {
  const {
    id,
    categoryMovies,
    deleteMovie,
    editMovie,
    selected,
    selectedMovie,
    closer,
  } = useMovies();
  return (
    <section>
      <Container>
        <Row>
          {categoryMovies?.map((movie) => {
            return (
              <Col key={movie?.id} xs={12} lg={6} className="mb-4">
                <div className="px-3">
                  <MovieCard
                    src={spidermanPoster}
                    alt={movie.name}
                    title={movie.name}
                    desc={movie.description?.slice(0, 120) + '...'}
                    width={1024}
                    height={1400}
                    value={Math.ceil(+movie.rate)}
                    deleteHandler={(id) => deleteMovie(movie.id)}
                    editHandler={(item) => editMovie(movie)}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      {selected && (
        <EditForm
          item={selectedMovie}
          closer={closer}
        />
      )}
    </section>
  );
}
