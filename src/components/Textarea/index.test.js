import React from 'react'
import renderer from 'react-test-renderer'

import Textarea from './index'

describe('Textarea', () => {
  describe('snapshots', () => {
    it('renders a basic input with placeholder', () => {
      const tree = renderer.create(<Textarea placeholder='Some input' />)

      expect(tree).toMatchSnapshot()
    })
    it('renders a basic input with label', () => {
      const tree = renderer.create(<Textarea label='Some input' placeholder='Some input' />)

      expect(tree).toMatchSnapshot()
    })
  })
})
