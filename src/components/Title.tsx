'use client';

import styled, { css } from 'styled-components';
import { colors, fonts } from '@/styles/variables';

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface TitleProps {
  as?: TitleLevel; 
}
const getLevel = (tag: TitleLevel | undefined): TitleLevel =>
  ['h1', 'h2', 'h3', 'h4'].includes(tag as string) ? (tag as TitleLevel) : 'h1';

const titleStyles = {
  h1: css`
    font-size: clamp(90px, 15vw, 300px);
    font-family: ${fonts.accent};
    color: ${colors.black};
    -webkit-text-stroke: 2px ${colors.text};
    text-stroke: 2px ${colors.text};
    color: transparent;
    line-height: 1.1;
  `,
  h2: css`
    font-size: clamp(48px, 10vw, 160px);
    font-family: ${fonts.basic};
    color: ${colors.primary};
  `,
  h3: css`
    font-size: clamp(28px, 6vw, 90px);
    font-family: ${fonts.basic};
    color: ${colors.text};
  `,
  h4: css`
    font-size: clamp(20px, 4vw, 60px);
    font-family: ${fonts.basic};
    color: ${colors.text};
  `
} as const;

export const Title = styled.h1<TitleProps>`
  margin: 0;
  text-transform: uppercase;

  ${({ as }) => titleStyles[getLevel(as)]}
`;
