'use client';

import styled, { css } from 'styled-components';
import { colors, fonts } from '@/styles/variables';

type ButtonType = 'primary' | 'secondary' | 'bordered';

export type ButtonProps = {
    $type?: ButtonType;
    children?: React.ReactNode;
};

const typeStyles: Record<ButtonType, ReturnType<typeof css>> = {
    primary: css`
    background: ${colors.primary};
    color: ${colors.black};
    border: 1px solid ${colors.primary};
    font-family: ${fonts.accent};

    &:hover {
        background: ${colors.background};
        color: ${colors.text};
    }
  `,
    secondary: css`
    background: ${colors.background};
    color: ${colors.primary};
    border: 1px solid ${colors.borderSecondary};
    font-family: ${fonts.basic};

    &:hover {
        background: ${colors.primary};
        border: 1px solid ${colors.primary};
        color: ${colors.text};
    }
  `,
    bordered: css`
    max-width: 108px;
    background: transparent;
    color: ${colors.text};
    border: 1px solid ${colors.primary};
    font-family: ${fonts.basic};
    font-size: .78rem;
    padding: 0.66rem .61rem;

    &:hover {
        background: ${colors.primary};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  max-width: 225px;
  width: 100%;
  padding: 0.38rem 1rem 0.2rem;
  font-size: 1rem;
  font-weight: 743;
  letter-spacing: 1.35px;
  text-transform: uppercase;
  text-align: center;
  transition: all .4s ease-in-out;

  ${({ $type = 'primary' }) => typeStyles[$type]}

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;