import { editMovieSchema } from '../schema/editMovie.schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TMovieForm } from 'types/addMovie.types';
import { IMovie } from 'types/movies.types';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'lib/init-firebase';
import { useParams } from 'react-router-dom';

interface ICategoryMovies {
  movies: {
    id: number;
    name: string;
    description: string;
    rate: string;
  }[];
}

export default function useEditMovie(
  item: IMovie['movies'],
  closer: () => void
) {
  const allMovies = useAppSelector((state) => state.movies.movies);
  const params = useParams();
  const [id, setId] = useState<string>('');

  const [categoryMovies, setCategoryMovies] =
    useState<ICategoryMovies['movies']>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TMovieForm>({
    resolver: yupResolver(editMovieSchema),
    defaultValues: {
      name: item?.name,
      rate: item?.rate,
      description: item?.description,
    },
  });

  useEffect(() => {
    if (allMovies) {
      allMovies?.filter(
        (item) =>
          item.name.toLocaleLowerCase() === params.category &&
          (setId(item.id), setCategoryMovies(item.movies))
      );
    }
  }, [allMovies]);

  const onSubmit = handleSubmit(async (formData) => {
    const data = {
      ...formData,
      id: item?.id,
    };
    console.log(categoryMovies);

    const oldMovies = categoryMovies?.filter((mov) => +mov.id !== +item.id);
    console.log(oldMovies);
    if (oldMovies && oldMovies?.length > 0) {
      const newMovies = [...oldMovies, { ...data }];
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [...newMovies] })
        .then((response) => {
          //   console.log(response);
          closer();
          //   notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          //   errorNotify(err.message);
        });
    } else {
      const newMovies = [{ ...data }];
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [...newMovies] })
        .then((response) => {
          //   console.log(response);
          closer();
          //   notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          //   errorNotify(err.message);
        });
    }
  });

  return { register, errors, onSubmit };
}
