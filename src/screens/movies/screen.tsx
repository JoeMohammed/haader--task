import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('utils/loading'));
const CategoriesSection = lazy(() => import('./components/categories'));
const CategoryFormSection = lazy(() => import('./components/categoriesForm'));

export default function MoviesScreen() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CategoryFormSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CategoriesSection />
      </Suspense>
    </>
  );
}
