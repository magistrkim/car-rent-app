import carImage from '../../assets/car.jpg';
import PropTypes from 'prop-types';
import {
  Image,
  TextWrapper,
  Title,
  Span,
  List,
  Item,
  Description,
  SubTitle,
  RentalList,
  RentalItem,
  Button,
} from './ModalItem.styled';

const ModalItem = ({
  data: {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  },
}) => {
  return (
    <div>
      <Image src={img ? img : carImage} alt={`${make} ${model} ${year}`} />

      <TextWrapper>
        <Title>
          {make} <Span>{model}, </Span>
          {year}
        </Title>

        <List>
          <Item>{address.split(',')[1]}</Item>
          <Item>{address.split(',')[2]}</Item>
          <Item>Id: {id}</Item>
          <Item>Year: {year}</Item>
          <Item>Type: {type}</Item>
          <Item>Fuel Consumption: {fuelConsumption}</Item>
          <li>Engine Size: : {engineSize}</li>
        </List>

        <Description>{description}</Description>

        <SubTitle>Accessories and functionalities:</SubTitle>

        <List>
          {[...accessories, ...functionalities].map(item => (
            <Item key={item}>{item}</Item>
          ))}
        </List>

        <SubTitle>Rental Conditions:</SubTitle>

        <RentalList>
          {rentalConditions.split('\n').map(item => (
            <RentalItem key={item}>{item}</RentalItem>
          ))}
          <RentalItem>
            Mileage: <Span>{mileage}</Span>
          </RentalItem>
          <RentalItem>
            Price: <Span>{rentalPrice}</Span>
          </RentalItem>
        </RentalList>

        <Button href="tel:+380730000000">Rental car</Button>
      </TextWrapper>
    </div>
  );
};
export default ModalItem;

ModalItem.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
