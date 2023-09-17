import PropTypes from 'prop-types';
import {
  Form,
  FormLabel,
  MileageInput,
  SubmitButton,
  SelectStyles,
  SelectedStyled,
} from './FilterForm.styled';
import makes from '../../data/makes.json';
import prices from '../../data/prices.json';
import useForm from '../../hooks/useForm';

const models = makes.map(make => ({ value: make, label: make }));
const pricePerHour = prices.map(price => ({ value: price, label: price }));

const initialState = {
  model: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};

const FormSelect = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { model, price, minMileage, maxMileage } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FormLabel>Car brand</FormLabel>
        <SelectStyles
          name="model"
          value={model}
          placeholder="Enter the text"
          options={models}
          styles={SelectedStyled}
          onChange={() => {}}
        />
      </div>
      <div>
        <FormLabel>Price / 1 hour</FormLabel>
        <SelectStyles
          name="price"
          value={price}
          placeholder="To $"
          options={pricePerHour}
          styles={SelectedStyled}
          onChange={() => {}}
        />
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <MileageInput
          value={minMileage}
          placeholder="From"
          type="number"
          name="minMileage"
          onChange={handleChange}
        />
        <MileageInput
          value={maxMileage}
          placeholder="To"
          type="number"
          name="maxMileage"
          onChange={handleChange}
        />
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
