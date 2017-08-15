import React, { PureComponent } from 'react'
import theme from '../../util/theme'
import styled from 'styled-components'

const StyledModal = styled.section`
  display: flex;
  position: fixed;
  z-index: 9990;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.64);
  transition: opacity 200ms;
  will-change: opacity;
`

const Frame = styled.section`
  position: relative;
  margin: auto;
  width: 32rem;
  background: #fff;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 400ms 200ms cubic-bezier(0.175, 0.665, 0.320, 1),
    opacity 400ms 200ms;
  will-change: transform;
`

const Header = styled.header`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid ${theme.color.greyLight};
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 900;
`

const CloseButton = styled.section`
  font-size: 1.5rem;
  cursor: pointer;
`

const Body = styled.section`
  position: relative;
  padding: 1.5rem;
`

export default class Modal extends PureComponent {
  render() {
    const {
      children,
      className,
      onDismissal,
      title,
      show,
      large,
      small,
    } = this.props

    return show
      ? <StyledModal>
          <Frame>
            {title &&
              <Header>
                <Title>
                  {title}
                </Title>
                <CloseButton onClick={onDismissal}>&times;</CloseButton>
              </Header>}
            {children}
          </Frame>
        </StyledModal>
      : null
  }

  static Body = Body
}
