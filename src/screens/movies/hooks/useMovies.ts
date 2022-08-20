import { useAppSelector } from 'app/hooks';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'lib/init-firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie } from 'types/movies.types';

interface ICategoryMovies {
  movies: {
    id: number;
    name: string;
    description: string;
    rate: string;
  }[];
}

export default function useMovies() {
  const allMovies = useAppSelector((state) => state.movies.movies);
  const params = useParams();
  const [id, setId] = useState<string>('');
  const [categoryMovies, setCategoryMovies] =
    useState<ICategoryMovies['movies']>();
  const [selectedMovie, setSelectedMovie] = useState<IMovie['movies'] | {}>();
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (allMovies) {
      allMovies?.filter(
        (item) =>
          item.name.toLocaleLowerCase() === params.category &&
          (setId(item.id), setCategoryMovies(item.movies))
      );
    }
  }, [allMovies]);

  async function deleteMovie(movieId: number) {
    // LoadingNotify();
    const newCatMovie = categoryMovies?.filter((item) => +item.id !== +movieId);
    setCategoryMovies(newCatMovie);

    if (id && id !== '' && newCatMovie && newCatMovie?.length > 0) {
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [...newCatMovie] })
        .then((response) => {
          //   console.log(response);
          //   notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          //   errorNotify(err.message);
        });
    } else if (id && id !== '' && newCatMovie?.length === 0) {
      const docRef = doc(db, 'categories', id);
      await updateDoc(docRef, { movies: [] })
        .then((response) => {
          //   console.log(response);
          //   notify();
        })
        .catch((err) => {
          //   console.log(err.message);
          //   errorNotify(err.message);
        });
    }
  }

  function editMovie(item: IMovie['movies']) {
    setSelectedMovie(item);
    setSelected(true);
  }

  function closer() {
    setSelected(false);
    setSelectedMovie({});
  }

  useEffect(() => {}, [id]);

  useEffect(() => {}, [categoryMovies]);

  return {
    id,
    categoryMovies,
    deleteMovie,
    editMovie,
    selected,
    selectedMovie,
    closer,
  };
}
