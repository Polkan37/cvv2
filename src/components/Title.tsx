'use client';

import styled, { css } from 'styled-components';
import { colors, fonts } from '@/styles/variables';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4';

type TitleProps = {
  $type?: TitleType;
  $size?: string;
};

export const Title = styled.h1.attrs<TitleProps>(({ $type }) => ({
    as: $type || 'h1',
  }))<TitleProps>`
    font-size: ${({ $size }) => ($size ? `${$size}` : '28px')};
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${colors.text};
    text-stroke-width: 3px;
    text-stroke-color: ${colors.text};
    text-transform: uppercase;

    & span {
        font-size: 250px;
    }
  `;