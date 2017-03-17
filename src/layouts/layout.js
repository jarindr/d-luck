import './Layout.global.styl'

import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import React from 'react'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
          ]}
          link={[
            {
              href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
              rel: 'stylesheet'
            },
            {
              href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
              rel: 'stylesheet'
            }
          ]}
          meta={[
          ]}
        />
        <NavBar />
        {this.props.children}
      </div>
    )
  }
})

export default Layout
