import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


export default class Events extends Component {
  render() {
    return (
      <div className="events">
        <h1>Gallery</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
