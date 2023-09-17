import { Section, Container, Wrapper, Title, LinkButton } from './FavoritePage.styled';
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
          <Wrapper>
            <Title>Your favorites list is empty. </Title>
            <LinkButton to="/catalog">CARS</LinkButton>
          </Wrapper>
        )}
      </Container>
    </Section>
  );
};

export default FavoritePage;
