import React, { PureComponent } from 'react'
import theme from '../../util/theme'
import styled from 'styled-components'

const noop = () => {}

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-family: var(--font-family-base);
  outline: none;
  border: 1px solid ${theme.color.greyLight};
  resize: none;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: rgba(76, 113, 239, 0.5);
    box-shadow: 0 0 0 1px rgba(76, 113, 239, 0.5);
  }
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`

export default class Textarea extends PureComponent {
  constructor(props) {
    super(props)

    this.sanitizer = str => str
    this.textArea = this.input = null

    this.state = { inputValue: props.defaultValue || '' }
  }

  componentWillMount() {
    const { defaultValue, restrictionPattern } = this.props

    if (restrictionPattern) {
      this.sanitizer = str => str.replace(restrictionPattern, '')
    }

    if (defaultValue) {
      this.setState({ inputValue: this.sanitizer(defaultValue) })
    }
  }

  render() {
    const {
      className,
      disabled,
      expandable,
      isValid,
      type,
      placeholder,
      readOnly,
      style,
      stripped,
      rows,
    } = this.props
    const { inputValue } = this.state

    return (
      <span className={this.props.className} style={this.props.style}>
        {this.props.label &&
          <Label>
            {this.props.label}
          </Label>}
        <StyledTextarea
          disabled={disabled}
          ref={ref => {
            this.textArea = ref
          }}
          placeholder={placeholder}
          onBlur={this.handleBlur}
          onChange={this.updateInputValue}
          onKeyDown={this.handleKeyDown}
          rows={rows || 4}
          value={inputValue}
        />
      </span>
    )
  }

  getValue() {
    return this.state.inputValue
  }

  setValue(value: string) {
    const inputValue = this.sanitizer(value)

    this.setState({ inputValue })
    // $FlowFixMe
    this.props.onChange(inputValue)
  }

  updateInputValue = ({ target: { value } }: EventHandler) => {
    const inputValue = this.sanitizer(value)

    this.setState({ inputValue })
    // $FlowFixMe
    this.props.onChange(inputValue)
  }

  handleKeyDown = (event: EventHandler) => {
    const { keyCode, shiftKey } = event
    const {
      expandable,
      clearOnSubmit,
      reportDownArrowPressed,
      reportEscapeAttempt,
      reportSubmitAttempt,
      reportTabPressed,
      reportUpArrowPressed,
    } = this.props

    // Detect submit attempt by prestting Enter or Return
    if (keyCode === 13 && !(expandable && shiftKey)) {
      if (expandable) {
        event.preventDefault()
      }

      if (clearOnSubmit) {
        this.setState({ inputValue: '' })
      }
      // $FlowFixMe
      reportSubmitAttempt(this.state.inputValue || '')
    }

    // Detect `Esc` press
    if (keyCode === 27) {
      // $FlowFixMe
      reportEscapeAttempt()
    }

    // Detect up arrow
    if (keyCode === 40) {
      // $FlowFixMe
      const prevent = reportDownArrowPressed()
      if (prevent) {
        event.preventDefault()
      }
    }

    // Detect down arrow
    if (keyCode === 38) {
      // $FlowFixMe
      const prevent = reportUpArrowPressed()
      if (prevent) {
        event.preventDefault()
      }
    }

    // Report `Tab`
    if (keyCode === 9 && !shiftKey) {
      // $FlowFixMe
      const prevent = reportTabPressed()
      if (prevent) {
        event.preventDefault()
      }
    }
  }

  handleBlur = () => {
    // $FlowFixMe
    this.props.onBlur()
  }

  focus() {
    const node = this.input || this.textArea

    if (node) {
      node.focus()
    }
  }

  static defaultProps = {
    className: '',
    clearOnSubmit: true,
    disabled: false,
    expandable: false,
    isValid: true,
    onBlur: noop,
    onChange: noop,

    reportEscapeAttempt: noop,
    reportSubmitAttempt: noop,
    reportTabPressed: noop,
    reportUpArrowPressed: noop,
    stripped: false,
    type: 'text',
  }
}
