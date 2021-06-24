import { Container } from './styles';

const Greetings: React.FC = () => {
  return (
    <Container>
      <h1>NextJS Starter</h1>
      <img src="/react-logo.png" alt="React" />
      <p>
        An NextJS template including Typescript, Styled-components and ESLint.
      </p>
    </Container>
  );
};

export { Greetings };
