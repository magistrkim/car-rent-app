import { Section, Container, Title, SocialsLink, SocialsItem, SocialsList } from './ContactsPage.styled';
import { ReactComponent as Viber } from '../../assets/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Gmail } from '../../assets/gmail.svg';

const ContactsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Send message</Title>
        <SocialsList>
          <SocialsItem>
            <SocialsLink
              href="https://web.telegram.org"
              aria-label="telegram link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Telegram />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.whatsapp.com"
              aria-label="whatsapp link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Whatsapp />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.viber.com"
              aria-label="viber link"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Viber />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink
              href="https://www.google.com"
              aria-label="gmail link"
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
