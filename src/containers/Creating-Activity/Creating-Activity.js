import React, { Component } from 'react'
import { observer } from 'mobx-react'

// TODO: HOC !!!!


@observer
export default class CreatingActivity extends Component {
  requestHandler = null

  constructor(requestHandler) {
    super()
    this.requestHandler = requestHandler
  }

  render() {
    return <main />
  }
}
