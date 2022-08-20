import { useAppDispatch } from 'app/hooks';
import { getMoviesStart, getMoviesSuccess } from 'app/movies/movieSlice';
import { getDocs, onSnapshot } from 'firebase/firestore';
import { moviesCollectionRef } from 'lib/collection';
import { useEffect } from 'react';
import { db } from '../lib/init-firebase';

export default function useGetMovies() {
  const dispatch = useAppDispatch();

  // async function getMovies() {
  //   dispatch(getMoviesStart({ loading: true, movies: [] }));
  //   await getDocs(moviesCollectionRef).then((response) => {
  //     const categories: any = response?.docs?.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     dispatch(getMoviesSuccess({ loading: false, movies: categories }));
  //   });
  // }

  async function getSnapMovies() {
    onSnapshot(moviesCollectionRef, (snapshot) => {
      const categories: any = snapshot?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getMoviesSuccess({ loading: false, movies: categories }));
    });
  }

  useEffect(() => {
    // getMovies();
    getSnapMovies();
  }, []);

  return {};
}
