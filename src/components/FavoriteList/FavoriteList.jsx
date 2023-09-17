import PropTypes from 'prop-types';
import { List } from './FavoriteList.styled';
import AdvertsItem from '../AdvertsItem/AdvertsItem';
import { useEffect, useState } from 'react';
import {
  getStoredAdverts
} from '../../helpers/localStorage';

const FavoriteList = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      try {
        const advertsData = getStoredAdverts();
        setAdverts(advertsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromLocalStorage();
  }, []);

  return (
    <List>
      {adverts.map(item => (
        <li key={`${item.id}`} data={item}>
          <AdvertsItem data={item} reload={true} key={adverts.id} />
        </li>
      ))}
    </List>
  );
};

export default FavoriteList;

FavoriteList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
