import PropTypes from 'prop-types';
import { List } from './AdvertsList.styled';
import AdvertsItem from '../AdvertsItem/AdvertsItem';

const AdvertsList = ({ data }) => {
  return (
    <List>
      {data.map(item => (
        <li key={`${item.id}`} data={item}>
          <AdvertsItem data={item} />
        </li>
      ))}
    </List>
  );
};

export default AdvertsList;

AdvertsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
