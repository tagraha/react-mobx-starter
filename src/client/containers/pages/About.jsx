import React from 'react'
import { observer } from 'mobx-react'

@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class About extends React.Component {
  static fetchData({state}){
    state.app.title = 'About'
  }
  render() {
    return (
      <section>
        <h1>About</h1>
        <p className='centered'>
          <img className='boxed' src='/public/react-mobx.png' />
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