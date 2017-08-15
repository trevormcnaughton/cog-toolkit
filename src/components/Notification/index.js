// @flow
type Props = {
  text?: string,
  warning?: boolean,
  info?: boolean,
  className?: string,
  children?: any,
  error?: boolean,
}

import React from 'react'
import styled from 'styled-components'
import theme from '../../util/theme'

const Notification = ({
  children,
  className,
  error,
  info,
  style,
  text,
  warning,
}: Props) => {
  const Notification = styled.section`
    width: 100%;
    padding: 1rem;
    border-radius: 2px;
    background: #ffffff;
    border-left: 4px solid;
    border-color: ${props => {
        if (props.info) {
          return theme.color.blue
        } else if (props.warning) {
          return theme.color.warning
        } else if (props.error) {
          return theme.color.error
        } else {
          return theme.color.grey
        }
      }
    };
    box-shadow: 0 2px 8px 0 rgba(52,55,65,0.16);
  `

  return (
    <Notification
      info={info}
      warning={warning}
      error={error}
      style={style}>
      {children ? children : text}
    </Notification>
  )
}

export default Notification
