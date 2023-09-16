import { Section, Container, Title, SocialsLink, SocialsItem, SocialsList } from './ContactsPage.styled';
import { ReactComponent as Viber } from '../../assets/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Gmail } from '../../assets/gmail.svg';

const ContactsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Send us message</Title>
        <SocialsList>
          <SocialsItem>
            <SocialsLink
              href="https://www.facebook.com/nataliya.kachor"
              aria-label="Facebook link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Telegram />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://instagram.com/magistr_kim?igshid=OGQ5ZDc2ODk2ZA=="
              aria-label="Instagram link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Whatsapp />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.linkedin.com/in/nataliya-kachor/"
              aria-label="Youtube link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Viber />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://github.com/magistrkim"
              aria-label="Youtube link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Gmail />
            </SocialsLink>
          </SocialsItem>
        </SocialsList>
      </Container>
    </Section>
  );
};

export default ContactsPage;
