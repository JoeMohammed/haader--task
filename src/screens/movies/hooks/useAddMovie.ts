import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'lib/init-firebase';
import { toast } from 'react-toastify';
import { addMovieSchema } from '../schema/addMovie.schema';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks';
import { useParams } from 'react-router-dom';
import { TMovies } from 'types/movies.types';
import { TMovieForm } from 'types/addMovie.types';

interface ICategoryMovies {
  movies: {
    id: number;
    name: string;
    description: string;
    rate: string;
  }[];
}

export default function useAddMovie() {
  const allMovies = useAppSelector((state) => state.movies.movies);
  const params = useParams();
  const [id, setId] = useState<string>('');
  const [categoryMovies, setCategoryMovies] =
    useState<ICategoryMovies['movies']>();

  useEffect(() => {
    if (allMovies) {
      allMovies?.filter(
        (item) =>
          item.name.toLocaleLowerCase() === params.category &&
          (setId(item.id), setCategoryMovies(item.movies))
      );
    }
  }, [allMovies]);

  useEffect(() => {}, [id]);

  useEffect(() => {}, [categoryMovies]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TMovieForm>({
    resolver: yupResolver(addMovieSchema),
  });

  function LoadingNotify() {
    toast.dark('Loading 👋');
  }

  function notify() {
    toast.dark('You create an Movie successfully 👋');
    setValue('name', '');
    setValue('description', '');
    setValue('rate', '');
  }

  function errorNotify(error: string) {
    toast.dark(error);
  }

  const onSubmit = handleSubmit(async (formData) => {
    const data = {
      ...formData,
      id: Date.now() + 101,
    };
    LoadingNotify();
    if (id && id !== '' && categoryMovies && categoryMovies?.length > 0) {
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [ ...categoryMovies , { ...data }] })
        .then((response) => {
          //   console.log(response);
          notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          errorNotify(err.message);
        });
    } else if (id && id !== '' && categoryMovies?.length === 0) {
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [{ ...data }] })
        .then((response) => {
          //   console.log(response);
          notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          errorNotify(err.message);
        });
    }
  });

  return { register, errors, onSubmit, params };
}
