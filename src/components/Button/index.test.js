import React from 'react'
import renderer from 'react-test-renderer'
import sinon from 'sinon'

import Button from './index'

const noop = () => {}

describe('Button', () => {
  describe('snapshots', () => {
    it('renders a default button with text', () => {
      const tree = renderer.create(
        <Button onClick={noop}>Button</Button>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a primary button with text', () => {
      const tree = renderer.create(
        <Button primary onClick={noop}>Button</Button>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a small default button with text', () => {
      const tree = renderer.create(
        <Button small onClick={noop}>Button</Button>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a small primary button with text', () => {
      const tree = renderer.create(
        <Button primary small onClick={noop}>Button</Button>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
