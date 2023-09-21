import { StyledHeader, LogoImg, Button } from './Header.styled';
import Navbar from '../Navbar/Navbar';
import { logoPng } from '../../assets';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoImg src={logoPng} alt="logo-image" />
      </Link>
      <Navbar />
      <Button to="/contacts">CONTACT US</Button>
    </StyledHeader>
  );
};

export default Header;
