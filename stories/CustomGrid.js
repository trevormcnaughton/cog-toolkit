import React, {PureComponent} from 'react'
import {Grid, Input, Card} from '../src'

const numToArray = (num) => {
  let n = []
  for (var i=1; i <= num; i++) {
    n.push(i)
  }
  return n
}

export default class CustomGrid extends PureComponent {
  state = {
    templateValue: `repeat(4, 1fr)`,
    cells: numToArray(3),
  }

  render() {
    return (
      <span>
        <Grid>
          <Input
            label='Grid Template'
            ref={component => (this.templateInput = component)}
            placeholder='enter custom template'
            reportSubmitAttempt={this.handleTemplateSubmit}
            defaultValue={this.state.templateValue}
            clearOnSubmit={false}
          />
          <Input
            label='Cells'
            type='number'
            ref={component => (this.cellsInput = component)}
            placeholder='Number of cells'
            reportSubmitAttempt={this.handleCellsSubmit}
            defaultValue={this.state.cells.length}
            clearOnSubmit={false}
          />
        </Grid>
        <Grid style={{marginTop: '1rem'}} template={this.state.templateValue}>
          {this.state.cells.map(cell => (
            <Grid.Item key={cell}>
              <Card>
                <Card.Body>
                  Item {cell}
                </Card.Body>
              </Card>
            </Grid.Item>
          ))}
        </Grid>
      </span>
    )
  }

  handleTemplateSubmit = () => {
    this.setState({templateValue: this.templateInput.getValue()})
  }

  handleCellsSubmit = () => {
    this.setState({cells: numToArray(Number(this.cellsInput.getValue()))})
  }
}
