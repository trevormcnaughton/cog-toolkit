// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../util/theme'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Loader = styled.section`
  display: inline-block;
  ${p => p.small ? `
    width: 1.5rem;
    height: 1.5rem;
  ` : `
    width: 3rem;
    height: 3rem;
  `}
  border: 2px solid ${theme.color.greyLight};
  border-radius: 50%;
  border-top-color: ${theme.color.primary};
  animation: ${spin} 800ms ease-in-out infinite;
  will-change: transform;
`

export default ({ small }: { small?: boolean }) => <Loader small={small} />
