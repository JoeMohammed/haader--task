import { Container } from 'react-bootstrap';
import useAddMovie from 'screens/movies/hooks/useAddMovie';
import MainButton from 'utils/button';
import FormGroup from 'utils/formGroup';
import Title from 'utils/title';

export default function MoviesForm() {
  const { register, errors, onSubmit, params } = useAddMovie();

  return (
    <section>
      <Container>
        <form className="form" onSubmit={onSubmit}>
          <Title>{params?.category}</Title>
          <FormGroup
            inputName="name"
            label="Movie Name"
            type="text"
            register={register}
            invalidClass={errors?.name ? 'd-block' : 'd-none'}
            invalidMessage={errors?.name?.message}
          />
          <FormGroup
            inputName="rate"
            label="Movie Rate"
            type="text"
            register={register}
            invalidClass={errors?.rate ? 'd-block' : 'd-none'}
            invalidMessage={errors?.rate?.message}
          />
          <FormGroup
            inputName="description"
            label="Movie Description"
            type="text"
            register={register}
            invalidClass={errors?.description ? 'd-block' : 'd-none'}
            invalidMessage={errors?.description?.message}
          />
          <MainButton type="submit">Add Movie</MainButton>
        </form>
      </Container>
    </section>
  );
}
