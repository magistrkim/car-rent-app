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

const models = makes.map(make => ({ value: make, label: make }));
const pricePerHour = prices.map(price => ({ value: price, label: price }));

const FormSelect = () => {
  return (
    <Form onSubmit={() => {}}>
      <div>
        <FormLabel>Car brand</FormLabel>
        <SelectStyles
          placeholder="Enter the text"
          options={models}
          styles={SelectedStyled}
        />
      </div>
      <div>
        <FormLabel>Price / 1 hour</FormLabel>
        <SelectStyles
          placeholder="To $"
          options={pricePerHour}
          styles={SelectedStyled}
        />
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <MileageInput placeholder="From" type="number" name="minMileage" />
        <MileageInput placeholder="To" type="number" name="maxMileage" />
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

export default FormSelect;
