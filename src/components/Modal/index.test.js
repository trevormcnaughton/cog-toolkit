import React from 'react'
import renderer from 'react-test-renderer'

import Modal from './index'

const noop = () => {}

// TODO: Add interactivity tests

describe('Modal', () => {
  describe('snapshots', () => {
    it('renders a hidden modal', () => {
      const tree = renderer.create(
        <Modal show={false}>
          <p>Some modal</p>
        </Modal>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a visible modal', () => {
      const tree = renderer.create(
        <Modal show={true}>
          <p>Some modal</p>
        </Modal>
      )

      expect(tree).toMatchSnapshot()
    })
    it('renders a modal with header', () => {
      const tree = renderer.create(
        <Modal
          title="My Modal"
          show={true}
          onDismissal={noop}>
          <Modal.Body>Modal Stuff!</Modal.Body>
        </Modal>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
