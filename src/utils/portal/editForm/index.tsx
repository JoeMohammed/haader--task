import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import useEditMovie from 'screens/movies/hooks/useEditMovie';
import { IMovie } from 'types/movies.types';
import MainButton from 'utils/button';
import FormGroup from 'utils/formGroup';
import styles from './edite.module.scss';

type TForm = {
  item: IMovie['movies'];
  closer: () => void;
};

const EditForm = ({ item, closer }: TForm) => {
  let editForm;
  if (typeof window !== 'undefined') {
    editForm = document.getElementById('popup');
  }

  const { register, errors, onSubmit } = useEditMovie(item, closer);

  const element = (
    <div className={`${styles.portal}`} onClick={() => closer()}>
      <Container>
        <div
          className={` ${styles.portal_box}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form className="form" onSubmit={onSubmit}>
            <FormGroup
              inputName="name"
              register={register}
              label="Movie Name"
              type="text"
              invalidClass={errors?.name ? 'd-block' : 'd-none'}
              invalidMessage={errors?.name?.message}
              inputClass="valid"
            />
            <FormGroup
              inputName="description"
              register={register}
              label="Movie Description"
              type="text"
              invalidClass={errors?.description ? 'd-block' : 'd-none'}
              invalidMessage={errors?.description?.message}
              inputClass="valid"
            />
            <FormGroup
              inputName="rate"
              register={register}
              label="Movie Rate"
              type="text"
              invalidClass={errors?.rate ? 'd-block' : 'd-none'}
              invalidMessage={errors?.rate?.message}
              inputClass="valid"
            />
            <MainButton type="submit">Edit Movie</MainButton>
          </form>
        </div>
      </Container>
    </div>
  );

  return editForm ? ReactDOM.createPortal(element, editForm) : null;
};

export default EditForm;
