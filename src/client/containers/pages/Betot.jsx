import React from 'react'
import { observer } from 'mobx-react'

@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class Betot extends React.Component {
  static fetchData({state}){
    state.app.title = 'Betot'
  }
  render() {
    return (
      <section>
        <h1>Betot</h1>
        <p className='centered'>
          <h3>Betot Page</h3>
        </p>
        <p className='centered'>Created by Tirta Nugraha, inspired by nightwolfz's mobx-starter</p>
        <p className='centered'>
          <a href="javascript:void(0)" target="_blank">
            github
          </a>
        </p>
      </section>
    )
  }
}