import PropTypes from 'prop-types';
import carImage from '../../assets/car.jpg';
import {
  CardWrapper,
  Image,
  TextWrapper,
  Title,
  Span,
  List,
  Item,
  Button,
} from './AdvertsItem.styled';

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
    <CardWrapper>
      <Image src={img ? img : carImage} alt={`${make} ${model} ${year}`} />
      <TextWrapper>
        <Title>
          {make} <Span>{model}, </Span>
          {year}
        </Title>
        <span>{rentalPrice}</span>
      </TextWrapper>
      <List>
        <Item>{address.split(',')[1]}</Item>
        <Item>{address.split(',')[2]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>Premium</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{id}</Item>
        <li>{functionalities[0]}</li>
      </List>
      <Button>Learn more</Button>
    </CardWrapper>
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
