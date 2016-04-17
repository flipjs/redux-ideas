// pseudo example

import React, { Component, PropTypes } from 'react'

const propTypes = {
  onRefreshButtonClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

function DataTable (props) {
  const handleRefreshButtonClick = (event) => {
    props.onRefreshButtonClick(event)
  }
  return (
    <div>
      <Button onClick={handleRefreshButtonClick}
      <Title name={props.name} />
      <Table data={props.data} />
    </div>
  )
}

DataTable.propTypes = propTypes

export default DataTable

