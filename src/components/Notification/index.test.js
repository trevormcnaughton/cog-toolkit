import React from 'react'
import renderer from 'react-test-renderer'

import Notification from './index'

describe('Notification', () => {
  describe('snapshots', () => {
    it('renders a default notification', () => {
      const tree = renderer.create(
        <Notification>Default Notification</Notification>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a warning notification', () => {
      const tree = renderer.create(
        <Notification warning>Default Notification</Notification>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders an informational notification', () => {
      const tree = renderer.create(
        <Notification info>Default Notification</Notification>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders an error notification', () => {
      const tree = renderer.create(
        <Notification error>Default Notification</Notification>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
