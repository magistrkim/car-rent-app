import { NavigationList, StyledNavLink } from "./Navbar.styled";

const Navbar = () => {
    return (
      <nav>
        <NavigationList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorite">Favorite</StyledNavLink>
          </li>
        </NavigationList>
      </nav>
    );
}

export default Navbar;