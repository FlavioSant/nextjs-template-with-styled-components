import Image from 'next/image';

import { Container } from './styles';

export const Greetings: React.FC = () => (
  <Container>
    <h1>NextJS Starter</h1>
    <Image src="/next-logo.png" width={150} height={150} alt="NextJS" />
    <p>
      An NextJS template including Typescript, Styled-components and ESLint.
    </p>
  </Container>
);
