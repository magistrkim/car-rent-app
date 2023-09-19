import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Form,
  FormLabel,
  MileageInput,
  SubmitButton,
  SelectStyles,
  SelectedStyled,
} from './FilterForm.styled';
import makes from '../../data/makes.json';
// import useForm from '../../hooks/useForm';

const FormSelect = ({ onSubmit }) => {
  const [data, setData] = useState({
    model: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  });

  const { model, price, minMileage, maxMileage } = data;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleModelChange = value => {
    const model = value?.label ?? '';
    setData({ ...data, model });
    if (!value) onSubmit({ ...data, model: '' });
  };
  const handlePriceChange = value => {
    const price = parseInt(value?.label) || '';
    setData({ ...data, price });
    if (!value) onSubmit({ ...data, price: '' });
  };
  const handleMinMileageChange = event => {
    const { value } = event.target;
    setData({ ...data, minMileage: value });
    if (!value) onSubmit({ ...data, minMileage: '' });
  };
  const handleMaxMileageChange = event => {
    const { value } = event.target;
    setData({ ...data, maxMileage: value });
    if (!value) onSubmit({ ...data, maxMileage: '' });
  };
  const models = makes.map(make => ({ value: make, label: make }));
  const pricePerHour = Array.from({ length: 100 }).map((_, index) => {
    return {
      label: `${(index + 1) * 10}$`,
    };
  });
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FormLabel>Car brand</FormLabel>
        <SelectStyles
          placeholder="Enter the text"
          options={models}
          styles={SelectedStyled}
          onChange={handleModelChange}
          value={model ? { label: model } : ''}
        />
      </div>
      <div>
        <FormLabel>Price / 1 hour</FormLabel>
        <SelectStyles
          value={price ? { label: price } : ''}
          placeholder="To $"
          options={pricePerHour}
          styles={SelectedStyled}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <MileageInput
          value={minMileage}
          placeholder="From"
          type="number"
          onChange={handleMinMileageChange}
        />
        <MileageInput
          value={maxMileage}
          placeholder="To"
          type="number"
          onChange={handleMaxMileageChange}
        />
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  onSubmit: PropTypes.func,
};
