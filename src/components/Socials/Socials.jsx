import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import {
  SocialsItem,
  SocialsLink,
  SocialsList,
    SocialsWrapper,
} from './Socials.styled';

const Socials = () => {
  return (
    <>
      <SocialsWrapper>
        <SocialsList>
          <SocialsItem>
            <SocialsLink
              href="https://www.facebook.com/nataliya.kachor"
              aria-label="Facebook link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Facebook />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://instagram.com/magistr_kim?igshid=OGQ5ZDc2ODk2ZA=="
              aria-label="Instagram link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Instagram />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.linkedin.com/in/nataliya-kachor/"
              aria-label="Youtube link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Linkedin />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://github.com/magistrkim"
              aria-label="Youtube link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Github />
            </SocialsLink>
          </SocialsItem>
        </SocialsList>
      </SocialsWrapper>
    </>
  );
};

export default Socials;
