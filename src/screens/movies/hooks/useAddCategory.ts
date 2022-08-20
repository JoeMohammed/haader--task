import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addCategorySchema } from '../schema/addCategory.schema';
import { TCategoryForm } from 'types/addCategory.types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'lib/init-firebase';
import { toast } from 'react-toastify';

export default function useAddCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TCategoryForm>({
    resolver: yupResolver(addCategorySchema),
  });

  function LoadingNotify() {
    toast.dark('Loading 👋');
  }

  function notify() {
    toast.dark('You create an Category successfully 👋');
    setValue('name', '');
    setValue('description', '');
  }

  function errorNotify(error: string) {
    toast.dark(error);
  }

  const onSubmit = handleSubmit(async (formData) => {
    const data = {
      ...formData,
      id: Date.now(),
    };
    LoadingNotify();
    const moviesCollectionRef = collection(db, 'categories');
    await addDoc(moviesCollectionRef, { ...data })
      .then((response) => {
        notify();
      })
      .catch((err) => {
        errorNotify(err.message);
      });
  });
  return { register, errors, onSubmit };
}
