import * as yup from 'yup';

export const addMovieSchema = yup.object().shape({
  name: yup.string().required('This field is Required'),
  description: yup.string().required('This field is Required'),
  rate: yup.string().required('This field is Required'),
});
