import React, { PureComponent } from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Modal } from '../src'

export default class ModalStory extends PureComponent {
  state = {
    showModal: false,
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Open Modal</Button>
        <Modal
          title="My Modal"
          show={this.state.showModal}
          onDismissal={this.toggleModal}>
          <Modal.Body>Modal Stuff!</Modal.Body>
        </Modal>
      </div>
    )
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal }, action('Toggling Modal'))
  }
}
