import { injectGlobal } from 'styled-components'
import theme from './util/theme'
import Button from './components/Button'
import Input from './components/Input'
import Textarea from './components/Textarea'
import Card from './components/Card'
import Modal from './components/Modal'
import Notification from './components/Notification'
import Grid from './components/Grid'

injectGlobal`
  * {box-sizing: border-box;}

  body {
    font-family: -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
    color: #3A3B3C;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export { theme, Button, Card, Input, Textarea, Modal, Notification, Grid }
