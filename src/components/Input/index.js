import React, { PureComponent } from 'react'
import theme from '../../util/theme'
import styled from 'styled-components'

const noop = () => {}

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-family: var(--font-family-base);
  outline: none;
  border: 1px solid ${theme.color.greyLight};
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: rgba(76, 113, 239, 0.5);
    box-shadow: 0 0 0 1px rgba(76, 113, 239, 0.5);
  }
`

const Textarea = StyledInput.withComponent('textarea')

const InputExpandable = Textarea.extend`
  display: flex;
  align-content: center;
  overflow: hidden;
  resize: none;
  outline: none;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`

export default class Input extends PureComponent {
  constructor(props) {
    super(props)

    this.sanitizer = str => str
    this.textArea = this.input = null

    this.state = {
      inputValue: props.defaultValue || '',
      rows: 1,
    }
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

  componentDidUpdate() {
    if (this.props.expandable) {
      this.handleAutoResizeTextarea()
    }
  }

  componentDidMount() {
    if (this.props.expandable && this.textArea && this.textArea.scrollHeight) {
      this.baselineScrollHeight = this.textArea.scrollHeight
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
      label,
      stripped,
    } = this.props
    const { inputValue, rows } = this.state

    const content = expandable
      ? <InputExpandable
          disabled={disabled}
          innerRef={component => (this.textArea = component)}
          placeholder={placeholder}
          onBlur={this.handleBlur}
          onChange={this.updateInputValue}
          onKeyDown={this.handleKeyDown}
          rows={rows}
          value={inputValue}
        />
      : <StyledInput
          readOnly={readOnly}
          disabled={disabled}
          onBlur={this.handleBlur}
          onChange={this.updateInputValue}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
          innerRef={component => (this.input = component)}
          style={style}
          type={type}
          value={inputValue}
        />

    return (
      <span className={className} style={style}>
        {label &&
          <Label>
            {label}
          </Label>}
        {content}
      </span>
    )
  }

  handleAutoResizeTextarea = () => {
    const scrollHeight = (this.textArea && this.textArea.scrollHeight) || 0
    const hasValue = this.textArea && this.textArea.value

    this.setState({
      // $FlowFixMe
      rows: hasValue ? Math.ceil(scrollHeight / this.baselineScrollHeight) : 1,
    })
  }

  getValue() {
    return this.state.inputValue
  }

  setValue(value) {
    this.setState({ inputValue: value })
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
