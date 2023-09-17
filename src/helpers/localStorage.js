export const getStoredAdverts = () => {
  return JSON.parse(localStorage.getItem('adverts')) || [];
};

export const storeAdverts = adverts => {
  localStorage.setItem('adverts', JSON.stringify(adverts));
};

export const toggleAdvert = (adverts, advert) => {
  const advertIndex = adverts.findIndex(item => item.id === advert.id);
  if (advertIndex === -1) {
    adverts.push(advert);
  } else {
    adverts.splice(advertIndex, 1);
  }
  return adverts;
};
