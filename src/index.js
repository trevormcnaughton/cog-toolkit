import { injectGlobal } from 'styled-components'
import theme from './util/theme'

import Button from './components/Button'
import Card from './components/Card'
import Grid from './components/Grid'
import Input from './components/Input'
import Loader from './components/Loader'
import Modal from './components/Modal'
import Notification from './components/Notification'
import Textarea from './components/Textarea'

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

export {
  theme,
  Button,
  Card,
  Grid,
  Input,
  Loader,
  Modal,
  Notification,
  Textarea,
}
