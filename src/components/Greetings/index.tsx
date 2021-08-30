import Image from 'next/image';
import { Typography } from '../Typography';

import { Container } from './styles';

export const Greetings: React.FC = () => (
  <Container>
    <Typography as="heading1">NextJS Starter Template</Typography>
    <Image src="/next-logo.png" width={250} height={250} alt="NextJS" />
    <Typography as="body2">
      An NextJS template including Typescript, Styled-components and ESLint.
    </Typography>
  </Container>
);
