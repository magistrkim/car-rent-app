import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const StyledButton = ({ title, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};

export default StyledButton;

StyledButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
