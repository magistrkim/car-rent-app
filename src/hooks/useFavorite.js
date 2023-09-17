import { useEffect, useState } from 'react';
import { updateAdvert } from '../api/advert.js';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('adverts')) ?? [];
  });

  useEffect(() => {
    if (favorites.length === 0) {
      localStorage.removeItem('adverts');
    } else {
      localStorage.setItem('adverts', JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorites = async id => {
    const isAlreadyInFavorites = favorites.some(item => item.id === id);

    if (isAlreadyInFavorites) {
      try {
        const updates = { favorite: false };
        await updateAdvert(id, updates);
        setFavorites(prevState => prevState.filter(item => item.id !== id));
      } catch (error) {
        throw new Error('Something went wrong... Please try again later.');
      }
    } else {
      try {
        const updates = { favorite: true };
        const updatedAdvert = await updateAdvert(id, updates);
        setFavorites(prevState => [updatedAdvert, ...prevState]);
      } catch (error) {
        throw new Error('Something went wrong... Please try again later.');
      }
    }
  };

  return [favorites, toggleFavorites];
};

export default useFavorites;
