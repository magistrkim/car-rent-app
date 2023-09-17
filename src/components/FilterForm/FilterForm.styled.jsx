import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';
import Select from 'react-select';

export const SelectedStyled = {
  control: provided => ({
    ...provided,
    backgroundColor: '#F7F7FB',
    width: '200px',
    height: '48px',
    borderRadius: '14px',
    borderWidth: '0',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    paddingLeft: '4px',
    color: '#121417',
  }),
};

export const SelectStyles = styled(Select)`
  background-color: ${colors.inputBgColor};
  margin-top: 10px;
  border-radius: 14px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;
export const FormInput = styled.input`
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
  background-color: ${colors.inputBgColor};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: ${colors.textDarkColor};
  }
  &:hover,
  &:focus {
    border: 1px solid #3470ff;
    outline: none;
  }
`;
export const DataList = styled.datalist`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  background-color: ${colors.mainBgColor};
`;

export const MileageInput = styled(FormInput)`
  width: 160px;

  &:first-of-type {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 1px solid #8a8a8933;
  }

  &:nth-of-type(2) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  width: 136px;
  height: 48px;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  padding: 14px 44px;
  background-color: ${colors.secondaryAccentColor};
  color: ${colors.textLightColor};
  border-radius: 12px;
  transition: background-color 0.3 ease-in;

  &:hover,
  &:focus {
    background-color: ${colors.mainAccentColor};
  }
`;
