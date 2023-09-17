import { Section, Container } from './FavoritePage.styled';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import FormSelect from '../../components/FilterForm/FilterForm';
import useFavorites from '../../hooks/useFavorite';

const FavoritePage = () => {
  const [favorites, toggleFavorites] = useFavorites();
  return (
    <Section>
      <Container>
        <FormSelect onSubmit={() => {}} />
        {favorites.length ? (
          <FavoriteList toggleFavorites={toggleFavorites} />
        ) : (
          <div>
            <span>Your favorites list is empty. </span>
            <a to="/rental">Add some cars</a>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default FavoritePage;
