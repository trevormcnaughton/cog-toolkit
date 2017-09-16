import React from 'react'
import renderer from 'react-test-renderer'

import Card from './index'

describe('Card', () => {
  describe('snapshots', () => {
    it('renders a card component', () => {
      const tree = renderer.create(<Card>Card</Card>)

      expect(tree).toMatchSnapshot()
    })

    it('renders a card component with body', () => {
      const tree = renderer.create(
        <Card>
          <Card.Body>
            <p>Some stuff in here</p>
          </Card.Body>
        </Card>
      )

      expect(tree).toMatchSnapshot()
    })

    it('renders a card component with header, title, and body', () => {
      const tree = renderer.create(
        <Card>
          <Card.Header><Card.Title>Card Title</Card.Title></Card.Header>
          <Card.Body>
            <p>Some stuff in here</p>
          </Card.Body>
        </Card>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
