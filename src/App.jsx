import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
