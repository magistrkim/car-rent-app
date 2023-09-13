import { StyledHeader, LogoImg } from './Header.styled';
import Navbar from '../Navbar/Navbar';
import StyledButton from '../Button/Button';
import { logoPng } from '../../assets';

const Header = () => {
  return (
    <StyledHeader>
      <LogoImg src={logoPng} alt="logo-image" />
      <Navbar />
      <StyledButton type="button" onClick={() => {}} title='JOIN US'/>
    </StyledHeader>
  );
};

export default Header;
