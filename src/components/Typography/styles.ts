import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

import { TypographyProps } from './index';

interface ContainerProps extends TypographyProps {
  styles?: string;
}

export const parsedTypographys = {
  heading1: {
    tag: 'h1',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.h1.size};
      font-weight: ${theme.typography.h1.weight};
    `,
  },
  heading2: {
    tag: 'h2',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.h2.size};
      font-weight: ${theme.typography.h2.weight};
    `,
  },
  heading3: {
    tag: 'h3',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.h3.size};
      font-weight: ${theme.typography.h3.weight};
    `,
  },
  strong1: {
    tag: 'strong',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.s1.size};
      font-weight: ${theme.typography.s1.weight};
    `,
  },
  body1: {
    tag: 'p',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.b1.size};
      font-weight: ${theme.typography.b1.weight};
    `,
  },
  body2: {
    tag: 'p',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.b2.size};
      font-weight: ${theme.typography.b2.weight};
    `,
  },
  caption: {
    tag: 'span',
    style: css`
      color: ${props => props.theme.white};
      font-size: ${theme.typography.caption.size};
      font-weight: ${theme.typography.caption.weight};
    `,
  },
  div: {
    tag: 'div',
    style: css``,
  },
};

export const Container = styled('div').attrs<TypographyProps>(
  ({ as = 'heading1' }) => ({
    styles: parsedTypographys[as].style,
    as: parsedTypographys[as].tag,
  }),
)<ContainerProps>`
  ${props => props.styles};
  text-align: ${props => props.align || 'inherit'};
  color: ${props => props.color};
  margin-left: ${props => props.marginLeft || '0'};
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  font-size: ${props => props.fontSize};
`;
