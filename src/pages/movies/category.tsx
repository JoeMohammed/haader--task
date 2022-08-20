import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('utils/loading'));
const CategoryScreen = lazy(() => import('screens/movies/category'));

export default function MovieCategoryPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CategoryScreen />
      </Suspense>
    </>
  );
}
