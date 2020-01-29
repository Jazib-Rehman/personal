import React from 'react'
import Layout from './../layout'
import Banner from './../../components/banner'
import OurFood from './ourfood'
import Channels from './channels'
import Store from './store'
import Footer from './../../components/footer'
import ImageBlock from './../../components/imageblock'


import ScrollUpButton from "react-scroll-up-button";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="trans-all" >
        <Banner />
        <div className="flex justify-center parallax2 ">
          <div className="w-2/3 m-auto">
            <OurFood />
            <Channels />
            <Store />
          </div>
        </div>
        <ImageBlock />
        <ScrollUpButton
          ContainerClassName="p-2 rounded-full" />
        <Footer />
      </Layout>
    )
  }

}


export default Home
