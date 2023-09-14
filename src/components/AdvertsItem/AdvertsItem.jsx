import PropTypes from 'prop-types';
import carImage from '../../assets/car.jpg';
import { Image } from './AdvertsItem.styled';

const AdvertsItem = ({
  data: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  },
}) => {
  return (
    <>
      <Image src={img ? img : carImage} alt={`${make} ${model} ${year}`} />
      <div>
        <h2>
          <span>{make}</span>
          <span>{model},</span>
          <span>{year}</span>
        </h2>
        <span>{rentalPrice}</span>
      </div>
      <ul>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>Premium</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </ul>
    </>
  );
};

export default AdvertsItem;

AdvertsItem.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
