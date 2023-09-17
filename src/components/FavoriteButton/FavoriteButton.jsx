import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FillIcon, OutlineIcon } from './FavoriteButton.styled';
import {
  getStoredAdverts,
  storeAdverts,
  toggleAdvert,
} from '../../helpers/localStorage';

const FavoriteButton = ({ data, reload }) => {
  const [isAdvertSelected, setIsAdvertSelected] = useState(false);
  useEffect(() => {
    const storedAdverts = getStoredAdverts();
    const isSelectedAdvert = storedAdverts.some(selectedItem => {
      return selectedItem.id === data.id;
    });
    setIsAdvertSelected(isSelectedAdvert);
  }, [data.id]);

  const handleIconClick = () => {
    const storedAdverts = getStoredAdverts();
    const updatedAdverts = toggleAdvert(storedAdverts, data);
    storeAdverts(updatedAdverts);
    setIsAdvertSelected(!isAdvertSelected);
    if (reload) {
      window.location.reload();
    }
  };
  return (
    <>
      {!isAdvertSelected ? (
        <OutlineIcon onClick={handleIconClick} />
      ) : (
        <FillIcon onClick={handleIconClick} />
      )}
    </>
  );
};

export default FavoriteButton;

FavoriteButton.propTypes = {
  data: PropTypes.object.isRequired,
  reload: PropTypes.bool,
};
