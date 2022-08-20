import * as yup from 'yup';

export const addCategorySchema = yup.object().shape({
  name: yup.string().required('This field is Required'),
  description: yup.string().required('This field is Required'),
});
