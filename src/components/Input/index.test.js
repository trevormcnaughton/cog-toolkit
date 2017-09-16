import React from 'react'
import renderer from 'react-test-renderer'

import Input from './index'

describe('Input', () => {
  describe('snapshots', () => {
    it('renders a basic input with placeholder', () => {
      const tree = renderer.create(<Input placeholder='Some input' />)

      expect(tree).toMatchSnapshot()
    })
    it('renders a basic input with label', () => {
      const tree = renderer.create(<Input label='Some input' placeholder='Some input' />)

      expect(tree).toMatchSnapshot()
    })
  })
})
