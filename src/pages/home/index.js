import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import OurFood from './ourfood'
import Channels from './channels'
import Store from './store'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'


class Home extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Layout >
        <Banner />
        <div className="parallax2">
          <OurFood />
          <Channels />
          <Store />
        </div>
        <ImageBlock />
        <Footer />
      </Layout>
    )
  }

}


export default Home
