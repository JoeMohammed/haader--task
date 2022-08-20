import useGetMovies from 'hooks/useGetMovies';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'utils/loading';
import { ToastContainer } from 'react-toastify';
const HomePage = React.lazy(() => import('pages/home'));
const MoviesPage = React.lazy(() => import('pages/movies'));
const MovieCategoryPage = React.lazy(() => import('pages/movies/category'));

function App() {
  useGetMovies();
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loading />}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:category"
          element={
            <Suspense fallback={<Loading />}>
              <MovieCategoryPage />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;
