import React, { Component } from 'react'
import Header from './header'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>test only</Header>
      </div>
    )
  }
}

export default App
 