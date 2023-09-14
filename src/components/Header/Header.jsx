import { StyledHeader, LogoImg } from './Header.styled';
import Navbar from '../Navbar/Navbar';
import StyledButton from '../Button/Button';
import { logoPng } from '../../assets';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoImg src={logoPng} alt="logo-image" />
      </Link>
      <Navbar />
      <StyledButton type="button" onClick={() => {}} title="JOIN US" />
    </StyledHeader>
  );
};

export default Header;
