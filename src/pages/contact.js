import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <h1>Contact</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
