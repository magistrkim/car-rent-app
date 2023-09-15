import { Section, Container } from './FavoritePage.styled';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import * as API from '../../api/advert.js';

const FavoritePage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const page = 1;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await API.getAllAdverts(page);
        setError('');
        if (page === 1) {
          setAdverts(data);
        } else {
          setAdverts(prevState => [...prevState, ...data]);
        }
      } catch (error) {
        setError(error.response.data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {!isLoading && !error && adverts.length > 0 && (
          <>
            <AdvertsList data={adverts} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default FavoritePage;
