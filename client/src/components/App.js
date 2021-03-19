import React, { Component } from 'react'
import Header from './header'
import Tweet from './Tweet'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">Test only</Header>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-md-2">
            <Tweet>hi how are you!</Tweet>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
 