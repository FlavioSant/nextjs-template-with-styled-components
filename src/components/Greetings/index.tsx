import Image from 'next/image';

import logoImg from '../../../public/next-logo.png';

import { Container } from './styles';

const Greetings: React.FC = () => {
  return (
    <Container>
      <h1>NextJS Starter</h1>
      <Image src={logoImg} placeholder="blur" alt="NextJS" />
      <p>
        An NextJS template including Typescript, Styled-components and ESLint.
      </p>
    </Container>
  );
};

export { Greetings };
