import React from 'react'
import theme from '../../util/theme'
import styled from 'styled-components'

const Body = styled.section`
  color: ${theme.color.greyDarkest};
  width: 100%;
  padding: 1rem;
`
const Inner = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${theme.color.greyLight};
`
const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
  color: ${theme.color.greyDark};
`
const Description = styled.p`
  margin: 0;
  word-break: break-word;
`
const Footer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
`

const Card = ({
  className,
  children,
  interactable,
  title,
  style,
  description,
  footer,
}) => {
  const Card = styled.section`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    color: ${theme.color.greyDarkest};
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    overflow: hidden;
    transition: box-shadow 200ms;
  `

  return (
    <Card className={className} style={style}>
      {children}
    </Card>
  )
}

Card.Body = Body
Card.Header = Header
Card.Title = Title
Card.Description = Description
Card.Footer = Footer

export default Card
