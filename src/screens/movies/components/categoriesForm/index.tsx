import { Container } from 'react-bootstrap';
import useAddCategory from 'screens/movies/hooks/useAddCategory';
import MainButton from 'utils/button';
import FormGroup from 'utils/formGroup';

export default function CategoryFormSection() {
  const { register, errors, onSubmit } = useAddCategory();
  return (
    <section>
      <Container>
        <form className="form" onSubmit={onSubmit}>
          <FormGroup
            inputName="name"
            type="text"
            register={register}
            label="Category Name"
            invalidClass={errors?.name ? 'd-block' : 'd-none'}
            invalidMessage={errors?.name?.message}
          />
          <FormGroup
            inputName="description"
            type="text"
            register={register}
            label="Category Description"
            invalidClass={errors?.description ? 'd-block' : 'd-none'}
            invalidMessage={errors?.description?.message}
          />
          <MainButton type="submit">Create</MainButton>
        </form>
      </Container>
    </section>
  );
}
