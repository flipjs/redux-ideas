// pseudo example

import React, { Component, PropTypes } from 'react'

const propTypes = {
  loadData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default class DataTable extends Component {
  constructor (props) {
    super(props)
    this.handleRefreshButtonClick =
      this.handleRefreshButtonClick.bind(this)
  }

  componentDidMount () {
    this.props.loadData()
  }

  handleRefreshButtonClick () {
    this.props.loadData()
  }

  render () {
    return (
      <div>
        <Button onClick={this.handleRefreshButtonClick} />
        <Title name={props.name} />
        <Table data={props.data} />
      </div>
    )
  }
}
DataTable.propTypes = propTypes

