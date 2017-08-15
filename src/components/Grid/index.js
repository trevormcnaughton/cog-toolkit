import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: grid;
  grid-template-rows: auto;
  ${({template}) => template ? `grid-template-columns: ${template}` : `grid-auto-flow: column`};
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  width: 100%;
`

const GridItem = styled.section`
  display: flex;
`

const Grid = ({children, template, style}) => (
  <Container
    style={style}
    template={template}>
    {children}
  </Container>
)

Grid.Item = GridItem

export default Grid
