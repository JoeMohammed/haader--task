import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import CategoryCard from 'screens/movies/utils/card';
import spiderManPoster from 'assets/movies/spider-man.jpg';
import Loading from 'utils/loading';

export default function CategoriesSection() {
  const categories = useAppSelector((state) => state.movies.movies);
  const loading = useAppSelector((state) => state.movies.loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Container>
        <Row>
          {categories?.map((category) => {
            return (
              <Col key={category.id} xs={6} lg={4}>
                <Link to={`/movies/${category.name.toLocaleLowerCase()}`}>
                  <CategoryCard
                    alt={category.name}
                    src={spiderManPoster}
                    width={1021}
                    height={1400}
                    title={category.name}
                    description={`${category.name} is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, tempore.`}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
