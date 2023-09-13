import {
  Section,
  Container,
  Title,
  Text,
  Button,
  List,
  SubTitle,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Title>Fastest & secure platform to rent a car</Title>
        <Text>
          Chose the best comfortable car around you with our C-Rent App
        </Text>
        <Button type="button" onClick={() => {}}>
          Try for FREE
        </Button>
        <List>
          <li>
            <SubTitle>87K</SubTitle>
            <Text>Cars annualy rented</Text>
          </li>
          <li>
            <SubTitle>10M+</SubTitle>
            <Text>Trusted customers</Text>
          </li>
          <li>
            <SubTitle>195</SubTitle>
            <Text>Countries supported</Text>
          </li>
        </List>
      </Container>
    </Section>
  );
};

export default HomePage;
