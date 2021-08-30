import { Container, parsedTypographys } from './styles';

export interface TypographyProps {
  as: keyof typeof parsedTypographys;
  align?: string;
  color?: string;
  fontSize?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};
