import React, { PureComponent } from 'react'
import theme from '../../util/theme'
import styled from 'styled-components'

export default class Button extends PureComponent {
  render() {
    const { className, children, disabled = false, primary, fit, style, small } = this.props
    const Button = styled.button`
      position: relative;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      width: ${({ fit }) => (fit ? '100%' : 'auto')};
      color: ${({ primary }) => (primary ? '#FFF' : theme.color.primary)};
      font-family: var(--font-family-base);
      font-size: ${({ small }) => (small ? '0.75rem' : '0.875rem')};
      font-weight: 500;
      vertical-align: middle;
      white-space: nowrap;
      text-align: center;
      text-decoration: none;
      background: ${({ primary }) => (primary ? theme.color.primary : '#FFF')};
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 2px;
      transition: background 200ms;
      outline: 0;
      overflow: hidden;
      cursor: pointer;
      appearance: none;
      user-select: none;
      transition: background-color 150ms, color 150ms, border 150ms,
        box-shadow 150ms;

      &:hover {
        background: ${({ primary }) =>
          primary ? theme.color.primaryLight : theme.color.greyLightest};
      }

      :disabled {
        pointer-events: none;
        cursor: not-allowed
        opacity: 0.7;
      }
    `

    return (
      <Button
        className={className}
        disabled={disabled}
        style={style}
        onClick={this.props.onClick}
        primary={primary}
        small={small}
        fit={fit}
      >
        {children}
      </Button>
    )
  }
}
