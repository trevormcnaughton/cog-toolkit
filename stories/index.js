import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Button,
  Card,
  Input,
  Modal,
  Notification,
  Textarea,
  Grid,
} from '../src'

import ModalStory from './ModalStory'
import CustomGrid from './CustomGrid'

const styles = {
  push: {
    marginBottom: '1rem',
  }
}

storiesOf('Button', module)
  .add('with text', () => (
    <span>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <Button primary onClick={action('clicked')}>Hello Button</Button>
    </span>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('Card', module)
  .add('Basic', () => (
    <Card>
      <Card.Body>Basic card, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo modi dolorum praesentium vel asperiores ipsam amet eligendi rerum, eveniet repudiandae, dolore dignissimos laboriosam, officiis, quisquam nobis maxime fugiat dicta.</Card.Body>
    </Card>
  ))
  .add('with Header and Title', () => (
    <Card>
      <Card.Header><Card.Title>Card Title</Card.Title></Card.Header>
      <Card.Body>
        <p>Some stuff in here</p>
      </Card.Body>
    </Card>
  ))

storiesOf('Input', module)
  .add('Basic', () => (
    <Input placeholder='Some input' />
  ))

storiesOf('Textarea', module)
  .add('Basic', () => (
    <Textarea placeholder='Some input' />
  ))

storiesOf('Notifications', module)
  .add('Basic', () => (
    <span>
      <Notification style={styles.push}>This is default notification</Notification>
      <Notification style={styles.push} info>And this is an info notification</Notification>
      <Notification style={styles.push} warning>This is a warning notification</Notification>
      <Notification error>This is an error notification</Notification>
    </span>
  ))
  .add('with complex children', () => (
    <Notification info style={{fontSize: '0.875rem'}}>
      <h4 style={{margin: 0}}>Hey, Listen!</h4>
      <p>And this is an info notification</p>
      <Button small>With Buttons!</Button>
    </Notification>
  ))


storiesOf('Modal', module)
  .add('Basic', () => (
    <ModalStory />
  ))

storiesOf('Grid', module)
  .add('Basic (auto columns)', () => (
    <span>
      <Grid>
        {[1,2,3,4].map(item =><Grid.Item><Card><Card.Body>Item {item}</Card.Body></Card></Grid.Item>)}
      </Grid>
    </span>
  ))
  .add('customizable', () => (
    <CustomGrid />
  ))


storiesOf('Log In', module)
  .add('Basic', () => (
    <Card>
      <Card.Header><Card.Title>Log In</Card.Title></Card.Header>
      <Card.Body>
        <Input label='Email' placeholder='Your Email' style={styles.push}/>
        <Input label='Password' placeholder='Your Password' type='password' />
      </Card.Body>
        <Card.Footer>
          <Button primary fit>Log In</Button>
        </Card.Footer>
    </Card>
  ))
