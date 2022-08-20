import React, { Suspense } from 'react';
const Loading = React.lazy(() => import('utils/loading'));
const MoviesScreen = React.lazy(() => import('screens/movies/screen'));

export default function MoviesPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MoviesScreen />
      </Suspense>
    </>
  );
}
