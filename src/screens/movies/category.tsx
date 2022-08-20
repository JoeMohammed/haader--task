import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('utils/loading'));
const MoviesSection = lazy(() => import('./components/movies'));
const MoviesForm = lazy(() => import('./components/moviesForm'));

export default function CategoryScreen() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MoviesForm />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MoviesSection />
      </Suspense>
    </>
  );
}
