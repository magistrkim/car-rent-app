import { Section, Container, Title } from './ContactsPage.styled';
import Socials from '../../components/Socials/Socials';

const ContactsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Follow us on social media</Title>
        <Socials />
      </Container>
    </Section>
  );
};

export default ContactsPage;
