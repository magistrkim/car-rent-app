import { Section, Container, Button, Title } from './CatalogPage.styled';
import Loader from '../../components/Loader/Loader';
import FormSelect from '../../components/FilterForm/FilterForm';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import * as API from '../../api/advert.js';
import { useState, useEffect } from 'react';

const CatalogPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [endAdverts, setEndAdverts] = useState(false);

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
        if (data.length < API.limit) {
          setEndAdverts(true);
        }
      } catch (error) {
        setError(error.response.data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleLoadMore = async () => {
    if (!endAdverts) {
      setPage(prevPage => prevPage + 1);
    }
  };
  return (
    <Section>
      <Container>
        <FormSelect onSubmit={()=> {}}/>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {!isLoading && !error && adverts.length > 0 && (
          <>
            <AdvertsList data={adverts} />
            {!endAdverts ? (
              <Button type="button" onClick={handleLoadMore}>
                Load more
              </Button>
            ) : (
              <Title>You have seen all the cars</Title>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default CatalogPage;
