import React from 'react'
//import { observer } from 'mobx-react'

//@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class Home extends React.Component {
  static fetchData({state}) {
    state.app.title = 'Home'
  }
  render() {
    return (
      <section>
        <h1>Home</h1>
        <p>React Mobx Universal starter</p>
      </section>
    )
  }
}