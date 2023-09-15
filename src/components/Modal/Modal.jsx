import PropTypes from 'prop-types';
import { xCross } from '../../assets';
import { ModalOverlay, ModalFrame, Button, Image } from './Modal.styled';

const Modal = ({
  //   data: {
  //     img,
  //     make,
  //     model,
  //     year,
  //     rentalPrice,
  //     rentalConditions,
  //     address,
  //     rentalCompany,
  //     accessories,
  //     type,
  //     description,
  //     id,
  //     functionalities,
  //   },
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalFrame>
        <Button onClick={onClose}>
          <Image src={xCross} alt="close-cross" />
        </Button>
        {/* <h2>Car Details</h2>
        <img src={img} alt={`${make} ${model}`} />
        <p>{rentalPrice}</p>
        <p>{year}</p>
        <p>{id}</p>
        <p>{address}</p>
        <p>{description}</p>
        <p>
          {accessories}
          {functionalities}
        </p>
        <p>{address.split(',')[1]}</p>
        <p>{address.split(',')[2]}</p>
        <p>{type}</p>
        <p>{rentalConditions}</p>
        <p>{rentalCompany}</p> */}
      </ModalFrame>
    </ModalOverlay>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  //   data: PropTypes.shape({
  //     img: PropTypes.string,
  //     make: PropTypes.string.isRequired,
  //     model: PropTypes.string.isRequired,
  //     year: PropTypes.number.isRequired,
  //     rentalPrice: PropTypes.string.isRequired,
  //     address: PropTypes.string.isRequired,
  //     description: PropTypes.string.isRequired,
  //     rentalCompany: PropTypes.string.isRequired,
  //     rentalConditions: PropTypes.string.isRequired,
  //     type: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired,
  //     accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  //     functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   }).isRequired,
};
